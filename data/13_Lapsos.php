<?php
// create_tabla_lapsos_modalidades.php
require_once 'conexion.php';

try {
    $sql = "
    CREATE TABLE IF NOT EXISTS lapsos_modalidades (
        id INT AUTO_INCREMENT PRIMARY KEY,
        modalidad_id INT NOT NULL,
        objeto_id INT NULL, -- Opcional: Para diferenciar si el lapso varía por Bienes, Servicios u Obras
        
        fase_procedimiento VARCHAR(100) NOT NULL, -- ej. Disponibilidad de Pliego, Presentación de Ofertas, Aclaratorias, Evaluación, Adjudicación
        
        -- Configuración del Lapso Legal
        dias_minimos INT NOT NULL DEFAULT 0,
        dias_maximos INT NULL, -- NULL si el lapso no tiene techo estricto o es un único lapso fijo
        tipo_dias ENUM('Hábiles', 'Continuos') NOT NULL DEFAULT 'Hábiles',
        
        -- Prórrogas contempladas en la normativa
        permite_prorroga TINYINT(1) NOT NULL DEFAULT 0,
        dias_prorroga_max INT NULL DEFAULT 0,
        
        -- Fundamentación Legal
        articulo_lcp VARCHAR(100) NULL, -- Ej. Art. 78 LCP, Art. 85 LCP
        observacion_legal TEXT NULL,
        
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

        -- Claves Foráneas
        FOREIGN KEY (modalidad_id) REFERENCES modalidades_seleccion(id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (objeto_id) REFERENCES objetos_contratacion(id) ON DELETE SET NULL ON UPDATE CASCADE,

        -- Índice de optimización
        INDEX idx_modalidad_fase (modalidad_id, fase_procedimiento)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    -- Inserción de lapsos legales estandarizados según la LCP
    INSERT IGNORE INTO lapsos_modalidades 
    (id, modalidad_id, objeto_id, fase_procedimiento, dias_minimos, dias_maximos, tipo_dias, permite_prorroga, dias_prorroga_max, articulo_lcp, observacion_legal) 
    VALUES
    -- CONSULTA DE PRECIOS (Modalidad ID: 1)
    (1, 1, NULL, 'Preparación y Presentación de Ofertas', 1, 3, 'Hábiles', 1, 2, 'Art. 101 LCP', 'Lapsos abreviados para contrataciones de menor cuantía'),
    (2, 1, NULL, 'Evaluación de Ofertas y Informe', 1, 3, 'Hábiles', 0, 0, 'Art. 102 LCP', 'Evaluación por la Comisión de Contrataciones'),

    -- CONCURSO CERRADO (Modalidad ID: 2)
    (3, 2, NULL, 'Disponibilidad de Pliegos y Aclaratorias', 2, 4, 'Hábiles', 0, 0, 'Art. 88 LCP', 'A partir de la notificación de la invitación'),
    (4, 2, NULL, 'Preparación y Presentación de Ofertas', 4, 8, 'Hábiles', 1, 4, 'Art. 89 LCP', 'Prórroga justificada por la complejidad del pliego'),
    (5, 2, NULL, 'Evaluación y Calificación de Ofertas', 3, 10, 'Hábiles', 1, 5, 'Art. 91 LCP', 'Informe de recomendación a la Máxima Autoridad'),

    -- CONCURSO ABIERTO (Modalidad ID: 3)
    (6, 3, NULL, 'Disponibilidad de Pliegos y Solicitud de Aclaratorias', 3, 7, 'Hábiles', 0, 0, 'Art. 77 LCP', 'Pliegos disponibles desde el llamado público'),
    (7, 3, NULL, 'Preparación y Presentación de Ofertas (Nacional)', 9, 15, 'Hábiles', 1, 8, 'Art. 78 LCP', 'Lapso contado a partir del vencimiento de disponibilidad de pliegos'),
    (8, 3, NULL, 'Preparación y Presentación de Ofertas (Internacional)', 15, 21, 'Hábiles', 1, 10, 'Art. 78 LCP', 'Para procesos con participación de empresas extranjeras no domiciliadas'),
    (9, 3, NULL, 'Evaluación y Calificación de Ofertas', 5, 15, 'Hábiles', 1, 10, 'Art. 85 LCP', 'Dictamen final de la Comisión de Contrataciones'),

    -- CONTRATACIÓN DIRECTA (Modalidad ID: 4)
    (10, 4, NULL, 'Presentación de Oferta Única / Negociación', 1, 5, 'Hábiles', 0, 0, 'Art. 106 LCP', 'En supuestos de urgencia comprobada o exclusividad de proveedor');
    ";

    $pdo->exec($sql);
    echo "Tabla 'lapsos_modalidades' creada e insertada con los lapsos legales normativos correctamente.<br>";
} catch (\PDOException $e) {
    echo "Error al crear la tabla 'lapsos_modalidades': " . $e->getMessage() . "<br>";
}
?>