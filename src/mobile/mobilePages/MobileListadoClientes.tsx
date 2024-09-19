
import { useEffect, useState } from "react";
import MobileClientDetails from "../mobileComponents/MobileClientDetails";
import { useClientStore } from "../../store"


export default function MobileListadoClientes() {


  
    const [ estadoFinal, setEstadoFinal] = useState<string>('Todos')
    const [ searchTerms, setSearchTerms] = useState<string>('')
    const { clientes, getClientes, isLoading } = useClientStore();

    useEffect(() => {}, [clientes]);

      if(!isLoading){
       getClientes()
      }

      const handleChange = (e: string) => {
        setEstadoFinal(e)   
      }

      const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerms(e.target.value)
      }



      const clientesFiltrados = clientes.filter(cliente => cliente.nombre.toLowerCase().includes(searchTerms.toLowerCase()))



  return (

    <div className="flex flex-col items-center mx-auto p-2 mt-24 h-screen w-full">
          <div className="bg-white shadow-md rounded-md p-5 pl-10 pr-10 w-full mb-5 flex flex-col items-start">
            <h2 className="text-3xl mb-3 text-slate-600 w-full flex justify-center items-center">Filtros</h2>
              <div className="flex gap-3 items-center justify-between w-full">
                <p className="text-slate-400 font-bold">Estado Actual</p>
                <select
                  id="estadoSelectFind"
                  className=" w-40 bg-transparent border-b-2 focus:outline-none focus:border-b-sky-500 bg-slate-50 p-2"
                  onChange={(e)=> handleChange(e.target.value)}>
                    <option value="Todos">Todos</option>
                    <option value="Pendiente">Pendientes</option>
                    <option value="Completado">Completados</option>
                </select>
              </div>
              <div className="flex gap-3 items-center justify-between w-full">
                <p className="text-slate-400 font-bold">Nombre</p>
                <input 
                  type="text"
                  id="buscar"
                  placeholder="Nombre y Apellido"
                  className="p-2 bg-transparent border-b-2 focus:outline-none focus:border-b-sky-500 bg-slate-50 w-full" 
                  onChange={handleSearchChange}
                />
              </div>



                
  
          </div>
         <div className={`flex flex-col w-full space-y-3 h-screen`}>
         {clientesFiltrados.length ? (
                <>
                  {estadoFinal === 'Todos' ? 
                    clientesFiltrados.map(cliente => 
                      (
                        <MobileClientDetails 
                          key={cliente.id}
                          cliente={cliente}
                        />
                      )
                    )    
                  :                   
                  clientesFiltrados.map(cliente => 
                    cliente.estado === estadoFinal ? (
                      <MobileClientDetails 
                        key={cliente.id}
                        cliente={cliente}
                      />
                    ) : null
                  )                  
                  }
                  <div className="bg-slate-400 w-full min-h-4 rounded-full"></div>
                </>
              ) : (
                <>
                  <p className="text-center text-slate-700">No se han Encontrado Resultados</p>
                </>
          )}
         </div>
                        

                       
          
    </div>
  )
}
