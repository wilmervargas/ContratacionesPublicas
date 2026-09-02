import { Routes, Route, UNSAFE_RSCDefaultRootErrorBoundary } from 'react-router-dom'

// Importa aquí tus componentes de Estados, Municipios, etc.
import Estados from './Estados'
import Municipios from './Municipios'
import Parroquias from './Parroquias'
import Iva from './Iva'
import Ucau from './Ucau'
import Ut from './Ut'
import Normativa from './Normativa'
import Niveles from './Niveles'
import Poderes from './Poderes'
import TipoOrganismos from './TipoOrganismos'
import Islr from './Islr'
import IslrRegional from './IslrRegional'
import IvaRetencion from './IvaRetencion'
import Ivss from './Ivss'
import Rupdae from './Rupdae'
import Inces from './Inces'
import Banavih from './Banavih'
import Objetos from './Objetos'
import Modalidades from './Modalidades'
import ObjetosModalidades from './ObjetosModalidades'
import FianzaAnticipo from './FianzaAnticipo'
import FianzaAnticipoEspecial from './FianzaAnticipoEspecial'
import FianzaFielCumplimiento from './FianzaFielCumplimiento'
import FianzaMattoOferta from './FianzaMattoOferta'
import FianzaLaboral from './FianzaLaboral'
import RetencionFielCumplimiento from './RetencionFielCumplimiento'
import RetencionLaboral from './RetencionLaboral'

const Preambulos = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Módulo de Preámbulos</h1>
      
      <Routes>
        <Route path="estados" element={<Estados />} />
        <Route path="municipios" element={<Municipios />} />
        <Route path="parroquias" element={<Parroquias />} />
        <Route path="ucau" element={<Ucau />} />
        <Route path="ut" element={<Ut />} />
        <Route path="normativa" element={<Normativa />} />
        <Route path="niveles" element={<Niveles />} />
        <Route path="poderes" element={<Poderes />} />
        <Route path="tipoorganismos" element={<TipoOrganismos />} />
        <Route path="islr" element={<Islr />} />
        <Route path="islrregional" element={<IslrRegional />} />
        <Route path="iva" element={<Iva />} />
        <Route path="ivaretencion" element={<IvaRetencion />} />
        <Route path="ivss" element={<Ivss />} />
        <Route path="rupdae" element={<Rupdae />} />
        <Route path="inces" element={<Inces />} />
        <Route path="banavih" element={<Banavih />} />
        <Route path="objetos" element={<Objetos />} />
        <Route path="modalidades" element={<Modalidades />} />
        <Route path="objetosmodalidades" element={<ObjetosModalidades />} />
        <Route path="fianzaanticipo" element={<FianzaAnticipo />} />
        <Route path="fianzaanticipoespecial" element={<FianzaAnticipoEspecial />} />
        <Route path="fianzafielcumplimiento" element={<FianzaFielCumplimiento />} />
        <Route path="fianzamttooferta" element={<FianzaMattoOferta />} />
        <Route path="fianzalaboral" element={<FianzaLaboral />} />
        <Route path="retencionfielcumplimeinto" element={<RetencionFielCumplimiento />} />
        <Route path="retencionlaboral" element={<RetencionLaboral />} />

        {/* Agrega aquí las demás subrutas */}
      </Routes>
    </div>
  )
}

export default Preambulos