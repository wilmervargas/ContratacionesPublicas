<?php
// create_tabla_tipos_organismo.php
require_once 'conexion.php';

try {
    $sql = "
    CREATE TABLE IF NOT EXISTS tipos_organismo (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL UNIQUE,
        descripcion VARCHAR(255) NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    -- Insertar Tipos de Organismo predeterminados
    INSERT IGNORE INTO tipos_organismo (id, nombre, descripcion) VALUES
    (1, 'Centralizado', 'Órganos dependientes directamente de la administración central'),
    (2, 'Descentralizado', 'Entes con personalidad jurídica y patrimonio propio'),
    (3, 'Desconcentrado', 'Órganos con autonomía funcional dentro de la estructura central');
    ";

    $pdo->exec($sql);
    echo "Tabla 'tipos_organismo' creada y datos iniciales insertados correctamente.<br>";
} catch (\PDOException $e) {
    echo "Error al crear la tabla 'tipos_organismo': " . $e->getMessage() . "<br>";
}
?>