import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null) // 'preambulos' | 'configuracion' | 'contrataciones' | null
  const [openSubmenu, setOpenSubmenu] = useState(null)   // 'ubicacion' | 'unidades' | null
  const [activeLink, setActiveLink] = useState('inicio')
  const navRef = useRef(null)

  // Cierra los menús al hacer clic fuera del componente
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null)
        setOpenSubmenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Cierra todos los desplegables al hacer clic en un enlace final
  const handleNavClick = (linkId) => {
    if (linkId) setActiveLink(linkId)
    setOpenDropdown(null)
    setOpenSubmenu(null)
    setMobileOpen(false)
  }

  const toggleDropdown = (name) => {
    setOpenDropdown(prev => (prev === name ? null : name))
    setOpenSubmenu(null)
  }

  const toggleSubmenu = (name) => {
    setOpenSubmenu(prev => (prev === name ? null : name))
  }

  return (
    <nav ref={navRef} className="relative bg-gray-900 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" onClick={() => handleNavClick('inicio')} className="flex items-center gap-3 shrink-0">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Contrataciones Públicas" className="h-16 w-auto" />
          </Link>

          {/* Menú Escritorio */}
          <div className="hidden lg:flex items-center gap-1">
            <Link 
              to="/" 
              onClick={() => handleNavClick('inicio')} 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 'inicio' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
            >
              Inicio
            </Link>

            {/* DESKTOP: Preámbulos */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('preambulos')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 ${activeLink === 'preambulos' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
              >
                Preámbulos
                <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'preambulos' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === 'preambulos' && (
                <div className="absolute top-full left-0 mt-1 w-64 rounded-lg border border-gray-700 bg-gray-900 shadow-xl py-1 z-50">
                  
                  {/* Submenú Ubicación */}
                  <div 
                    className="relative group"
                    onMouseEnter={() => setOpenSubmenu('ubicacion')}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <button 
                      onClick={() => toggleSubmenu('ubicacion')}
                      className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors text-left"
                    >
                      <span>Ubicación Geográfica</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {openSubmenu === 'ubicacion' && (
                      <div className="absolute left-full top-0 ml-1 w-48 rounded-lg border border-gray-700 bg-gray-900 shadow-xl py-1 z-50">
                        <Link to="/preambulos/estados" onClick={() => handleNavClick('preambulos')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Estados</Link>
                        <Link to="/preambulos/municipios" onClick={() => handleNavClick('preambulos')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Municipios</Link>
                        <Link to="/preambulos/parroquias" onClick={() => handleNavClick('preambulos')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Parroquias</Link>
                      </div>
                    )}
                  </div>

                  {/* Submenú Unidades de Cálculo */}
                  <div 
                    className="relative group"
                    onMouseEnter={() => setOpenSubmenu('unidades')}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <button 
                      onClick={() => toggleSubmenu('unidades')}
                      className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors text-left"
                    >
                      <span>Unidades de Cálculo</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {openSubmenu === 'unidades' && (
                      <div className="absolute left-full top-0 ml-1 w-56 rounded-lg border border-gray-700 bg-gray-900 shadow-xl py-1 z-50">
                        <Link to="/preambulos/iva" onClick={() => handleNavClick('preambulos')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Impuesto al Valor Agregado (IVA) </Link>
                        <Link to="/preambulos/ucau" onClick={() => handleNavClick('preambulos')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Unidad para el Cálculo Aritmético del Umbral Máximo y Mínimo (UCAU) </Link>
                        <Link to="#" onClick={() => handleNavClick('preambulos')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Otros</Link>
                      </div>
                    )}
                  </div>

                  {/* Submenú Tipos de Organismos */}
                  <div 
                    className="relative group"
                    onMouseEnter={() => setOpenSubmenu('tipos_organismos')}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <button 
                      onClick={() => toggleSubmenu('tipos_organismos')}
                      className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors text-left"
                    >
                      <span>Tipos de Organismos</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {openSubmenu === 'tipos_organismos' && (
                      <div className="absolute left-full top-0 ml-1 w-56 rounded-lg border border-gray-700 bg-gray-900 shadow-xl py-1 z-50">
                        <Link to="/preambulos/niveles" onClick={() => handleNavClick('preambulos')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Niveles </Link>
                        <Link to="/preambulos/poderes" onClick={() => handleNavClick('preambulos')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Poderes </Link>
                        <Link to="/preambulos/tipo_organismos" onClick={() => handleNavClick('preambulos')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Tipo Organismos</Link>
                      </div>
                    )}
                  </div>
                  <Link to="/preambulos/modalidades" onClick={() => handleNavClick('preambulos')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Modalidades / Lapsos</Link>
                  <Link to="/preambulos/normativa" onClick={() => handleNavClick('preambulos')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Normativa Legal</Link>
                </div>
              )}
            </div>

            {/* DESKTOP: Configuración */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('configuracion')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 ${activeLink === 'configuracion' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
              >
                Configuración
                <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'configuracion' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'configuracion' && (
                <div className="absolute top-full left-0 mt-1 w-60 rounded-lg border border-gray-700 bg-gray-900 shadow-xl py-1 z-50">
                  <Link to="/configuracion/organismo" onClick={() => handleNavClick('configuracion')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Registro del Organismo cliente</Link>
                  <Link to="/configuracion/unidades" onClick={() => handleNavClick('configuracion')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Unidades usuarias / contratantes</Link>
                  <Link to="/configuracion/cargos" onClick={() => handleNavClick('configuracion')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Cargos de Cada Área</Link>
                  <Link to="/configuracion/comision" onClick={() => handleNavClick('configuracion')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Comisión de Contrataciones</Link>
                  <Link to="/configuracion/contratistas" onClick={() => handleNavClick('configuracion')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Histórico de contratistas</Link>
                </div>
              )}
            </div>

            {/* DESKTOP: Contrataciones */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('contrataciones')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 ${activeLink === 'contrataciones' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
              >
                Contrataciones
                <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'contrataciones' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'contrataciones' && (
                <div className="absolute top-full left-0 mt-1 w-64 rounded-lg border border-gray-700 bg-gray-900 shadow-xl py-1 z-50">
                  <Link to="/contrataciones/previas" onClick={() => handleNavClick('contrataciones')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Actividades Previas</Link>
                  <Link to="/contrataciones/apertura" onClick={() => handleNavClick('contrataciones')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Apertura de Procedimiento</Link>
                  <Link to="/contrataciones/ofertas" onClick={() => handleNavClick('contrataciones')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Recepción y Revisión de Ofertas</Link>
                  <Link to="/contrataciones/recomendaciones" onClick={() => handleNavClick('contrataciones')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Informe de Recomendaciones</Link>
                  <Link to="/contrataciones/garantias" onClick={() => handleNavClick('contrataciones')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Recepción y Revisión de Garantías</Link>
                  <Link to="/contrataciones/suscripcion" onClick={() => handleNavClick('contrataciones')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Suscripción del Contrato</Link>
                  <Link to="/contrataciones/inicio" onClick={() => handleNavClick('contrataciones')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Inicio del Contrato</Link>
                  <Link to="/contrataciones/control" onClick={() => handleNavClick('contrataciones')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Control del Contrato</Link>
                  <Link to="/contrataciones/fin" onClick={() => handleNavClick('contrataciones')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Fin del Contrato</Link>
                  <Link to="/contrataciones/snc" onClick={() => handleNavClick('contrataciones')} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Informe al SNC</Link>
                </div>
              )}
            </div>

            <Link to="/estadisticas" onClick={() => handleNavClick('estadisticas')} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 'estadisticas' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Estadísticas</Link>
            <Link to="/nosotros" onClick={() => handleNavClick('nosotros')} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 'nosotros' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Nosotros</Link>
            <Link to="/blog" onClick={() => handleNavClick('blog')} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 'blog' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Blog</Link>
            <Link to="/contacto" onClick={() => handleNavClick('contacto')} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 'contacto' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Contacto</Link>
          </div>

          {/* Buscador, Botón Acción y Toggle Móvil */}
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Buscar..." className="w-48 bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-3 py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            </div>

            <div className="hidden lg:block">
              <button className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors">
                Empezar
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Abrir menú"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full border-t border-gray-800 bg-gray-900 shadow-xl z-50">
          <div className="px-4 py-3 space-y-1">
            <Link to="/" onClick={() => handleNavClick('inicio')} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 'inicio' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Inicio</Link>

            {/* MÓVIL: Preámbulos */}
            <button
              onClick={() => toggleDropdown('preambulos')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 'preambulos' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
            >
              <span>Preámbulos</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'preambulos' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openDropdown === 'preambulos' && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-700 pl-3">
                {/* Accordion Ubicación */}
                <button
                  onClick={() => toggleSubmenu('ubicacion')}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors text-left"
                >
                  <span>Ubicación Geográfica</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${openSubmenu === 'ubicacion' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSubmenu === 'ubicacion' && (
                  <div className="ml-3 border-l border-gray-600 pl-3 space-y-1">
                    <Link to="/preambulos/estados" onClick={() => handleNavClick('preambulos')} className="block px-3 py-1.5 text-xs text-gray-300 hover:text-white transition-colors">Estados</Link>
                    <Link to="/preambulos/municipios" onClick={() => handleNavClick('preambulos')} className="block px-3 py-1.5 text-xs text-gray-300 hover:text-white transition-colors">Municipios</Link>
                    <Link to="/preambulos/parroquias" onClick={() => handleNavClick('preambulos')} className="block px-3 py-1.5 text-xs text-gray-300 hover:text-white transition-colors">Parroquias</Link>
                  </div>
                )}

                {/* Accordion Unidades */}
                <button
                  onClick={() => toggleSubmenu('unidades')}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors text-left"
                >
                  <span>Unidades de Cálculo</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${openSubmenu === 'unidades' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSubmenu === 'unidades' && (
                  <div className="ml-3 border-l border-gray-600 pl-3 space-y-1">
                    <Link to="/preambulos/iva" onClick={() => handleNavClick('preambulos')} className="block px-3 py-1.5 text-xs text-gray-300 hover:text-white transition-colors">Impuesto al Valor Agregado (IVA) </Link>
                    <Link to="/preambulos/ucau" onClick={() => handleNavClick('preambulos')} className="block px-3 py-1.5 text-xs text-gray-300 hover:text-white transition-colors">Unidad para el Cálculo Aritmético del Umbral Máximo y Mínimo (UCAU) </Link>
                    <Link to="/preambulos/otros" onClick={() => handleNavClick('preambulos')} className="block px-3 py-1.5 text-xs text-gray-300 hover:text-white transition-colors">Otros</Link>
                  </div>
                )}

                <Link to="/preambulos/modalidades" onClick={() => handleNavClick('preambulos')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Tipos de Organismos </Link>
                <Link to="/preambulos/modalidades" onClick={() => handleNavClick('preambulos')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Modalidades / Lapsos</Link>
                <Link to="/preambulos/normativa" onClick={() => handleNavClick('preambulos')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Normativa Legal</Link>
              </div>
            )}

            {/* MÓVIL: Configuración */}
            <button
              onClick={() => toggleDropdown('configuracion')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 'configuracion' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
            >
              <span>Configuración</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'configuracion' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'configuracion' && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-700 pl-3">
                <Link to="/configuracion/organismo" onClick={() => handleNavClick('configuracion')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Registro del Organismo cliente</Link>
                <Link to="/configuracion/unidades" onClick={() => handleNavClick('configuracion')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Unidades usuarias / contratantes</Link>
                <Link to="/configuracion/cargos" onClick={() => handleNavClick('configuracion')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Cargos de Cada Área</Link>
                <Link to="/configuracion/comision" onClick={() => handleNavClick('configuracion')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Comisión de Contrataciones</Link>
                <Link to="/configuracion/contratistas" onClick={() => handleNavClick('configuracion')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Histórico de contratistas</Link>
              </div>
            )}

            {/* MÓVIL: Contrataciones */}
            <button
              onClick={() => toggleDropdown('contrataciones')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 'contrataciones' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
            >
              <span>Contrataciones</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'contrataciones' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'contrataciones' && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-700 pl-3">
                <Link to="/contrataciones/previas" onClick={() => handleNavClick('contrataciones')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Actividades Previas</Link>
                <Link to="/contrataciones/apertura" onClick={() => handleNavClick('contrataciones')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Apertura de Procedimiento</Link>
                <Link to="/contrataciones/ofertas" onClick={() => handleNavClick('contrataciones')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Recepción y Revisión de Ofertas</Link>
                <Link to="/contrataciones/recomendaciones" onClick={() => handleNavClick('contrataciones')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Informe de Recomendaciones</Link>
                <Link to="/contrataciones/garantias" onClick={() => handleNavClick('contrataciones')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Recepción y Revisión de Garantías</Link>
                <Link to="/contrataciones/suscripcion" onClick={() => handleNavClick('contrataciones')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Suscripción del Contrato</Link>
                <Link to="/contrataciones/inicio" onClick={() => handleNavClick('contrataciones')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Inicio del Contrato</Link>
                <Link to="/contrataciones/control" onClick={() => handleNavClick('contrataciones')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Control del Contrato</Link>
                <Link to="/contrataciones/fin" onClick={() => handleNavClick('contrataciones')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Fin del Contrato</Link>
                <Link to="/contrataciones/snc" onClick={() => handleNavClick('contrataciones')} className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors rounded-lg">Informe al SNC</Link>
              </div>
            )}

            <Link to="/estadisticas" onClick={() => handleNavClick('estadisticas')} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 'estadisticas' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Estadísticas</Link>
            <Link to="/nosotros" onClick={() => handleNavClick('nosotros')} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 'nosotros' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Nosotros</Link>
            <Link to="/blog" onClick={() => handleNavClick('blog')} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 'blog' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Blog</Link>
            <Link to="/contacto" onClick={() => handleNavClick('contacto')} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 'contacto' ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Contacto</Link>

            <div className="pt-2">
              <button className="w-full px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors">
                Empezar
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}