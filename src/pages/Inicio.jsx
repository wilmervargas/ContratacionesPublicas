import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            
            {/* Hero Section */}
            <div className="text-center mb-16">
                <span className="bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-4 inline-block shadow-sm">
                    Sistema de Contrataciones Públicas - Fases
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight tracking-tight">
                    Proyecto SaaS / On-Premise <br className="hidden md:block" />
                    <span className="text-emerald-500">Full Stack</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed text-justify">
                    Las <strong className="text-slate-700">Contrataciones Públicas</strong> Las contrataciones públicas en Venezuela engloban el conjunto de normas, principios, procedimientos y controles jurídicos mediante los cuales los órganos y entes del Estado (ministerios, alcaldías, gobernaciones, institutos autónomos y empresas públicas) adquieren bienes, ejecutan obras o contratan la prestación de servicios comerciales y profesionales. 

                    El marco normativo fundamental está regido por la Ley de Contrataciones Públicas (LCP) y su Reglamento, ejecutado administrativamente bajo la rectoría del Servicio Nacional de Contrataciones (SNC).
                    <br /><br />
                    El marco normativo fundamental está regido por la Ley de Contrataciones Públicas (LCP) y su Reglamento, ejecutado administrativamente bajo la rectoría del Servicio Nacional de Contrataciones (SNC).
                </p>

                <br /><br />

                <h4 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-4 leading-tight tracking-tight">
                    <span className="text-blue-500">Principios Rectores</span>
                </h4>
                <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed text-justify">
                    Las contrataciones públicas deben garantizar la máxima economía, eficiencia y transparencia en la administración de los recursos del Estado:
                    <br /><br />
                    Economía y Eficiencia: Optimización de fondos públicos priorizando la mejor relación calidad-precio.
                    <br /><br />
                    Transparencia y Publicidad: Garantía de acceso público a los pliegos, llamados y actos del proceso.
                    <br /><br />
                    Libre Concurrencia e Igualdad: Prohibición de tratos discriminatorios o requisitos direccionados para favorecer a postores específicos.
                    <br /><br />
                    Promoción de la Industria Nacional: Mecanismos de preferencia y valor agregado nacional (VAN) para bienes y servicios producidos en el país.
                    <br /><br />
                    Modalidades de Selección de Contratistas
                    <br /><br />
                    El procedimiento de selección varía en función del monto estimado de la contratación (expresado en la unidad de cuenta oficial) o de circunstancias excepcionales:
                    <br /><br />
                    Modalidad	Descripción / Supuestos
                    <br /><br />
                    Concurso Abierto	Procedimiento ordinario y de mayor cuantía. Se realiza un llamado público general para que cualquier interesado que cumpla los pliegos presente su oferta.
                    <br /><br />
                    Concurso Cerrado	Aplicable en rangos de menor cuantía. El ente contratante invita de forma directa a un número determinado de participantes inscritos en el RNC.
                    <br /><br />
                    Consulta de Precios	Modalidad expedita para compras o contrataciones de menor escala económica, solicitando cotizaciones formales a al menos tres proveedores.
                    <br /><br />
                    Contratación Directa	Excepción a la licitación. Se adjudica directamente por razones justificadas (emergencia declarada, exclusividad técnica/patente, seguridad de Estado o contratos desiertos).
                </p>
            </div>

            {/* Scope Section */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 mb-12">
                <h2 className="text-3xl font-black text-slate-800 mb-8 flex items-center gap-3">
                    <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Alcance de la Fase 1
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-slate-700 mb-4 border-b border-slate-100 pb-2">Pasos</h3>
                        <div className="space-y-4">
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <strong className="text-slate-800 block mb-1">Menú Preambulos</strong>
                                <p className="text-sm text-slate-500">Definen el <em>Layout</em> global. Se realizará el llenado basico de la informacion del sistema, es decir, contendrá los valores iniciales que seran constantemente actualizados y usados en el propceso de contrataciones públicas.
                                Estariamos hablanodo de tablas de IVA, UCAU, Estados, Municipios, Parroquias, Tipo de Organismo, Modalidades de Selección, Objeto de Contratación (Compras, sericios u obras), Normativas legales, Lapsos de de modalidades de selección, Histórico de Registro de Contatistas, entre otras que vayan surgiendo</p>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <strong className="text-slate-800 block mb-1">Menú Configuración</strong>
                                <p className="text-sm text-slate-500">En este caso es donde se van a registrar los organismos a los cuales se les asignará el Sistema y por ende, los permisos y configuraciones específicas dentro del mismo. Llevara el RIF, Denominacion del organismo, direcfion, telefos, correos, entre otros.
                                Tambien deberán definirse las unidades usuarias, contatantes, comisiones de contrataciones, personal a carrgo de cada área, es decir, las dependencias que van a usar el sistema y que van a generar los procesos de contrataciones públicas, el personnal y sus atribciones y sus permisos dentro del recorrido (hja de ruta).
                                </p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-slate-700 mb-4 border-b border-slate-100 pb-2">...</h3>
                        <div className="space-y-4">
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <strong className="text-slate-800 block mb-1">Contrataciones</strong>
                                <p className="text-sm text-slate-500">Entramos en materia del proceso de contrataciones publicas en si.
                                Se registraran los procesos de contrataciones publicas, es decir, se generara el expediente de cada proceso de contratacion publica, desde la fase de preambulo, actividades previas, clasificacion del tipo de proceso, llamados o invitaciones, informes, entre otros; hasta la fase de adjudicacion y cierre del proceso.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <strong className="text-slate-800 block mb-1">Estadísticas</strong>
                                <p className="text-sm text-slate-500">Vista de estadísticas sobre el proceso de contrataciones públicas, cualquiera que sean las ideas.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Inicio;