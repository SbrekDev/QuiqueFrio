import { useNavigate } from "react-router-dom";
import { useClientStore } from "../../store";
import { Cliente } from "../../types"
import MobileClientDetailItem from "./MobileClientDetailItem"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import CachedIcon from '@mui/icons-material/Cached';
import { useState } from "react";
import { formatCash, generateClientPDF } from "../../utils";

type ClienteDetailsProp= {
    cliente: Cliente
}

export default function MobileClientDetails({cliente} : ClienteDetailsProp) {


    const [clicked, setClicked] = useState<boolean>(false)
    const {updateCliente, getClienteById} = useClientStore()
    const id = cliente.id
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
        className={`flex flex-col  py-2 shadow-md rounded-lg w-full border-l-8 transition-all 
            ${cliente.estado === "Completado" ? 'border-l-green-500 hover:bg-green-100' : 'border-l-amber-400 hover:bg-amber-100'}  
            ${clicked ? `${cliente.estado === "Completado" ? 'bg-green-100' : 'bg-amber-100'}` : 'bg-white items-center'} hover:cursor-pointer`}
        onClick={handleClick}
    
    >
      <div className={` ${clicked ? 'grid gap-4 justify-items-start p-5 grid-cols-2 mb-5' : 'flex justify-evenly gap-4 items-center w-full pl-5'}`}>
        <MobileClientDetailItem 
            label="Nombre"
            data={cliente.nombre}
        />
        <MobileClientDetailItem 
            label="direccion"
            data={cliente.direccion}
        />

        <div className={` ${clicked ? 'block' : 'hidden sm:block'} `}>
            <MobileClientDetailItem
                label="telefono"
                data={cliente.telefono}
            />
        </div>

        {clicked ? (
            <>

                <MobileClientDetailItem 
                    label="Email"
                    data={cliente.email}
                /> 
                <MobileClientDetailItem 
                    label="Ultima Visita"
                    data={cliente.ultimaVisita.toString()}
                /> 
                <MobileClientDetailItem 
                    label="Próxima Visita"
                    data={cliente.proximaVisita.toString()}
                /> 
                <MobileClientDetailItem 
                    label="Precio"
                    data={formatCash(cliente.precio)}
                /> 
                <MobileClientDetailItem 
                    label="Descripción"
                    data={cliente.descripcion}
                /> 
            </>                
            
            ) : null}
      </div>



        <div className={`flex p-2 w-full ${clicked ? 'flex-col' : ''}`}>
            {clicked ? (  
                <div className="flex w-full">
                <>           
                    <button 
                        className="bg-green-500 w-full p-2 text-white text-wrap text-sm m-1 font-bold uppercase hover:bg-green-600 cursor-pointer rounded-lg transition-colors flex items-center justify-center gap-1"
                        onClick={()=> generateClientPDF(cliente)}
                    ><DownloadIcon />Descargar PDF</button>
                    <button 
                        className="bg-amber-500 w-full p-2 text-white text-sm m-1 font-bold uppercase hover:bg-amber-600 cursor-pointer rounded-lg transition-colors flex items-center justify-center gap-1"
                        onClick={handleEstadoCliente}
                    ><CachedIcon/>Cambiar Estado</button>
                </>
                </div>  )        

            : null}
            <div className="flex w-full">
                <button className="bg-primary w-full py-2 px-4 text-white text-sm m-1 font-bold uppercase hover:bg-hover cursor-pointer rounded-lg transition-colors flex items-center justify-center gap-1"
                onClick={()=> navigate(`/mobile/editar/${cliente.id}`)}
                ><EditIcon/>EDITAR</button>
                <button 
                    className="bg-red-500 w-full py-2 px-4 text-white text-sm m-1 font-bold uppercase hover:bg-red-600 cursor-pointer rounded-lg transition-colors flex items-center justify-center gap-1"
                    onClick={()=> deleteCliente(cliente.id)}
                ><DeleteIcon/>ELIMINAR</button>
            </div>


        </div>
        


    </div>
  )
}
