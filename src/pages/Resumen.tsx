import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { gastosTotales, ingresosTotales } from './AdmininstrarIngresos';


export default function Resumen() {

 
  return (
    <div className="flex justify-center items-center mx-auto">
        <div className="container grid grid-cols-6 grid-rows-8 gap-5 w-[900px] h-[700px]">
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
              <h2 className="text-white font-black text-6xl">${ingresosTotales - gastosTotales}</h2>
              <p className="text-green-700 text-2xl font-bold">Ganancias</p>
            </div>
          <div 
            className="col-span-2 row-span-3 rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 transition-all flex flex-col justify-center items-center p-5"
            >
              <h2 className="text-white font-black text-4xl">${gastosTotales}</h2>
              <p className="text-red-600 text-2xl font-bold">Gastos</p>
            </div>
          <div 
            className="col-span-6 row-span-2 rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 transition-all flex justify-center items-center p-5 gap-24"
            >
              <p className="text-amber-400 text-2xl font-bold">Ingresos Totales</p>
              <h2 className="text-white font-black text-6xl">${ingresosTotales}</h2>
            </div>
        </div>
        <button 
        className="absolute right-12 bottom-12 bg-sky-500 p-4 text-white font-bold uppercase hover:bg-sky-600 cursor-pointer rounded-full shadow-lg transition-colors flex items-center justify-center gap-3"
        ><RestartAltIcon/>Reinciar</button>
    </div>
  )
}
