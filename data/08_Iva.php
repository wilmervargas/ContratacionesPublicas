<?php
// create_tabla_iva.php
// En la tabla de IVA, la columna porcentaje guarda la tasa de impuesto (ej. 16.00). La columna es_vigente es un booleano que permite identificar rápidamente cuál es el IVA activo.

require_once 'conexion.php';

try {
    $sql = "
    CREATE TABLE IF NOT EXISTS iva_historico (
        id INT AUTO_INCREMENT PRIMARY KEY,
        porcentaje DECIMAL(5, 2) NOT NULL,
        gaceta_numero VARCHAR(50) NULL,
        fecha_gaceta DATE NULL,
        fecha_inicio DATE NOT NULL,
        fecha_fin DATE NULL,
        es_vigente TINYINT(1) NOT NULL DEFAULT 0,
        observaciones VARCHAR(255) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        
        -- Índice para acelerar la consulta del IVA activo
        INDEX idx_iva_vigente (es_vigente)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    -- Inserción inicial del IVA vigente por defecto (16%)
    INSERT IGNORE INTO iva_historico (id, porcentaje, fecha_inicio, es_vigente, observaciones) VALUES
    (1, 16.00, '2020-01-01', 1, 'Tasa general de IVA vigente');
    ";

    $pdo->exec($sql);
    echo "Tabla 'iva_historico' creada y registro inicial insertado correctamente.<br>";
} catch (\PDOException $e) {
    echo "Error al crear la tabla 'iva_historico': " . $e->getMessage() . "<br>";
}
?>