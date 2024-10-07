import { useForm} from "react-hook-form";
import Error from "../components/Error";
import { DraftCliente } from "../types";
import { useClientStore } from "../store";
import { useNavigate } from "react-router-dom";


export default function NuevoCliente() {

  const navigate = useNavigate()
  const {addCliente} = useClientStore()
  const { register, handleSubmit, formState: {errors} } = useForm<DraftCliente>()
  

  const handleSubmitForm = (data : DraftCliente) => {
    addCliente(data)
    navigate('/clientes')
  }

  return (
    <div className="flex flex-col justify-center items-center mx-auto">
        <form 
        className=" bg-white shadow-lg rounded-lg p-10 lg:mb-0 w-4/5"
        onSubmit={handleSubmit(handleSubmitForm)}
        noValidate
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
                {errors.nombre && <Error>{errors.nombre?.message?.toString()}</Error>}
                
                
            </div>
            <div className="flex space-x-3">
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
                  {errors.direccion && <Error>{errors.direccion?.message?.toString()}</Error>}
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
                  {errors.localidad && <Error>{errors.localidad?.message?.toString()}</Error>}
              </div>
            </div>
            <div className="flex space-x-3">
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
                  {errors.telefono && <Error>{errors.telefono?.message?.toString()}</Error>}
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
                  {errors.email && <Error>{errors.email?.message?.toString()}</Error>}
              </div>
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
                {errors.descripcion && <Error>{errors.descripcion?.message?.toString()}</Error>}
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
                  {errors.precio && <Error>{errors.precio?.message?.toString()}</Error>}
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
                  <label htmlFor="ultimaVisita" className="text-gray-700 uppercase font-bold">Próxima Visita</label>
                  <input
                  type="date"
                  id="proximaVisita"
                  className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-primary bg-slate-50"
                  {...register('proximaVisita')}
                  />
              </div>
              <input
              type="hidden"
              id="estado"
              className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-primary bg-slate-50"
              defaultValue='Pendiente'
              {...register('estado',)}
              />

            </div>


            <input 
            type="submit" 
            value="Agregar Cliente"
            className="bg-primary w-full p-3 text-white font-bold uppercase hover:bg-hover cursor-pointer rounded transition-colors"
            />

        </form>
    </div>
  )
}

