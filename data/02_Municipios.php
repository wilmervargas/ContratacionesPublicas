<?php
// create_tabla_municipios.php
require_once 'conexion.php';

try {
    $sql = "
    CREATE TABLE IF NOT EXISTS municipios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        estado_id INT NOT NULL,
        nombre VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (estado_id) REFERENCES estados(id) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ";

    $pdo->exec($sql);
    echo "Tabla 'municipios' creada correctamente.<br>";
} catch (\PDOException $e) {
    echo "Error al crear la tabla 'municipios': " . $e->getMessage() . "<br>";
}
?>