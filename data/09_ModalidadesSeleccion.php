<?php
// create_tabla_modalidades_seleccion.php
// Define la modalidad (Consulta de Precios, Concurso Cerrado, Concurso Abierto, Contratación Directa) con sus rangos mínimo y máximo en UCAU según el objeto de contratación.

PHP
require_once 'conexion.php';

try {
    $sql = "
    CREATE TABLE IF NOT EXISTS modalidades_seleccion (
        id INT AUTO_INCREMENT PRIMARY KEY,
        codigo VARCHAR(20) NOT NULL UNIQUE, -- ej. CP, CC, CA, CD
        nombre VARCHAR(100) NOT NULL,
        descripcion TEXT NULL,
        
        -- Rangos parametrizados en UCAU
        rango_ucau_desde DECIMAL(18, 4) NOT NULL DEFAULT 0.0000,
        rango_ucau_hasta DECIMAL(18, 4) NULL, -- NULL indica sin límite superior (ej. Concurso Abierto)
        
        base_legal TEXT NULL,
        es_activo TINYINT(1) NOT NULL DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    -- Inserción inicial de modalidades principales
    INSERT IGNORE INTO modalidades_seleccion (id, codigo, nombre, rango_ucau_desde, rango_ucau_hasta, descripcion) VALUES
    (1, 'CP', 'Consulta de Precios', 0.0000, 5000.0000, 'Procedimiento simplificado para contrataciones de menor cuantía'),
    (2, 'CC', 'Concurso Cerrado', 5000.0001, 20000.0000, 'Procedimiento por invitación a contratistas inscritos en el RNC'),
    (3, 'CA', 'Concurso Abierto', 20000.0001, NULL, 'Procedimiento de participación pública e internacional/nacional'),
    (4, 'CD', 'Contratación Directa', 0.0000, NULL, 'Excepcionalidad por supuestos de ley (urgencia, exclusividad, etc.)');
    ";

    $pdo->exec($sql);
    echo "Tabla 'modalidades_seleccion' creada e insertada correctamente.<br>";
} catch (\PDOException $e) {
    echo "Error al crear la tabla 'modalidades_seleccion': " . $e->getMessage() . "<br>";
}
?>