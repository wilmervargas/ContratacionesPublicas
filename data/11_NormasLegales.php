<?php
// create_tabla_normativas_legales.php
// Almacena las leyes, reglamentos, decretos, resoluciones y providencias administrativas utilizadas por el sistema para fundar los procedimientos administrativos.
require_once 'conexion.php';

try {
    $sql = "
    CREATE TABLE IF NOT EXISTS normativas_legales (
        id INT AUTO_INCREMENT PRIMARY KEY,
        tipo VARCHAR(50) NOT NULL, -- ej. Ley, Reglamento, Decreto, Providencia, Resolución
        numero VARCHAR(50) NOT NULL,
        titulo VARCHAR(255) NOT NULL,
        gaceta_tipo VARCHAR(30) NOT NULL DEFAULT 'Oficial', -- Oficial, Extraordinaria
        gaceta_numero VARCHAR(50) NOT NULL,
        fecha_gaceta DATE NOT NULL,
        articulo_referencia VARCHAR(100) NULL, -- Ej. Art. 77, Numeral 3
        resumen_aplicacion TEXT NULL,
        documento_pdf_path VARCHAR(255) NULL,
        es_vigente TINYINT(1) NOT NULL DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

        INDEX idx_normativa_vigente (es_vigente)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    -- Inserción de la normativa base
    INSERT IGNORE INTO normativas_legales (id, tipo, numero, titulo, gaceta_tipo, gaceta_numero, fecha_gaceta, resumen_aplicacion) VALUES
    (1, 'Ley', 'S/N', 'Ley de Contrataciones Públicas', 'Extraordinaria', '6.154', '2014-11-19', 'Marco legal general regulador de las contrataciones públicas en Venezuela'),
    (2, 'Reglamento', 'Decreto 1.399', 'Reglamento de la Ley de Contrataciones Públicas', 'Oficial', '40.597', '2015-02-06', 'Reglamentación ejecutiva de los procedimientos de selección y ejecución contractual');
    ";

    $pdo->exec($sql);
    echo "Tabla 'normativas_legales' creada e insertada correctamente.<br>";
} catch (\PDOException $e) {
    echo "Error al crear la tabla 'normativas_legales': " . $e->getMessage() . "<br>";
}
?>