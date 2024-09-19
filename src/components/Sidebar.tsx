import { Link } from "react-router-dom";
import PaidIcon from '@mui/icons-material/Paid';
import TocIcon from '@mui/icons-material/Toc';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import InsightsIcon from '@mui/icons-material/Insights';
import { descargarDatos } from "../utils";
import { obtenerDatosDesdeDB } from "../database/db";



export default function Sidebar() {


  const handleDownload = async () => {
    try {
        const datos = await obtenerDatosDesdeDB();
        descargarDatos(datos);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
};

  return (
    <>
    <div className="p-5">
      <aside className="w-96 h-full bg-white shadow-lg rounded-lg flex flex-col justify-between p-5 ">
              <div>
                  <Link to='/' className="hover:cursor-pointer"><img src="/logo.svg" alt="logo quique frío" className="p-8"/></Link>
                  <div className="p-5 mt-5 flex flex-col text-slate-700">
                      <Link 
                      className="hover:bg-sky-200 p-3 focus:bg-sky-500 focus:text-white rounded-lg text-xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group" 
                      to='/resumen'><InsightsIcon className="text-sky-500 group-focus:text-white"/>Resumen</Link>
                      <Link 
                      className="hover:bg-sky-200 p-3 focus:bg-sky-500 focus:text-white rounded-lg text-xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group" 
                      to='/administrar-ingresos'><PaidIcon className="text-sky-500 group-focus:text-white"/>Administrar Ingresos</Link>
                      <Link 
                      className="hover:bg-sky-200 p-3 focus:bg-sky-500 focus:text-white rounded-lg text-xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group" 
                      to='/clientes'><TocIcon className="text-sky-500 group-focus:text-white"/>Lista de Clientes</Link>
                      <Link 
                      className="hover:bg-sky-200 p-3 focus:bg-sky-500 focus:text-white rounded-lg text-xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group" 
                      to='/nuevo-cliente'><AddCircleIcon className="text-sky-500 group-focus:text-white"/>Agregar Cliente</Link>
                      <Link 
                      className="hover:bg-sky-200 p-3 focus:bg-sky-500 focus:text-white rounded-lg text-xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group" 
                      to='/reestablecer'><SettingsBackupRestoreIcon className="text-sky-500 group-focus:text-white"/>Reestablecer Base de Datos</Link>
                  </div>
              </div>
              <button className="bg-sky-500 w-full p-3 text-white font-bold uppercase hover:bg-sky-600 cursor-pointer rounded transition-colors flex items-center justify-center gap-3 group group"
              onClick={handleDownload}
              ><CloudDownloadIcon/>Copia de Seguridad</button>
      </aside>
    </div>

    </>
  )
}
