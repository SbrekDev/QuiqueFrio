import { useForm} from "react-hook-form";
import MobileError from "../mobileComponents/MobileError";
import { Cliente, DraftCliente} from "../../types";
import { useClientStore } from "../../store";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function MobileEditarCliente() {

    const params = useParams()
    const {id} = params
    const navigate = useNavigate()
    const { clientes, isLoading, updateCliente, getClienteById} = useClientStore()
    const cliente = clientes.length > 0 ? clientes.find(cliente => cliente.id === id) : undefined;
    const { register, handleSubmit, formState: { errors } } = useForm<Cliente>({
      defaultValues: {
          nombre: cliente?.nombre,
          direccion: cliente?.direccion,
          localidad: cliente?.localidad,
          telefono: cliente?.telefono,
          email: cliente?.email || '',
          descripcion: cliente?.descripcion,
          precio: cliente?.precio || '',
          ultimaVisita: cliente?.ultimaVisita,
          proximaVisita: cliente?.proximaVisita,
      }
  });

    const [ estadoFinal, setEstadoFinal] = useState<string>(cliente?.estado!)


    const handleEstado = (e: string) => {
      setEstadoFinal(e)
       
    }

    
    
    const handleSubmitForm = (data : DraftCliente) => {
      
      getClienteById(id!)

      const clienteActualizado = {
        ...data,
        estado: estadoFinal
      };

      updateCliente(clienteActualizado)
      
      navigate('/mobile/clientes')
    }

    

    useEffect(() => {
      const handleBeforeUnload = (event: { preventDefault: () => void; returnValue: string; }) => {
          event.preventDefault();
          event.returnValue = ''; // Esto es necesario para que el mensaje aparezca en algunos navegadores
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
      };
  }, []);


    

    if(isLoading) return 'Cargando...'

    return (
      <div className="flex flex-col justify-start items-center mx-auto h-full p-2 mt-20">
          <form 
          className=" bg-white shadow-lg rounded-lg p-5 w-full"
          onSubmit={handleSubmit(handleSubmitForm)}
          
          >
              <div className="mb-5">
                  <label htmlFor="nombre" className="text-gray-700 uppercase font-bold">Nombre y Apellido</label>
                  <input 
                  type="text"
                  id="nombre"
                  placeholder="Nombre y Apellido del cliente"
                  className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-primary bg-slate-50"
                  {...register('nombre',{
                    required: 'El nombre del cliente es obligatorio'
                  })}
                  />
                  {errors.nombre && <MobileError>{errors.nombre?.message?.toString()}</MobileError>}
                  
                  
              </div>

                <div className="mb-5">
                    <label htmlFor="direccion" className="text-gray-700 uppercase font-bold">Dirección</label>
                    <input 
                    type="text"
                    id="direccion"
                    placeholder="Dirección del cliente"
                    className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-primary bg-slate-50"
                    {...register('direccion',{
                      required: 'La dirección del cliente es obligatoria'
                    })}
                    />
                    {errors.direccion && <MobileError>{errors.direccion?.message?.toString()}</MobileError>}
                </div>
                <div className="mb-5">
                    <label htmlFor="localidad" className="text-gray-700 uppercase font-bold">Localidad</label>
                    <input 
                    type="text"
                    id="localidad"
                    placeholder="Localidad del cliente"
                    className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-primary bg-slate-50"
                    {...register('localidad',{
                      required: 'La localidad del cliente es obligatoria'
                    })}
                    />
                    {errors.localidad && <MobileError>{errors.localidad?.message?.toString()}</MobileError>}
                </div>

 
                <div className="mb-5">
                    <label htmlFor="telefono" className="text-gray-700 uppercase font-bold">Teléfono</label>
                    <input
                    type="tel"
                    id="telefono"
                    placeholder="Telefono del cliente"
                    className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-primary bg-slate-50"
                    {...register('telefono',{
                      required: 'El telefono del cliente es obligatorio',
                      pattern: {
                        value: /^[0-9]+$/, 
                        message: "Solo se permiten números"
                    }})}
                    />
                    {errors.telefono && <MobileError>{errors.telefono?.message?.toString()}</MobileError>}
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="text-gray-700 uppercase font-bold">Email</label>
                    <input
                    type="email"
                    id="email"
                    placeholder="Email del cliente"
                    className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-primary bg-slate-50"
                    {...register("email", {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email No Válido'
                      }
                    })} 
                    />
                    {errors.email && <MobileError>{errors.email?.message?.toString()}</MobileError>}
                </div>
              <div className="mb-5">
                  <label htmlFor="descripcion" className="text-gray-700 uppercase font-bold">Descripcion del Servicio</label>
                  <textarea
                  id="descripcion"
                  placeholder="Describe el servicio realizado"
                  className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-primary bg-slate-50"
                  {...register('descripcion',{
                    required: 'La descripcion es obligatoria',
                    maxLength: {
                      value: 150,
                      message: 'La descripción no puede exceder los 150 caracteres',
                    }
                    
                  })}
                  />
                  {errors.descripcion && <MobileError>{errors.descripcion?.message?.toString()}</MobileError>}
              </div>
              <div className="mb-5">
                    <label htmlFor="precio" className="text-gray-700 uppercase font-bold">Precio</label>
                    <input
                    type="number"
                    id="precio"
                    placeholder="Precio Cobrado"
                    className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-primary bg-slate-50"
                    {...register('precio',{
                      pattern: {
                        value: /^[0-9]+$/, 
                        message: "Solo se permiten números"
                    }})}
                    />
                    {errors.precio && <MobileError>{errors.precio?.message?.toString()}</MobileError>}
                </div>
              <div className="flex space-x-3">
                <div className="mb-5">
                    <label htmlFor="ultimaVisita" className="text-gray-700 uppercase font-bold">Última visita</label>
                    <input
                    type="date"
                    id="ultimaVisita"
                    className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-primary bg-slate-50"
                    {...register('ultimaVisita')}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="proximaVisita" className="text-gray-700 uppercase font-bold">Próxima Visita</label>
                    <input
                    type="date"
                    id="proximaVisita"
                    className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-primary bg-slate-50"
                    {...register('proximaVisita')}
                    />
                </div>
              </div>
              <div className="mb-5">
                    <label htmlFor="estado" className="text-gray-700 uppercase font-bold">Estado Actual</label>
                    <select
                    id="estadoSelect"
                    className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-primary bg-slate-50"
                    onChange={(e)=> handleEstado(e.target.value)}>

                      <option>-- Seleccionar --</option>
                      <option value="Pendiente">Pendiente</option>
                      <option value="Completado">Completado</option>
                    </select>
                </div>



              <input 
              type="submit" 
              value="Guardar Cambios"
              className="bg-primary w-full p-3 text-white font-bold uppercase hover:bg-hover cursor-pointer rounded transition-colors"
              />

          </form>
          <div className="bg-slate-400 w-full min-h-4 mt-2 rounded-full"></div>
      </div>
    )
   
}


