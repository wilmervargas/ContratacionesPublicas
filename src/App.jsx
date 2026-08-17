import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Configuracion from './pages/Configuracion'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Inicio from './pages/Inicio'
import Paso1 from './pages/Paso1'
import Paso2 from './pages/Paso2'
import Preambulos from './pages/Preambulos'

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      {/* El Navbar está FUERA de las rutas, por lo que SIEMPRE se ve */}
      <Header />

      {/* El área dinámica: Solo se renderiza un componente a la vez según la URL */}
      <div className="min-h-screen bg-gray-950 text-white">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Configuracion" element={<Configuracion />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/paso1" element={<Paso1 />} />
          <Route path="/paso2" element={<Paso2 />} />
          <Route path="/preambulos" element={<Preambulos   />} />
        </Routes>
      </div>

      {/* El Footer también está FUERA de las rutas, SIEMPRE se ve */}
      <Footer />

    </BrowserRouter>
  )
}

export default App