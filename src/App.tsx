import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import ListadoClientes from "./pages/ListadoClientes"
import NuevoCliente from "./pages/NuevoCliente"
import Resumen from "./pages/Resumen"
import Reestablecer from "./pages/Reestablecer"
import AdministrarIngresos from "./pages/AdmininstrarIngresos"


function App() {


  return (
    <div className="flex w-full h-screen bg-cover bg-center" /* style={{ backgroundImage: 'url("./bg.jpg")'}} */>
      <Sidebar/>
      <Routes>
        <Route path="/resumen" element={ <Resumen/> } />
        <Route path="/administrar-ingresos" element={ <AdministrarIngresos/> } />
        <Route path="/clientes" element={ <ListadoClientes/> } />
        <Route path="/nuevo-cliente" element={ <NuevoCliente/> } />
        <Route path="/reestablecer" element={ <Reestablecer/> } />
      </Routes>
    </div>
  )
}

export default App
