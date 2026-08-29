import { Link } from 'react-router-dom';

const TipoOrganismos = () => {
    /* 
       INFORMACIÓN DEL REGISTRO Y TABLA DINÁMICA
       Tabla principal: tiposorganismos
       Campos contemplados:
       - id: Identificador único del registro
       - codigo_nivel: Código de Nivel (NACIONAL, ESTADAL O MUNICIPAL) (ej: 01, 02)
       - codigo_poder: Código de Poder (EJECUTIVO, LEGISLATIVO, JUDICIAL, CIUDADANO, ELECTORAL, ORGANOS INDEPENDIENTES O AUTONOMOS) (ej: 01, 02)
       - codigo_tipo_organismo: Código de tipo_organismo (MINISTERIO, ALCALDIA, GOBERNACION, SECRETARIA, ETC) (ej: 01, 02)
       - nombre_tipo_organismo: Nombre oficial tipo de organismo (MINISTERIO, ALCALDIA, GOBERNACION, SECRETARIA, ETC)
       
       Rol en el sistema:
       Esta vista permite la lectura y actualización de los registros dentro del CRUD de tiposorganismos.
    */

    return (
        <div className="bg-slate-50 min-h-screen pb-12">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                
                {/* Redirección directa al menú/vista de Preámbulos */}
                <Link 
                    to="/preambulos" 
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors mb-6 font-medium"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver
                </Link>

                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        
                        {/* Sección principal de detalles del poder */}
                        <div className="w-full p-8 lg:p-12 flex flex-col">
                            
                            {/* Encabezado Principal */}
                            <div className="border-b border-slate-100 pb-6 mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border border-emerald-100">
                                        Tabla Dinámica
                                    </span>
                                </div>
                                <h1 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight">
                                    Tabla: TiposOrganismos
                                </h1>
                                <p className="text-slate-500 text-base mt-2 leading-relaxed">
                                    Detalles generales referentes a la entidad territorial registrada bajo la tabla dinámica de tiposorganismos.
                                </p>
                            </div>

                            {/* Estructura de Campos */}
                            <div className="space-y-3">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                                    Campos de la Base de Datos
                                </h3>

                                {/* Campo: ID */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                                        <span className="font-mono text-base font-bold text-slate-700">id</span>
                                    </div>
                                    <span className="text-xs font-semibold font-mono bg-white text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                        Integer (Index / PK)
                                    </span>
                                </div>

                                {/* Campo: codigo_nivel */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span className="font-mono text-base font-bold text-slate-700">codigo_nivel (ENLAZADO CON TABLA NIVELES)</span>
                                    </div>
                                    <span className="text-xs font-semibold font-mono bg-white text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                        Numeric (2)     01, 02 o 03
                                    </span>
                                </div>

                                {/* Campo: codigo_poder */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span className="font-mono text-base font-bold text-slate-700">codigo_poder (ENLAZADO CON TABLA PODERES Y NIVELES)</span>
                                    </div>
                                    <span className="text-xs font-semibold font-mono bg-white text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                        Numeric (2)     01, 02, 03, 
                                    </span>
                                </div>

                                {/* Campo: codigo_tipo_organismo */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span className="font-mono text-base font-bold text-slate-700">codigo_tipo_organismo</span>
                                    </div>
                                    <span className="text-xs font-semibold font-mono bg-white text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                        Numeric (2)     01, 02, 03, 
                                    </span>
                                </div>

                                {/* Campo: nombre_tipo_organismo */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span className="font-mono text-base font-bold text-slate-700">nombre_tipo_organismo</span>
                                    </div>
                                    <span className="text-xs font-semibold font-mono bg-white text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                        Char    (PUEDE SER LA A.N., UNA ALCALDIA, UNA GOBERNACION, UN INSTITUTO AUTONOMO, UN CONCEJO MUNICIPAL, ETC.)
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TipoOrganismos;