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


function App() {


  return (
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
}

export default App
