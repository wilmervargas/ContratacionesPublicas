<?php
// create_tabla_objetos_contratacion.php
// Clasifica las contrataciones en Adquisición de Bienes, Prestación de Servicios y Ejecución de Obras.
require_once 'conexion.php';

try {
    $sql = "
    CREATE TABLE IF NOT EXISTS objetos_contratacion (
        id INT AUTO_INCREMENT PRIMARY KEY,
        codigo VARCHAR(10) NOT NULL UNIQUE, -- ej. BIENES, SERVICIOS, OBRAS
        nombre VARCHAR(100) NOT NULL,
        descripcion VARCHAR(255) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    -- Inserción de clasificaciones base según LCP
    INSERT IGNORE INTO objetos_contratacion (id, codigo, nombre, descripcion) VALUES
    (1, 'BIENES', 'Adquisición de Bienes', 'Compra de bienes muebles, suministros y equipos'),
    (2, 'SERVICIOS', 'Prestación de Servicios', 'Servicios generales, comerciales y de consultoría profesional'),
    (3, 'OBRAS', 'Ejecución de Obras', 'Construcción, modificación, ampliación, reparación o mantenimiento de infraestructura');
    ";

    $pdo->exec($sql);
    echo "Tabla 'objetos_contratacion' creada e insertada correctamente.<br>";
} catch (\PDOException $e) {
    echo "Error al crear la tabla 'objetos_contratacion': " . $e->getMessage() . "<br>";
}
?>