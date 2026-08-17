<?php
// create_tabla_representantes_historico.php
// Esta tabla vincula directamente a la institución a través de su campo institucion_rif (relacionado con la clave primaria rif de la tabla instituciones) y permite registrar el historial completo de las autoridades o representantes legales, incluyendo los datos del decreto o providencia de designación, documentos digitalizados y el control de vigencia

require_once 'conexion.php';

try {
    $sql = "
    CREATE TABLE IF NOT EXISTS representantes_historico (
        id INT AUTO_INCREMENT PRIMARY KEY,
        institucion_rif VARCHAR(20) NOT NULL,
        
        -- Datos de Identificación del Representante
        cedula VARCHAR(20) NOT NULL,
        nombres VARCHAR(100) NOT NULL,
        apellidos VARCHAR(100) NOT NULL,
        cargo VARCHAR(100) NOT NULL, -- ej. Presidente, Director General, Máxima Autoridad
        telefono VARCHAR(30) NULL,
        email VARCHAR(100) NULL,
        
        -- Datos de Designación / Decreto / Providencia
        documento_designacion VARCHAR(150) NOT NULL, -- ej. Decreto N° 1.234 o Providencia Administrativa N° PA-2025-001
        gaceta_numero VARCHAR(50) NOT NULL, -- Número de Gaceta Oficial
        fecha_gaceta DATE NOT NULL,
        imagen_designacion_path VARCHAR(255) NULL, -- Ruta del documento digitalizado (PDF o imagen)
        imagen_cedula_path VARCHAR(255) NULL, -- Ruta del documento de identidad digitalizado
        
        -- Período de Gestión y Vigencia
        fecha_toma_posesion DATE NOT NULL,
        fecha_cese DATE NULL, -- Se llena al momento de finalizar el período
        es_activo TINYINT(1) NOT NULL DEFAULT 1, -- 1: Representante Legal Actual, 0: Histórico
        
        observaciones TEXT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

        -- Clave Foránea vinculada a la tabla 'instituciones'
        FOREIGN KEY (institucion_rif) REFERENCES instituciones(rif) 
            ON DELETE RESTRICT 
            ON UPDATE CASCADE,

        -- Índices para optimización de búsquedas y reportes
        INDEX idx_institucion_activo (institucion_rif, es_activo),
        INDEX idx_cedula (cedula)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ";

    $pdo->exec($sql);
    echo "Tabla 'representantes_historico' creada correctamente.<br>";
} catch (\PDOException $e) {
    echo "Error al crear la tabla 'representantes_historico': " . $e->getMessage() . "<br>";
}
?>