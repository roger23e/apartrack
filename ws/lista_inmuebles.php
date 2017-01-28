<?php 
    header('Content-Type: text/html; charset=utf-8');
    include_once './connection.php';

    $sql= "SELECT COD_INMUEBLE,NOMBRE,DESCRIPCION,NUM_APARTAMENTOS FROM tbl_inmuebles ORDER BY NOMBRE;;"; 
	
    $stmt = $conn->prepare($sql); 

    $stmt->execute();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) 
    {
        $inmuebles[] = array
        (
            'COD_INMUEBLE'          => $row['COD_INMUEBLE'],
            'NOMBRE'                => $row['NOMBRE'],
            'DESCRIPCION'           => $row['DESCRIPCION'], 
            'NUMERO_APARTAMENTOS'   => $row['NUMERO_APARTAMENTOS']
        );
    }

    $return["INMUEBLES"] = $inmuebles;
    
    if(isset($_GET["callback"]))
    {	
        echo $_GET["callback"]."(" . json_encode($return) . ");";	
    }
    else
    {
        echo  json_encode($return);
    }
