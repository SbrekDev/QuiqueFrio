import { Navigate, Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import ListadoClientes from "./pages/ListadoClientes"
import NuevoCliente from "./pages/NuevoCliente"
import Resumen from "./pages/Resumen"
import Reestablecer from "./pages/Reestablecer"
import AdministrarIngresos from "./pages/AdmininstrarIngresos"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import EditarCliente from "./pages/EditarCliente"
import Layout from "./Layout"
import { useEffect, useState } from "react"
import MobileReestablecer from "./mobile/mobilePages/MobileReestablecer"
import MobileNav from "./mobile/mobileComponents/MobileNav"
import MobileLayout from "./mobile/MobileLayout"
import MobileAdministrarIngresos from "./mobile/mobilePages/MobileAdmininstrarIngresos"
import MobileEditarCliente from "./mobile/mobilePages/MobileEditarCliente"
import MobileListadoClientes from "./mobile/mobilePages/MobileListadoClientes"
import MobileNuevoCliente from "./mobile/mobilePages/MobileNuevoCliente"
import MobileResumen from "./mobile/mobilePages/MobileResumen"


function App() {

  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
        });
      };

      window.addEventListener('resize', handleResize);

      // Cleanup function to remove the event listener
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  };

  const {width} = useWindowSize();

  const isDesktop = width >= 1024;

  return (
    <>
    {
      isDesktop ? 
      (
        <div className="flex w-full h-screen bg-cover bg-center">
          <Sidebar/>
          <Routes>
            <Route path="/" element={ <Layout/> } index/>
            <Route path="/resumen" element={ <Resumen/> } />
            <Route path="/administrar-ingresos" element={ <AdministrarIngresos/> } />
            <Route path="/clientes" element={ <ListadoClientes/> } />
            <Route path="/nuevo-cliente" element={ <NuevoCliente/> } />
            <Route path="/reestablecer" element={ <Reestablecer/> } />
            <Route path="/editar/:id" element={ <EditarCliente/> } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <ToastContainer pauseOnHover={false} autoClose={2000}></ToastContainer>
        </div>
      )
       : 
      (
        <div className="flex flex-col w-full h-screen bg-cover bg-center">
          <MobileNav/>
          <Routes>
            <Route path="/mobile" element={ <MobileLayout/> } index/>
            <Route path="/mobile/resumen" element={ <MobileResumen/> } />
            <Route path="/mobile/administrar-ingresos" element={ <MobileAdministrarIngresos/> } />
            <Route path="/mobile/clientes" element={ <MobileListadoClientes/> } />
            <Route path="/mobile/nuevo-cliente" element={ <MobileNuevoCliente/> } />
            <Route path="/mobile/reestablecer" element={ <MobileReestablecer/> } />
            <Route path="/mobile/editar/:id" element={ <MobileEditarCliente/> } />
            <Route path="*" element={<Navigate to="/mobile" replace />} />
          </Routes>
          <ToastContainer pauseOnHover={false} autoClose={2000}></ToastContainer>
        </div>
      )
    }
    </>
  )
  
}

export default App
