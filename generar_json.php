<?php
    header('Content-Type: application/json');
    echo "Generar JSON";
    $obj = array('experiencia' => ['empresa'=>'Esfoguar', 'antiguedad' => 5])
    $datos = array('nombre ' => 'Juan', 'apellido' => 'Perez');
    echo json_encode($datos);
    echo json_encode($obj);
?>