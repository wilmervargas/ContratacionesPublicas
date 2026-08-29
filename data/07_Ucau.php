<?php
// create_tabla_ucau.php
// Para la Unidad de Cálculo Aritmético del Umbral (UCAU), la columna valor_moneda guarda el monto expresado en moneda nacional (con precisión de 4 decimales para valores monetarios exactos).

require_once 'conexion.php';

try {
    $sql = "
    CREATE TABLE IF NOT EXISTS ucau_historico (
        id INT AUTO_INCREMENT PRIMARY KEY,
        valor_moneda DECIMAL(18, 4) NOT NULL,
        gaceta_numero VARCHAR(50) NULL,
        fecha_gaceta DATE NULL,
        fecha_inicio DATE NOT NULL,
        fecha_fin DATE NULL,
        es_vigente TINYINT(1) NOT NULL DEFAULT 0,
        observaciones VARCHAR(255) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

        -- Índice para acelerar la consulta de la UCAU activa
        INDEX idx_ucau_vigente (es_vigente)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ";

    $pdo->exec($sql);
    echo "Tabla 'ucau_historico' creada correctamente.<br>";
} catch (\PDOException $e) {
    echo "Error al crear la tabla 'ucau_historico': " . $e->getMessage() . "<br>";
}
?>