<?php
// create_tabla_estados.php
require_once 'conexion.php';

try {
    $sql = "
    CREATE TABLE IF NOT EXISTS estados (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ";

    $pdo->exec($sql);
    echo "Tabla 'estados' creada correctamente.<br>";
} catch (\PDOException $e) {
    echo "Error al crear la tabla 'estados': " . $e->getMessage() . "<br>";
}
?>