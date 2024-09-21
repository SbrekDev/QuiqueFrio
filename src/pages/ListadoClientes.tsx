
import { useEffect, useState } from "react";
import ClientDetails from "../components/ClientDetails";
import { useClientStore } from "../store"


export default function ListadoClientes() {


  
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

    <div className="flex flex-col items-center mx-auto p-5 w-full 2xl:w-[1050px]">
          <div className="bg-white shadow-md rounded-md p-5 w-full 2xl:w-[1050px] mb-5 flex flex-col xl:flex-row items-center justify-start gap-5 xl:gap-20">
            <h2 className="text-2xl text-slate-600 ml-6">Filtros</h2>
              <div className="flex gap-3 items-center justify-center">
                <p className="text-slate-400 font-bold">Estado Actual</p>
                <select
                  id="estadoSelectFind"
                  className=" w-40 bg-transparent border-b-2 focus:outline-none focus:border-b-primary bg-slate-50 p-2"
                  onChange={(e)=> handleChange(e.target.value)}>
                    <option value="Todos">Todos</option>
                    <option value="Pendiente">Pendientes</option>
                    <option value="Completado">Completados</option>
                </select>
              </div>
              <div className="flex gap-3 items-center justify-center ">
                <p className="text-slate-400 font-bold">Nombre</p>
                <input 
                  type="text"
                  id="buscar"
                  placeholder="Nombre y Apellido"
                  className=" w-30 p-2 bg-transparent border-b-2 focus:outline-none focus:border-b-primary bg-slate-50" 
                  onChange={handleSearchChange}
                />
              </div>



                
  
          </div>
         <div className={`flex flex-col w-full 2xl:w-[1050px] space-y-3 h-fit ${clientesFiltrados.length ? 'overflow-y-scroll' : ''}`}>
         {clientesFiltrados.length ? (
                <>
                  {estadoFinal === 'Todos' ? 
                    clientesFiltrados.map(cliente => 
                      (
                        <ClientDetails 
                          key={cliente.id}
                          cliente={cliente}
                        />
                      )
                    )    
                  :                   
                  clientesFiltrados.map(cliente => 
                    cliente.estado === estadoFinal ? (
                      <ClientDetails 
                        key={cliente.id}
                        cliente={cliente}
                      />
                    ) : null
                  )                  
                  }
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
