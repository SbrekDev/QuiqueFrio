

export default function AdministrarIngresos() {
  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-10 space-y-10 w-[550px]">
        <h2 className="text-3xl font-bold text-center text-slate-700">Administre sus <span className="text-sky-500">Ganancias y Gastos</span></h2>
        <form className="flex flex-col">
            <div className="mb-5">
                <label htmlFor="ganancias" className="text-gray-700 uppercase font-bold">Ganancias</label>
                <input 
                type="num"
                id="ganancias"
                placeholder="Ingresar Ganancias"
                className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-sky-500 bg-slate-50"
                />
            </div>
            <div className="mb-5">
                <label htmlFor="gastos" className="text-gray-700 uppercase font-bold">Gastos</label>
                <input 
                type="num"
                id="gastos"
                placeholder="Ingresar Gastos"
                className=" w-full p-2 mt-2 bg-transparent border-b-2 focus:outline-none focus:border-b-sky-500 bg-slate-50"
                />
            </div>
          <input type="submit" value='Actualizar Ingresos' className="bg-sky-500 w-full p-3 text-white font-bold uppercase hover:bg-sky-600 cursor-pointer rounded transition-colors mt-5" />
        </form>
      </div>

    </div>
  )
}
