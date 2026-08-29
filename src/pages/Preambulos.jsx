import { Routes, Route, UNSAFE_RSCDefaultRootErrorBoundary } from 'react-router-dom'

// Importa aquí tus componentes de Estados, Municipios, etc.
import Estados from './Estados'
import Municipios from './Municipios'
import Parroquias from './Parroquias'
import Iva from './Iva'
import Ucau from './Ucau'
import Normativa from './Normativa'

const Preambulos = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Módulo de Preámbulos</h1>
      
      <Routes>
        <Route path="estados" element={<Estados />} />
        <Route path="municipios" element={<Municipios />} />
        <Route path="parroquias" element={<Parroquias />} />
        <Route path="iva" element={<Iva />} />
        <Route path="ucau" element={<Ucau />} />
        <Route path="normativa" element={<Normativa />} />

        {/* Agrega aquí las demás subrutas */}
      </Routes>
    </div>
  )
}

export default Preambulos