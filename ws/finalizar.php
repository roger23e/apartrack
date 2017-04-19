<?php 
    header('Content-Type: text/html; charset=utf-8');
    include_once './connection.php';
    /*
    echo "  inmueble_id: "      .$_GET["inmueble_id"]."<br>";
    echo "  cliente_id: "       .$_GET["cliente_id"]."<br>";
    echo "  name: "             .$_GET["name"]."<br>";
    echo "  description: "      .$_GET["description"]."<br>";
    echo "  room_number: "      .$_GET["room_number"]."<br>";
    echo "  bath_number: "      .$_GET["bath_number"]."<br>";
    echo "  price: "            .$_GET["price"]."<br>";
    echo "  images: "           .$_GET["images"]."<br>";
    echo "  characteristics: "  .$_GET["characteristics"]."<br>";
    echo "  advantages: "       .$_GET["advantages"]."<br>";
    */
    $inmueble_id        = $_GET["inmueble_id"];
    $cliente_id         = $_GET["cliente_id"];
    $tipo_negociacion   = 1;
    $name               = $_GET["name"];
    $description        = $_GET["description"];
    $price              = $_GET["price"];
    $meters             = 100;
    $room_number        = $_GET["room_number"];
    $bath_number        = $_GET["bath_number"];
    $status             = 1;
    
    $images             = $_GET["images"];
    $characteristics    = $_GET["characteristics"];
    $advantages         = $_GET["advantages"];

    $images             = json_decode($images);
    $characteristics    = json_decode($characteristics);
    $advantages         = json_decode($advantages);

    $sth = $conn->prepare("INSERT INTO tbl_apartamentos(COD_INMUEBLE, COD_CLIENTE, TIPO_NEGOCIACION, DESCRIPCION, PRECIO, METROS, NUM_HABITACIONES, NUM_BANIOS, ESTATUS) VALUES (:inmueble_id, :cliente_id, :tipo_negociacion, :description, :price, :meters, :room_number, :bath_number, :status);");
    
    $sth->bindParam(':inmueble_id',         $inmueble_id,       PDO::PARAM_INT);
    $sth->bindParam(':cliente_id',          $cliente_id,        PDO::PARAM_INT);
    $sth->bindParam(':tipo_negociacion',    $tipo_negociacion,  PDO::PARAM_INT);
    $sth->bindParam(':description',         $description,       PDO::PARAM_STR);
    $sth->bindParam(':price',               $price,             PDO::PARAM_INT);
    $sth->bindParam(':meters',              $meters,            PDO::PARAM_INT);
    $sth->bindParam(':room_number',         $room_number,       PDO::PARAM_INT);
    $sth->bindParam(':bath_number',         $bath_number,       PDO::PARAM_INT);
    $sth->bindParam(':status',              $status,            PDO::PARAM_INT);

    //$conn->beginTransaction(); 
    $sth->execute();
    $apartment_id = $conn->lastInsertId();
    //$conn->commit(); 
    //echo "  apartamento_id: ".$apartment_id."<br>";
  
    foreach($images as $image)
    {
        $image_name     = $image;
        $image_path     = "https://www.apartrack.com/apartrack_movil/upload/";
        $extension      = "jpg";
        $full_name      = "https://www.apartrack.com/apartrack_movil/upload/".$image_name.".".$extension;
        $image_status   = 1;

        $sth = $conn->prepare("INSERT INTO tbl_imagenes_apartamentos(COD_APARTAMENTO, NOMBRE, RUTA, EXTENSION, N0MBRE_COMPLETO, ESTATUS) VALUES (:apartment_id, :image_name, :image_path, :extension, :full_name, :status);");
        
        $sth->bindParam(':apartment_id',    $apartment_id,  PDO::PARAM_INT);
        $sth->bindParam(':image_name',      $image_name,    PDO::PARAM_STR);
        $sth->bindParam(':image_path',      $image_path,    PDO::PARAM_STR);
        $sth->bindParam(':extension',       $extension,     PDO::PARAM_STR);
        $sth->bindParam(':full_name',       $full_name,     PDO::PARAM_STR);
        $sth->bindParam(':status',          $status,        PDO::PARAM_INT);

        $sth->execute();
        $image_id = $conn->lastInsertId();
        //echo "  image_id: ".$image_id."<br>";
    }
    
    foreach($characteristics as $characteristic)
    {        
        $characteristic_catalogo_id = $characteristic -> id;
        $characteristic_status      = 1;

        $sth = $conn->prepare("INSERT INTO tbl_caracteristicas_apartamento(COD_CATALOGO, COD_APARTAMENTO, ESTATUS) VALUES (:catalogo_id, :apartment_id, :status);");
        
        $sth->bindParam(':catalogo_id',     $characteristic_catalogo_id,    PDO::PARAM_INT);   
        $sth->bindParam(':apartment_id',    $apartment_id,                  PDO::PARAM_INT);
        $sth->bindParam(':status',          $characteristic_status,         PDO::PARAM_INT);

        $sth->execute();
        $characteristic_id = $conn->lastInsertId();
        //echo "  characteristic_id: ".$characteristic_id."<br>";
    }
    
    foreach($advantages as $advantage)
    {
        $advantage_catalogo_id  = $advantage -> id;
        $advantage_status       = 1;

        $sth = $conn->prepare("INSERT INTO tbl_ventajas_apartamento(COD_CATALOGO, COD_APARTAMENTO, ESTATUS) VALUES (:catalogo_id, :apartment_id, :status);");
        
        $sth->bindParam(':catalogo_id',     $advantage_catalogo_id, PDO::PARAM_INT);   
        $sth->bindParam(':apartment_id',    $apartment_id,          PDO::PARAM_INT);
        $sth->bindParam(':status',          $advantage_status,      PDO::PARAM_INT);

        $sth->execute();
        $advantage_id = $conn->lastInsertId();
        //echo "  advantage_id: ".$advantage_id."<br>";
    }
    
    $return[] = array
    (
        'RESULTADO'                 => "0000", 
        'MENSAJE'                   => "INSERTED"
    );

    if(isset($_GET["callback"]))
    {	
        echo $_GET["callback"]."(" . json_encode($return) . ");";	
    }
    else
    {
        echo  json_encode($return);
    }

   