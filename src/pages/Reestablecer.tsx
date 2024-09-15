

export default function Reestablecer() {
  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-10 space-y-10 w-[550px]">
        <h2 className="text-3xl font-bold text-center text-slate-700">Seleccione el archivo de la última <span className="text-sky-500">Copia de Seguridad</span></h2>
        <form className="flex flex-col">
          <input type="file" accept=".json" />
          <input type="submit" value='Reestablecer' className="bg-sky-500 w-full p-3 text-white font-bold uppercase hover:bg-sky-600 cursor-pointer rounded transition-colors mt-5" />
        </form>
      </div>

    </div>
  )
}
