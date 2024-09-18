import { useNavigate } from "react-router-dom";
import { useClientStore } from "../store";
import { Cliente } from "../types"
import ClientDetailItem from "./ClientDetailItem"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { estadoBoolean } from "../pages/EditarCliente";

type ClienteDetailsProp= {
    cliente: Cliente
}

export default function ClientDetails({cliente} : ClienteDetailsProp) {

    const navigate = useNavigate()
    const {deleteCliente} = useClientStore()

    estadoBoolean;

  return (
    <div className={`flex justify-around items-center m-1 px-5 py-3 bg-white shadow-md rounded-lg space-x-5 w-[900px] ${estadoBoolean ? 'border-l-green-500' : 'border-l-amber-400'} border-l-8`}>
      
        <ClientDetailItem 
            label="Nombre"
            data={cliente.nombre}
        />

        <ClientDetailItem 
            label="direccion"
            data={cliente.direccion}
        />
        <ClientDetailItem 
            label="telefono"
            data={cliente.telefono}
        />

        <div className="flex ">
            <button className="bg-sky-500 w-full p-2 text-white text-sm m-1 font-bold uppercase hover:bg-sky-600 cursor-pointer rounded-lg transition-colors flex items-center justify-center gap-1"
            onClick={()=> navigate(`/editar/${cliente.id}`)}
            ><EditIcon/>Detalles</button>
            <button 
                className="bg-red-500 w-full p-2 text-white text-sm m-1 font-bold uppercase hover:bg-red-600 cursor-pointer rounded-lg transition-colors flex items-center justify-center gap-1"
                onClick={()=> deleteCliente(cliente.id)}
            ><DeleteIcon/>Eliminar</button>
        </div>
        


    </div>
  )
}
