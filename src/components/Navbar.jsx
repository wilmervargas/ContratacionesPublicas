
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null)
    const [activeLink, setActiveLink] = useState(0)
    const navRef = useRef(null)

    // Cierra el menú desplegable si el usuario hace clic fuera del componente
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpenDropdown(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // Cierra los menús al seleccionar una opción de submenú
    const handleSubMenuClick = () => {
        setOpenDropdown(null)
        setMobileOpen(false)
    }

return (
        <nav ref={navRef} className="relative bg-gray-900 border-gray-800 border-b z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Cambia h-16 por h-20 o h-24 para darle espacio al logo */}
                <div className="flex items-center justify-between h-20"> 
                    <Link to="/" onClick={() => setActiveLink(0)} className="flex items-center gap-3 shrink-0">
                        {/* Sube la altura del logo (ej. h-16 = 64px) */}
                        <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Contrataciones Públicas" className="h-16 w-auto" />
                    </Link>

                    <div className="hidden lg:flex items-center gap-1">
                        <Link to="/" onClick={() => { setActiveLink(0); setOpenDropdown(null); }} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 ${activeLink === 0 ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Inicio</Link>

                        {/* DESKTOP: Preambulos */}
                        <div className="relative">
                            <button
                                onClick={() => setOpenDropdown(openDropdown === 1 ? null : 1)}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 ${activeLink === 1 ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
                            >
                                Preambulos
                                <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 1 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openDropdown === 1 && (
                                <div className="absolute top-full left-0 mt-1 w-48 rounded-lg border border-gray-700 bg-gray-900 shadow-xl py-1 z-50">
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Estados / Municipios / Parroquias</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">IVA / UCAU / Otras unidades de medidas</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Tipos de Organismos / Modalidades Seleccion / Objetos (compras, servicios u obras) / Lapsos</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Normativa Legal</a>
                                </div>
                            )}
                        </div>

                        {/* DESKTOP: Configuracion */}
                        <div className="relative">
                            <button
                                onClick={() => setOpenDropdown(openDropdown === 2 ? null : 2)}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 ${activeLink === 2 ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
                            >
                                Configuracion
                                <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 2 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openDropdown === 2 && (
                                <div className="absolute top-full left-0 mt-1 w-48 rounded-lg border border-gray-700 bg-gray-900 shadow-xl py-1 z-50">
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Registro del Organismo cliente</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Unidades usuarias / contratantes</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Cargos de Cada Area</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Comisión de Contrataciones</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Histórico de contratistas</a>
                                </div>
                            )}
                        </div>

                        {/* DESKTOP: Contataciones */}
                        <div className="relative">
                            <button
                                onClick={() => setOpenDropdown(openDropdown === 3 ? null : 3)}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 ${activeLink === 3 ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
                            >
                                Contrataciones
                                <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 3 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openDropdown === 3 && (
                                <div className="absolute top-full left-0 mt-1 w-48 rounded-lg border border-gray-700 bg-gray-900 shadow-xl py-1 z-50">
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Actividades Previas</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Apertua de Procedimiento</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Recepcion y Revision de Ofertas</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Informe de Recomendaciones</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Recepcion y Revision de garantias</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Suscripcion del Contrato</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Inicio del Contrato</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Control del Contrato</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Fin del Contrato</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Informe al SNC</a>
                                </div>
                            )}
                        </div>

                        <Link to="/estadisticas" onClick={() => { setActiveLink(4); setOpenDropdown(null); }} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 ${activeLink === 4 ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Estadisticas</Link>
                        <Link to="/nosotros" onClick={() => { setActiveLink(5); setOpenDropdown(null); }} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 ${activeLink === 5 ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Nosotros</Link>
                        <Link to="/blog" onClick={() => { setActiveLink(6); setOpenDropdown(null); }} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 ${activeLink === 6 ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Blog</Link>
                        <Link to="/contacto" onClick={() => { setActiveLink(7); setOpenDropdown(null); }} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 ${activeLink === 7 ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Contacto</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative hidden lg:block">
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input type="text" placeholder="Buscar..." className="w-48 bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-3 py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                        </div>
                        <div className="hidden lg:block"><button className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 hover:bg-blue-600 text-white">Empezar</button></div>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
            {/* Menú Móvil */}
            {mobileOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full border-t border-gray-800 bg-gray-900 shadow-xl z-50">
                    <div className="px-4 py-3 space-y-1">
                        <Link to="/" onClick={() => { setActiveLink(0); setMobileOpen(false); }} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 0 ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Inicio</Link>

                        {/* RESPONSIVE: Preambulos */}
                        <button
                            onClick={() => setOpenDropdown(openDropdown === 1 ? null : 1)}
                            className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 1 ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'} w-full text-left inline-flex items-center justify-between`}
                        >
                            <span>Preambulos</span>
                            <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 1 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openDropdown === 1 && (
                            <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-700 pl-3">
                                <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Estados / Municipios / Parroquias</a>
                                <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">IVA / UCAU / Otras unidades de medidas</a>
                                <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Tipos de Organismos / Modalidades Seleccion / Objetos (compras, servicios u obras) / Lapsos</a>
                                <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Normativa Legal</a>
                            </div>
                        )}

                        {/* RESPONSIVE: Configuracion */}
                        <button
                            onClick={() => setOpenDropdown(openDropdown === 2 ? null : 2)}
                            className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 2 ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'} w-full text-left inline-flex items-center justify-between`}
                        >
                            <span>Configuracion</span>
                            <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 2 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openDropdown === 2 && (
                            <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-700 pl-3">
                                <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Registro del Organismo cliente</a>
                                <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Unidades usuarias / contratantes</a>
                                <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Cargos de Cada Area</a>
                                <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Comisión de Contrataciones</a>
                                <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Histórico de contratistas</a>
                            </div>
                        )}

                        {/* RESPONSIVE: Contrataciones */}
                        <button
                            onClick={() => setOpenDropdown(openDropdown === 3 ? null : 3)}
                            className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 3 ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'} w-full text-left inline-flex items-center justify-between`}
                        >
                            <span>Contrataciones</span>
                            <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 3 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openDropdown === 3 && (
                            <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-700 pl-3">
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Actividades Previas</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Apertua de Procedimiento</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Recepcion y Revision de Ofertas</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Informe de Recomendaciones</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Recepcion y Revision de garantias</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Suscripcion del Contrato</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Inicio del Contrato</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Control del Contrato</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Fin del Contrato</a>
                                    <a href="#" onClick={handleSubMenuClick} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Informe al SNC</a>
                            </div>
                        )}

                        <Link to="/estadisticas" onClick={() => { setActiveLink(4); setMobileOpen(false); }} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 4 ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Estadisticas</Link>
                        <Link to="/nosotros" onClick={() => { setActiveLink(5); setMobileOpen(false); }} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 5 ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Nosotros</Link>
                        <Link to="/blog" onClick={() => { setActiveLink(6); setMobileOpen(false); }} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 6 ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Blog</Link>
                        <Link to="/contacto" onClick={() => { setActiveLink(7); setMobileOpen(false); }} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeLink === 7 ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}`}>Contacto</Link>

                        <div className="pt-2"><button className="w-full px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 hover:bg-blue-600 text-white">Empezar</button></div>
                    </div>
                </div>
            )}
        </nav>
    )
}