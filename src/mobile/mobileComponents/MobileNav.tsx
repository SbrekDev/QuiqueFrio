import { Link, useLocation } from "react-router-dom";
import PaidIcon from '@mui/icons-material/Paid';
import TocIcon from '@mui/icons-material/Toc';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import InsightsIcon from '@mui/icons-material/Insights';
import { descargarDatos } from "../../utils";
import { obtenerDatosDesdeDB } from "../../database/db";
import HomeIcon from '@mui/icons-material/Home';
import { useEffect, useRef, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function MobileNav() {

  const handleDownload = async () => {
    try {
        const datos = await obtenerDatosDesdeDB();
        descargarDatos(datos);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
  };

  const [clicked, setClicked] = useState<boolean>(false)

  useEffect(() => {
    console.log("MobileNav se ha montado o actualizado");
}, []);

  function handleClick() {
      setClicked(prevClicked => !prevClicked);
  }

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
    <div 
      className={`w-full p-2 shadow-lg bg-slate-100  fixed right-0 left-0 top-0 z-30 flex ${clicked ? 'h-screen flex flex-col justify-start p-2' : 'h-20 justify-center'}`}
    >
      <div className="flex w-full justify-between pl-5 pr-5 items-center">
        <Link to='/mobile'><img src="/logo.svg" alt="logo quique" className="h-16" /></Link>    
          <MenuIcon 
            onClick={handleClick}
            style={{ fontSize: '42px' }}
          />     
      </div>

      {clicked ? (
        <div className="p-2 relative h-full z-30">
          <div>
              <div className="p-2 mt-10 flex flex-col text-slate-700 space-y-1">
                  <Link 
                  onClick={handleClick}
                  ref={(el) => linksRef.current[0] = el}
                  className="hover:bg-sky-200 p-3 focus:bg-sky-500 focus:text-white rounded-lg text-2xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group focus:outline-none outline-none" 
                  to='/mobile'><HomeIcon style={{ fontSize: '32px' }} className="text-sky-500 group-focus:text-white"/>Home</Link>
                  <Link 
                  onClick={handleClick}
                  ref={(el) => linksRef.current[1] = el}
                  className="hover:bg-sky-200 p-3 focus:bg-sky-500 focus:text-white rounded-lg text-2xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group" 
                  to='/mobile/resumen'><InsightsIcon style={{ fontSize: '32px' }} className="text-sky-500 group-focus:text-white"/>Resumen</Link>
                  <Link 
                  onClick={handleClick}
                  ref={(el) => linksRef.current[2] = el}
                  className="hover:bg-sky-200 p-3 focus:bg-sky-500 focus:text-white rounded-lg text-2xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group" 
                  to='/mobile/administrar-ingresos'><PaidIcon style={{ fontSize: '32px' }} className="text-sky-500 group-focus:text-white"/>Administrar Ingresos</Link>
                  <Link 
                  onClick={handleClick}
                  ref={(el) => linksRef.current[3] = el}
                  className="hover:bg-sky-200 p-3 focus:bg-sky-500 focus:text-white rounded-lg text-2xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group" 
                  to='/mobile/clientes'><TocIcon style={{ fontSize: '42px' }} className="text-sky-500 group-focus:text-white"/>Lista de Clientes</Link>
                  <Link 
                  onClick={handleClick}
                  ref={(el) => linksRef.current[4] = el}
                  className="hover:bg-sky-200 p-3 focus:bg-sky-500 focus:text-white rounded-lg text-2xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group" 
                  to='/mobile/nuevo-cliente'><AddCircleIcon style={{ fontSize: '32px' }} className="text-sky-500 group-focus:text-white"/>Agregar Cliente</Link>
                  <Link 
                  onClick={handleClick}
                  ref={(el) => linksRef.current[5] = el}
                  className="hover:bg-sky-200 p-3 focus:bg-sky-500 focus:text-white rounded-lg text-2xl focus:font-bold focus:py-6 transition-all flex items-center gap-3 group" 
                  to='/mobile/reestablecer'><SettingsBackupRestoreIcon style={{ fontSize: '32px' }} className="text-sky-500 group-focus:text-white"/>Reestablecer Base de Datos</Link>
              </div>
          </div>
          <button className="absolute bottom-5 right-0 left-0 mx-auto bg-sky-500 w-[calc(100%-3rem)] p-3 text-white font-bold uppercase hover:bg-sky-600 cursor-pointer rounded transition-colors flex items-center justify-center gap-3 group"
          onClick={handleDownload}
          ><CloudDownloadIcon/>Copia de Seguridad</button> 
      </div> 

      ) : null}
             

    </div>

    </>
  );
}
