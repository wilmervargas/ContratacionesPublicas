import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Preambulos from './pages/Preambulos'
import Configuracion from './pages/Configuracion'
import Contrataciones from './pages/Contrataciones'
import Estadisticas from './pages/Estadisticas'
import Nosotros from './pages/Nosotros'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      {/* El Navbar está FUERA de las rutas, por lo que SIEMPRE se ve */}
      <Header />

      {/* El área dinámica: Solo se renderiza un componente a la vez según la URL */}
      <div className="min-h-screen bg-gray-950 text-white">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/preambulos" element={<Preambulos   />} />
          <Route path="/Configuracion" element={<Configuracion />} />
          <Route path="/contrataciones" element={<Contrataciones />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>

      {/* El Footer también está FUERA de las rutas, SIEMPRE se ve */}
      <Footer />

    </BrowserRouter>
  )
}

export default App