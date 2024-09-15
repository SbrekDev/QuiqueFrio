import { Link } from "react-router-dom";
import PaidIcon from '@mui/icons-material/Paid';
import TocIcon from '@mui/icons-material/Toc';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import InsightsIcon from '@mui/icons-material/Insights';


export default function Sidebar() {
  return (
    <>
    <div className="p-5">
      <aside className="w-96 h-full bg-white shadow-lg rounded-lg flex flex-col justify-between p-5 ">
              <div>
                  <h2 className="text-4xl font-bold text-center mt-5 text-slate-600">QUIQUE FRÍO</h2>
                  <div className="p-5 mt-16 flex flex-col text-slate-700">
                      <Link 
                      className="hover:bg-sky-200 p-3 focus:bg-sky-500 focus:text-white rounded-lg text-xl focus:font-bold focus:py-6 transition-all flex items-center gap-3" 
                      to='/resumen'><InsightsIcon className="text-sky-500"/> Resumen Mensual</Link>
                      <Link 
                      className="hover:bg-sky-200 p-3 focus:bg-sky-500 focus:text-white rounded-lg text-xl focus:font-bold focus:py-6 transition-all flex items-center gap-3" 
                      to='/administrar-ingresos'><PaidIcon className="text-sky-500"/>Administrar Ingresos</Link>
                      <Link 
                      className="hover:bg-sky-200 p-3 focus:bg-sky-500 focus:text-white rounded-lg text-xl focus:font-bold focus:py-6 transition-all flex items-center gap-3" 
                      to='/clientes'><TocIcon className="text-sky-500"/>Lista de Clientes</Link>
                      <Link 
                      className="hover:bg-sky-200 p-3 focus:bg-sky-500 focus:text-white rounded-lg text-xl focus:font-bold focus:py-6 transition-all flex items-center gap-3" 
                      to='/nuevo-cliente'><AddCircleIcon className="text-sky-500"/>Agregar Cliente</Link>
                      <Link 
                      className="hover:bg-sky-200 p-3 focus:bg-sky-500 focus:text-white rounded-lg text-xl focus:font-bold focus:py-6 transition-all flex items-center gap-3" 
                      to='/reestablecer'><SettingsBackupRestoreIcon className="text-sky-500"/>Reestablecer Base de Datos</Link>
                  </div>
              </div>
              <button className="bg-sky-500 w-full p-3 text-white font-bold uppercase hover:bg-sky-600 cursor-pointer rounded transition-colors flex items-center justify-center gap-3"
              ><CloudDownloadIcon/>Copia de Seguridad</button>
      </aside>
    </div>

    </>
  )
}
