
import ClientDetails from "../components/ClientDetails";
import { useClientStore } from "../store"


export default function ListadoClientes() {


 
    const { clientes, getClientes, isLoading } = useClientStore();

      if(!isLoading){
       getClientes()
      }



  return (

    <div className="flex flex-col items-center mx-auto p-5">
          <div className="bg-white shadow-md rounded-md p-5 w-[950px] mb-5 flex items-center justify-evenly">
            <p className="text-xl text-slate-600">Filtrar por:</p>
            <form className="flex gap-2 mt-1">
              <label htmlFor="">Todos</label>
              <input type="radio" />
              <label htmlFor="">Pendiente</label>
              <input type="radio" />
              <label htmlFor="">Completado</label>
              <input type="radio" />
            </form>
            <form className="flex gap-3 items-center px-5 py-2">
              <button className="bg-sky-500 w-full p-2 text-white text-sm uppercase hover:bg-sky-600 cursor-pointer rounded-md transition-colors">Buscar</button>
              <input 
                type="text"
                id="buscar"
                placeholder="Nombre y Apellido"
                className=" w-30 p-1 bg-transparent border-b-2 focus:outline-none focus:border-b-sky-500 bg-slate-50" />
            </form>
          </div>
         <div className="flex flex-col space-y-3 overflow-y-scroll max-h-fit">
          {clientes.length ? (
                <>


                      {clientes.map(cliente => (
                        <ClientDetails 
                          key={cliente.id}
                          cliente={cliente}

                        />
                      ))}

                </>
                
              ) : (
                <>
                  <p className="text-center text-slate-700">No hay clientes aún</p>
                </>
              )}
         </div>
                        

                       
          
    </div>
  )
}
