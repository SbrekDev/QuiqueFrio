import { useNavigate } from "react-router-dom";
import { useClientStore } from "../store";
import { Cliente } from "../types"
import ClientDetailItem from "./ClientDetailItem"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import { useState } from "react";
import { formatCash, generateClientPDF } from "../utils";

type ClienteDetailsProp= {
    cliente: Cliente
}


export default function ClientDetails({cliente} : ClienteDetailsProp) {

    const {updateCliente, getClienteById} = useClientStore()
    const id = cliente.id
    const [clicked, setClicked] = useState<boolean>(false)

    const navigate = useNavigate()
    const {deleteCliente} = useClientStore()

    function handleClick() {
        setClicked(prevClicked => !prevClicked);
    }

    const [, setEstadoFinal] = useState<string>(cliente?.estado!)

    function handleEstadoCliente(){

        getClienteById(id!)
        setEstadoFinal((prevEstado)=> {
            const nuevoEstado = prevEstado === 'Pendiente' ? 'Completado' : 'Pendiente';

            const clienteActualizado = {
                ...cliente,
                estado: nuevoEstado
            };  
            updateCliente(clienteActualizado) 
            return nuevoEstado
        })          
    }


  return (
    <div 
        className={`flex px-5 py-3  shadow-md rounded-lg space-x-5 w-full 2xl:w-[1030px] border-l-8 transition-all 
            ${cliente.estado === "Completado" ? 'border-l-green-500 hover:bg-green-100' : 'border-l-amber-400 hover:bg-amber-100'}  
            ${clicked ? `flex-col ${cliente.estado === "Completado" ? 'bg-green-100' : 'bg-amber-100'}` : 'bg-white justify-around items-center'} hover:cursor-pointer`}
        onClick={handleClick}
    
    >
      <div className={` ${clicked ? 'grid gap-8 justify-items-center grid-cols-3 mb-5' : 'flex justify-center items-center gap-8 xl:gap-15 2xl:gap-25'}`}>
      <ClientDetailItem 
            label="Nombre"
            data={cliente.nombre}
        />

        <ClientDetailItem 
            label="direccion"
            data={cliente.direccion}
        />
        <div className="hidden xl:block">
            <ClientDetailItem 
                label="telefono"
                data={cliente.telefono}
            />
        </div>

        {clicked ? (
            <>
                <ClientDetailItem 
                    label="Descripción"
                    data={cliente.descripcion}
                /> 
                <ClientDetailItem 
                    label="Email"
                    data={cliente.email}
                /> 
                <ClientDetailItem 
                    label="Ultima Visita"
                    data={cliente.ultimaVisita.toString()}
                /> 
                <ClientDetailItem 
                    label="Próxima Visita"
                    data={cliente.proximaVisita.toString()}
                /> 
                <ClientDetailItem 
                    label="Precio"
                    data={formatCash(cliente.precio)}
                /> 
            </>                
            
            ) : null}
      </div>



        <div className="xl:flex">
            {clicked ? ( 
                <>           
                    <button 
                        className="bg-green-500 w-full p-2 text-white text-sm m-1 font-bold uppercase hover:bg-green-600 cursor-pointer rounded-lg transition-colors flex items-center justify-center gap-1"
                        onClick={()=> generateClientPDF(cliente)}
                    ><DownloadIcon/>Descargar Comprobante</button>
                    <button 
                        className="bg-amber-500 w-full p-2 text-white text-sm m-1 font-bold uppercase hover:bg-green-600 cursor-pointer rounded-lg transition-colors flex items-center justify-center gap-1"
                        onClick={handleEstadoCliente}
                    ><DownloadIcon/>Cambiar Estado</button>
                </>
            ) 
            : null}
            <button className="bg-primary w-full p-2 text-white text-sm m-1 font-bold uppercase hover:bg-hover cursor-pointer rounded-lg transition-colors flex items-center justify-center gap-1"
            onClick={()=> navigate(`/editar/${cliente.id}`)}
            ><EditIcon/>Editar</button>
            <button 
                className="bg-red-500 w-full p-2 text-white text-sm m-1 font-bold uppercase hover:bg-red-600 cursor-pointer rounded-lg transition-colors flex items-center justify-center gap-1"
                onClick={()=> deleteCliente(cliente.id)}
            ><DeleteIcon/>Eliminar</button>

        </div>
        


    </div>
  )
}
