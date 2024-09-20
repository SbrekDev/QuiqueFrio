import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useClientStore } from '../store';
import { useEffect, useState } from 'react';


export default function Resumen() {

  const {clientes} = useClientStore()

  let pendientes: number = 0
  let completados: number = 0
  clientes.forEach(cliente => {
    if(cliente.estado === 'Pendiente'){
        pendientes ++
    } else if(cliente.estado === 'Completado'){
        completados ++
    }
  })

  const [gastosTotales, setGastosTotales] = useState<number>(() => {
    const savedGastos = localStorage.getItem('gastosTotales');
    return savedGastos ? parseFloat(savedGastos) : 0;
  });

  const [ingresosTotales, setIngresosTotales] = useState<number>(() => {
    const savedIngresos = localStorage.getItem('ingresosTotales');
    return savedIngresos ? parseFloat(savedIngresos) : 0;
  });

  const [gananciasTotales, setGananciasTotales] = useState<number>(() => {
    const savedGanancias = localStorage.getItem('gananciasTotales');
    return savedGanancias ? parseFloat(savedGanancias) : 0;
  });

  useEffect(() => {
    setGastosTotales(parseFloat(localStorage.getItem('gastosTotales') || '0'));
    setIngresosTotales(parseFloat(localStorage.getItem('ingresosTotales') || '0'));
    setGananciasTotales(parseFloat(localStorage.getItem('gananciasTotales') || '0'));
  }, []);

  function handleReset() {
    localStorage.setItem('gastosTotales', "0");
    localStorage.setItem('ingresosTotales', "0");
    localStorage.setItem('gananciasTotales', "0");
    setGastosTotales(0);
    setIngresosTotales(0);
    setGananciasTotales(0);
  }

 
  return (
    <div className="flex justify-center items-center mx-auto">
        <div className="container grid grid-cols-6 grid-rows-8 gap-5 w-[600px] xl:w-[800px] 2xl:w-[900px] h-[670px]">
          <div 
            className="col-span-3 row-span-3 rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 transition-all flex flex-col justify-center items-center p-5"
            >
              <h2 className="text-white font-black text-7xl xl:text-9xl">{pendientes}</h2>
              <p className="text-white">Trabajos Pendientes</p>
            </div>
          <div 
            className="col-span-3 row-span-3 rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 transition-all flex flex-col justify-center items-center p-5"
            >
              <h2 className="text-white font-black text-7xl xl:text-9xl">{completados}</h2>
              <p className="text-white">Trabajos Completos</p>
            </div>
          <div 
            className="col-span-3 xl:col-span-4 row-span-3 rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 transition-all flex flex-col justify-center items-center p-5"
            >
              <h2 className="text-white font-black text-3xl xl:text-6xl">${gananciasTotales}</h2>
              <p className="text-green-700 text-2xl font-bold">Ganancias</p>
            </div>
          <div 
            className="col-span-3 xl:col-span-2 row-span-3 rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 transition-all flex flex-col justify-center items-center p-5"
            >
              <h2 className="text-white font-black text-3xl xl:text-4xl">${gastosTotales}</h2>
              <p className="text-red-600 text-2xl font-bold">Gastos</p>
            </div>
          <div 
            className="col-span-6 row-span-2 rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 transition-all flex justify-center items-center p-5 gap-24"
            >
              <p className="text-amber-400 text-2xl font-bold">Ingresos Totales</p>
              <h2 className="text-white font-black text-4xl xl:text-6xl">${ingresosTotales}</h2>
            </div>
        </div>
        <button 
        className="absolute right-10 bottom-10 bg-sky-500 p-4 text-white font-bold uppercase hover:bg-sky-600 cursor-pointer rounded-full shadow-lg transition-colors flex items-center justify-center gap-3"
        onClick={handleReset}
        ><RestartAltIcon/>Reinciar</button>
    </div>
  )
}
