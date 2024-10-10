import { Link, useLocation } from "react-router-dom";
import PaidIcon from '@mui/icons-material/Paid';
import TocIcon from '@mui/icons-material/Toc';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import InsightsIcon from '@mui/icons-material/Insights';
import { descargarDatos } from "../utils";
import { obtenerDatosDesdeDB } from "../database/db";
import HomeIcon from '@mui/icons-material/Home';
import { useEffect, useRef } from "react";

export default function Sidebar() {

  const handleDownload = async () => {
    try {
        const datos = await obtenerDatosDesdeDB();
        descargarDatos(datos);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
  };

  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]); 
  const location = useLocation();

  useEffect(() => {
    linksRef.current.forEach((link) => {
      if (link && link.getAttribute('href') === location.pathname) {
        link.focus();
      }
    });
  }, [location]);

  return (
    <>
    <div className="p-5">
      <aside className="w-80 2xl:w-96 h-full bg-white shadow-xl rounded-lg flex flex-col justify-between p-5">
              <div>
                  <Link to='/' className="hover:cursor-pointer"><img src="/logo-original-2.png" alt="logo quique frío" className="p-8"/></Link>
                  <div className="py-5 px-1 2xl:px-5 mt-5 flex flex-col text-slate-700">
                      <Link 
                      ref={(el) => linksRef.current[0] = el}
                      className="hover:bg-light p-3 focus:bg-primary focus:text-white rounded-lg text-xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group focus:outline-none outline-none" 
                      to='/'><HomeIcon className="text-primary group-focus:text-white"/>Home</Link>
                      <Link 
                      ref={(el) => linksRef.current[1] = el}
                      className="hover:bg-light p-3 focus:bg-primary focus:text-white rounded-lg text-xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group" 
                      to='/resumen'><InsightsIcon className="text-primary group-focus:text-white"/>Resumen</Link>
                      <Link 
                      ref={(el) => linksRef.current[2] = el}
                      className="hover:bg-light p-3 focus:bg-primary focus:text-white rounded-lg text-xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group" 
                      to='/administrar-ingresos'><PaidIcon className="text-primary group-focus:text-white"/>Administrar Ingresos</Link>
                      <Link 
                      ref={(el) => linksRef.current[3] = el}
                      className="hover:bg-light p-3 focus:bg-primary focus:text-white rounded-lg text-xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group" 
                      to='/clientes'><TocIcon className="text-primary group-focus:text-white"/>Lista de Clientes</Link>
                      <Link 
                      ref={(el) => linksRef.current[4] = el}
                      className="hover:bg-light p-3 focus:bg-primary focus:text-white rounded-lg text-xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group" 
                      to='/nuevo-cliente'><AddCircleIcon className="text-primary group-focus:text-white"/>Agregar Cliente</Link>
                      <Link 
                      ref={(el) => linksRef.current[5] = el}
                      className="hover:bg-light p-3 focus:bg-primary focus:text-white rounded-lg text-xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group" 
                      to='/reestablecer'><SettingsBackupRestoreIcon className="text-primary group-focus:text-white"/>Reestablecer Base de Datos</Link>
                  </div>
              </div>
              <button className="bg-primary w-full p-3 text-white font-bold uppercase hover:bg-hover cursor-pointer rounded transition-colors flex items-center justify-center gap-3 group"
              onClick={handleDownload}
              ><CloudDownloadIcon/>Copia de Seguridad</button>
      </aside>
    </div>

    </>
  );
}
