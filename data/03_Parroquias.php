<?php
// create_tabla_parroquias.php
require_once 'conexion.php';

try {
    $sql = "
    CREATE TABLE IF NOT EXISTS parroquias (
        id INT AUTO_INCREMENT PRIMARY KEY,
        municipio_id INT NOT NULL,
        nombre VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (municipio_id) REFERENCES municipios(id) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ";

    $pdo->exec($sql);
    echo "Tabla 'parroquias' creada correctamente.<br>";
} catch (\PDOException $e) {
    echo "Error al crear la tabla 'parroquias': " . $e->getMessage() . "<br>";
}
?>