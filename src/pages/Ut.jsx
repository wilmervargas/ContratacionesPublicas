import { Link } from 'react-router-dom';

const Ut = () => {
    /* 
       INFORMACIÓN DEL REGISTRO Y TABLA DINÁMICA
       Tabla principal: UT
       Campos contemplados:
       - id: Identificador único del registro
       - descripcion: Descripcion de UT
       - monto: Monto de la UT (ej: 40bs)
       - vigente: logico que indica si el registro está vigente o no (ej: true, false)
       - fecha_vigencia: Fecha de vigencia (ej: 2023-01-01)
       - fecha_decreto_providencia: Fecha de decreto (ej: 2023-01-01)
       - numero_decreto_providencia: Número de decreto_providencia
       - fecha_publicacion: Fecha de publicación (ej: 2023-01-01)
       - numero_gaceta: Número de gaceta
       - organismo_emisor: Organismo emisor
       - observaciones: Observaciones adicionales
       - Link de la normativa en PDF
       
       Rol en el sistema:
       Esta vista permite la lectura y actualización de los registros dentro del CRUD del UT.
       Esta tabla debe ser tipo historico, y se mantiene en vigencia el que se marque en el campo vigencia.
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
                        
                        {/* Sección principal de detalles del UT */}
                        <div className="w-full p-8 lg:p-12 flex flex-col">
                            
                            {/* Encabezado Principal */}
                            <div className="border-b border-slate-100 pb-6 mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border border-emerald-100">
                                        Tabla Dinámica
                                    </span>
                                </div>
                                <h1 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight">
                                    Tabla: UT
                                </h1>
                                <p className="text-slate-500 text-base mt-2 leading-relaxed">
                                    Detalles de la tabla dinámica del UT.
                                    Esta tabla debe ser tipo historico, y se mantiene en vigencia el que se marque en el campo vigencia.
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

                                {/* Campo: descripcion */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span className="font-mono text-base font-bold text-slate-700">descripcion</span>
                                    </div>
                                    <span className="text-xs font-semibold font-mono bg-white text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                        text        El valor actual de la Unidad Tributaria (U.T.) en Venezuela es de cuarenta y tres bolívares (Bs. 43,00), establecido mediante la Providencia Administrativa N.° SNAT/2025/000048, publicada en la Gaceta Oficial N.° 43.140 de fecha 2 de junio de 2025
                                    </span>
                                </div>

                                {/* Campo: monto */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span className="font-mono text-base font-bold text-slate-700">monto</span>
                                    </div>
                                    <span className="text-xs font-semibold font-mono bg-white text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                        decimal (3,2)   43,00 bs
                                    </span>
                                </div>

                                {/* Campo: vigente */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span className="font-mono text-base font-bold text-slate-700">vigente</span>
                                    </div>
                                    <span className="text-xs font-semibold font-mono bg-white text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                        logico (true/false) (Si)
                                    </span>
                                </div>

                                {/* Campo: fecha_vigencia */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span className="font-mono text-base font-bold text-slate-700">fecha_vigencia</span>
                                    </div>
                                    <span className="text-xs font-semibold font-mono bg-white text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                        Date () 02/06/2025
                                    </span>
                                </div>

                                {/* Campo: fecha_DECRETO */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span className="font-mono text-base font-bold text-slate-700">fecha_decreto_providencia</span>
                                    </div>
                                    <span className="text-xs font-semibold font-mono bg-white text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                        Date () 02/06/2025
                                    </span>
                                </div>

                                {/* Campo: numero_resolucion */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span className="font-mono text-base font-bold text-slate-700">numero_decreto_providencia</span>
                                    </div>
                                    <span className="text-xs font-semibold font-mono bg-white text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                        text    SNAT/2025/000048
                                    </span>
                                </div>

                                {/* Campo: fecha_publicacion */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span className="font-mono text-base font-bold text-slate-700">fecha_publicacion</span>
                                    </div>
                                    <span className="text-xs font-semibold font-mono bg-white text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                        Date ()  02/06/2025
                                    </span>
                                </div>

                                {/* Campo: numero_gaceta */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span className="font-mono text-base font-bold text-slate-700">numero_gaceta</span>
                                    </div>
                                    <span className="text-xs font-semibold font-mono bg-white text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                        Numeric (10)    43.140
                                    </span>
                                </div>

                                {/* Campo: organismo emisor */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span className="font-mono text-base font-bold text-slate-700">organismo_emisor</span>
                                    </div>
                                    <span className="text-xs font-semibold font-mono bg-white text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                        text    SENIAT 
                                    </span>
                                </div>

                                {/* Campo: obervaciones */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span className="font-mono text-base font-bold text-slate-700">observaciones</span>
                                    </div>
                                    <span className="text-xs font-semibold font-mono bg-white text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                        text    CUALQUIER COSA ADICIONAL
                                    </span>
                                </div>

                                {/* Campo: LINK */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span className="font-mono text-base font-bold text-slate-700">Link PDF</span>
                                    </div>
                                    <span className="text-xs font-semibold font-mono bg-white text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                        text    Linkk PDF
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

export default Ut;