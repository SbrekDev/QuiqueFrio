import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useClientStore } from '../../store';
import { useEffect, useState } from 'react';


export default function MobileResumen() {

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
    <div className="flex justify-center items-center mx-auto p-2 h-full w-full">
        <div className="container flex flex-col gap-2 w-full ">
          <div className='flex gap-2'>
            <div 
              className=" rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 transition-all flex flex-col justify-center text-center items-center py-8 px-5"
              >
                <h2 className="text-white font-black text-3xl">{pendientes}</h2>
                <p className="text-white font-bold text-xl">Trabajos Pendientes</p>
              </div>
            <div 
              className="rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 transition-all flex flex-col justify-center text-center items-center py-8 px-5"
              >
                <h2 className="text-white font-black text-3xl">{completados}</h2>
                <p className="text-white font-bold text-xl">Trabajos Completos</p>
              </div>
          </div>
          <div 
            className="rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 transition-all flex flex-col justify-center items-center py-8 px-5"
            >
              <h2 className="text-white font-black text-3xl">${gananciasTotales}</h2>
              <p className="text-green-700 text-xl font-bold">Ganancias</p>
            </div>
          <div 
            className="rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 transition-all flex flex-col justify-center items-center py-8 px-5"
            >
              <h2 className="text-white font-black text-3xl">${gastosTotales}</h2>
              <p className="text-red-600 text-xl font-bold">Gastos</p>
            </div>
          <div 
            className="rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 transition-all flex flex-col justify-center items-center py-8 px-5"
            >
              <h2 className="text-white font-black text-3xl">${ingresosTotales}</h2>
              <p className="text-amber-400 text-xl font-bold">Ingresos Totales</p>
            </div>
        </div>
        <button 
        className="absolute mx-auto right-0 left-0 bottom-5 bg-sky-500 p-3 text-white font-bold uppercase hover:bg-sky-600 cursor-pointer rounded-full shadow-lg transition-colors flex items-center justify-center gap-3 w-40"
        onClick={handleReset}
        ><RestartAltIcon/>Reinciar</button>
    </div>
  )
}
