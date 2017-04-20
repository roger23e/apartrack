<?php 
    header('Content-Type: text/html; charset=utf-8');
    include_once './connection.php';
    
    $cliente_id         = $_GET["cliente_id"];
    
    $sth = $conn->prepare("SELECT COD_APARTAMENTO, COD_INMUEBLE, COD_CLIENTE, TIPO_NEGOCIACION, DESCRIPCION, PRECIO, METROS, NUM_HABITACIONES, NUM_BANIOS, ESTATUS FROM tbl_apartamentos WHERE COD_CLIENTE = :cliente_id;");
    $sth->bindParam(':cliente_id',  $cliente_id,    PDO::PARAM_INT); 
    $sth->execute();
    $retorno = $sth->fetchAll();
    foreach($retorno as $row) 
    {
        $apartments[] = array
        (
            'apartment_id'      => $row['COD_APARTAMENTO'], 
            'inmueble_id'       => $row['COD_INMUEBLE'], 
            'client_id'         => $row['COD_CLIENTE'], 
            'tipo_negociacion'  => $row['TIPO_NEGOCIACION'], 
            'descripcion'       => $row['DESCRIPCION'], 
            'price'             => $row['PRECIO'],
            'meters'            => $row['METROS'], 
            'num_habitaciones'  => $row['NUM_HABITACIONES'],
            'num_banios'        => $row['NUM_BANIOS'],
            'status'            => $row['ESTATUS']
        );
    }
    
    if(isset($_GET["callback"]))
    {	
        echo $_GET["callback"]."(" . json_encode($apartments) . ");";	
    }
    else
    {
        echo  json_encode($apartments);
    }

   