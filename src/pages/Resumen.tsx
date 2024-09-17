import RestartAltIcon from '@mui/icons-material/RestartAlt';



export default function Resumen() {

 
  return (
    <div className="flex justify-center items-center mx-auto">
        <div className="container grid grid-cols-6 grid-rows-6 gap-5 w-[900px] h-[600px]">
          <div 
            className="col-span-3 row-span-3 rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 transition-all flex flex-col justify-center items-center p-5"
            >
              <h2 className="text-white font-black text-9xl">2</h2>
              <p className="text-white">Trabajos Pendientes</p>
            </div>
          <div 
            className="col-span-3 row-span-3 rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 transition-all flex flex-col justify-center items-center p-5"
            >
              <h2 className="text-white font-black text-9xl">1</h2>
              <p className="text-white">Trabajos Completos</p>
            </div>
          <div 
            className="col-span-4 row-span-3 rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 transition-all flex flex-col justify-center items-center p-5"
            >
              <h2 className="text-white font-black text-6xl">$ 120.000</h2>
              <p className="text-white">Ganancias</p>
            </div>
          <div 
            className="col-span-2 row-span-3 rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 transition-all flex flex-col justify-center items-center p-5"
            >
              <h2 className="text-white font-black text-4xl">$50.000</h2>
              <p className="text-white">Gastos</p>
            </div>
        </div>
        <button 
        className="absolute right-12 bottom-12 bg-sky-500 p-4 text-white font-bold uppercase hover:bg-sky-600 cursor-pointer rounded-full shadow-lg transition-colors flex items-center justify-center gap-3"
        ><RestartAltIcon/>Reinciar</button>
    </div>
  )
}
