<?php
// 05_RegistroInstituciones.php
// Para vincular directamente al representante actual en la tabla instituciones (sin romper la integridad referencial ni la estructura del histórico), la mejor práctica en el diseño de bases de datos es agregar la columna representante_id como clave foránea que referencie al registro correspondiente de la tabla representantes_historico.
// Aquí tienes la versión actualizada del archivo 05_RegistroInstituciones.php con el nuevo campo y su correspondiente relación:

require_once 'conexion.php';

try {
    $sql = "
    CREATE TABLE IF NOT EXISTS instituciones (
        rif VARCHAR(20) PRIMARY KEY,
        descripcion TEXT NOT NULL,
        siglas VARCHAR(30) NOT NULL,
        logo_path VARCHAR(255) NULL,
        decreto_creacion VARCHAR(150) NOT NULL,
        imagen_rif_path VARCHAR(255) NULL,
        imagen_decreto_path VARCHAR(255) NULL,
        estado_id INT NOT NULL,
        municipio_id INT NOT NULL,
        parroquia_id INT NOT NULL,
        ciudad VARCHAR(100) NOT NULL,
        objeto TEXT NOT NULL,
        tipo_organismo_id INT NOT NULL,
        
        -- Campo para vincular al Representante Legal Vigente / Actual
        representante_id INT NULL, 

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

        -- Claves Foráneas de Ubicación y Clasificación
        FOREIGN KEY (estado_id) REFERENCES estados(id) ON DELETE RESTRICT ON UPDATE CASCADE,
        FOREIGN KEY (municipio_id) REFERENCES municipios(id) ON DELETE RESTRICT ON UPDATE CASCADE,
        FOREIGN KEY (parroquia_id) REFERENCES parroquias(id) ON DELETE RESTRICT ON UPDATE CASCADE,
        FOREIGN KEY (tipo_organismo_id) REFERENCES tipos_organismo(id) ON DELETE RESTRICT ON UPDATE CASCADE,

        -- Clave Foránea al Representante Legal (Aponta a la tabla representantes_historico)
        FOREIGN KEY (representante_id) REFERENCES representantes_historico(id) ON DELETE SET NULL ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ";

    $pdo->exec($sql);
    echo "Tabla 'instituciones' creada o actualizada correctamente.<br>";
} catch (\PDOException $e) {
    echo "Error al crear la tabla 'instituciones': " . $e->getMessage() . "<br>";
}
?>