<?php
// create_tabla_contratistas_snc.php
// Estructura la información de los contratistas homologada a la ficha del Registro Nacional de Contratistas (RNC / SNC Caracas), incluyendo estatus del certificado de inscripción, nivel de contratación, vigencia del RNC y calificación financiera/técnica.

require_once 'conexion.php';

try {
    $sql = "
    CREATE TABLE IF NOT EXISTS contratistas_snc (
        id INT AUTO_INCREMENT PRIMARY KEY,
        rif VARCHAR(20) NOT NULL UNIQUE,
        razon_social VARCHAR(255) NOT NULL,
        denominacion_comercial VARCHAR(255) NULL,
        
        -- Datos Homologados al RNC / SNC
        numero_rnc VARCHAR(50) NULL, -- Número de Registro Nacional de Contratistas
        estatus_rnc ENUM('Inscrito', 'Calificado', 'Inhabilitado', 'Vencido', 'En Proceso') NOT NULL DEFAULT 'En Proceso',
        fecha_emision_cert_rnc DATE NULL,
        fecha_vencimiento_cert_rnc DATE NULL,
        
        -- Capacidad Operativa y Financiera
        nivel_contratacion_financiera DECIMAL(18, 4) NULL, -- Expresado en Bolívares / UCAU
        solvencia_laboral TINYINT(1) NOT NULL DEFAULT 0,
        solvencia_ince TINYINT(1) NOT NULL DEFAULT 0,
        solvencia_sso TINYINT(1) NOT NULL DEFAULT 0,

        -- Datos del Representante Legal
        rep_cedula VARCHAR(20) NOT NULL,
        rep_nombre_completo VARCHAR(200) NOT NULL,
        rep_cargo VARCHAR(100) NOT NULL,

        -- Ubicación y Contacto
        estado_id INT NOT NULL,
        municipio_id INT NOT NULL,
        parroquia_id INT NOT NULL,
        direccion_fiscal TEXT NOT NULL,
        telefono_principal VARCHAR(30) NOT NULL,
        email_corporativo VARCHAR(150) NOT NULL,
        
        -- Archivos Digitalizados Homologados
        pdf_cert_rnc_path VARCHAR(255) NULL,
        pdf_solvencia_laboral_path VARCHAR(255) NULL,
        pdf_acta_constitutiva_path VARCHAR(255) NULL,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

        -- Claves Foráneas Geográficas
        FOREIGN KEY (estado_id) REFERENCES estados(id) ON DELETE RESTRICT ON UPDATE CASCADE,
        FOREIGN KEY (municipio_id) REFERENCES municipios(id) ON DELETE RESTRICT ON UPDATE CASCADE,
        FOREIGN KEY (parroquia_id) REFERENCES parroquias(id) ON DELETE RESTRICT ON UPDATE CASCADE,

        -- Índices
        INDEX idx_rif (rif),
        INDEX idx_rnc_estatus (estatus_rnc, fecha_vencimiento_cert_rnc)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ";

    $pdo->exec($sql);
    echo "Tabla 'contratistas_snc' creada correctamente.<br>";
} catch (\PDOException $e) {
    echo "Error al crear la tabla 'contratistas_snc': " . $e->getMessage() . "<br>";
}
?>