

export default function NuevoCliente() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
        <form className=" bg-white shadow-lg rounded-lg p-10 lg:mb-0 w-4/5">
            <div className="mb-5">
                <label htmlFor="nombre" className="text-gray-700 uppercase font-bold">Nombre y Apellido</label>
                <input 
                type="text"
                id="nombre"
                placeholder="Nombre y Apellido del cliente"
                className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-sky-500 bg-slate-50"
                />
            </div>
            <div className="flex space-x-3">
              <div className="mb-5">
                  <label htmlFor="direccion" className="text-gray-700 uppercase font-bold">Dirección</label>
                  <input 
                  type="text"
                  id="direccion"
                  placeholder="Dirección del cliente"
                  className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-sky-500 bg-slate-50"
                  />
              </div>
              <div className="mb-5">
                  <label htmlFor="localidad" className="text-gray-700 uppercase font-bold">Localidad</label>
                  <input 
                  type="text"
                  id="localidad"
                  placeholder="Localidad del cliente"
                  className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-sky-500 bg-slate-50"
                  />
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="mb-5">
                  <label htmlFor="telefono" className="text-gray-700 uppercase font-bold">Teléfono</label>
                  <input
                  type="tel"
                  id="telefono"
                  placeholder="Telefono del cliente"
                  className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-sky-500 bg-slate-50"
                  />
              </div>
              <div className="mb-5">
                  <label htmlFor="email" className="text-gray-700 uppercase font-bold">Email</label>
                  <input
                  type="email"
                  id="email"
                  placeholder="Email del cliente"
                  className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-sky-500 bg-slate-50"
                  />
              </div>
            </div>
            <div className="mb-5">
                <label htmlFor="descripcion" className="text-gray-700 uppercase font-bold">Descripcion del Servicio</label>
                <textarea
                id="descripcion"
                placeholder="Describe el servicio realizado"
                className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-sky-500 bg-slate-50"
                />
            </div>
            <div className="mb-5">
                  <label htmlFor="precio" className="text-gray-700 uppercase font-bold">Precio</label>
                  <input
                  type="number"
                  id="precio"
                  placeholder="Precio Cobrado"
                  className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-sky-500 bg-slate-50"
                  />
              </div>
            <div className="flex space-x-3">
              <div className="mb-5">
                  <label htmlFor="ultima-visita" className="text-gray-700 uppercase font-bold">Última visita</label>
                  <input
                  type="date"
                  id="ultima-visita"
                  className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-sky-500 bg-slate-50"
                  />
              </div>
              <div className="mb-5">
                  <label htmlFor="prox-visita" className="text-gray-700 uppercase font-bold">Próxima Visita</label>
                  <input
                  type="date"
                  id="prox-visita"
                  className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-sky-500 bg-slate-50"
                  />
              </div>
            </div>


            <input 
            type="submit" 
            value="Agregar Cliente"
            className="bg-sky-500 w-full p-3 text-white font-bold uppercase hover:bg-sky-600 cursor-pointer rounded transition-colors"
            />

        </form>
    </div>
  )
}
