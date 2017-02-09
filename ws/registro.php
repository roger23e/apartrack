<?php 
    header('Content-Type: text/html; charset=utf-8');
    include_once './connection.php';
    
    $user       = $_GET['user'];
    $password   = $_GET['password'];
    
    $sql= "INSERT INTO tbl_users(user, password) VALUES (:user, :password);"; 

    $stmt = $conn->prepare($sql); 

    $stmt->bindParam(':user',        $user,     PDO::PARAM_STR);
    $stmt->bindParam(':password',    $password, PDO::PARAM_STR);

    $stmt->execute();

    if ($stmt->execute()) 
    {
        $return[] = array
        (
            'RESULT'    => "000",
            'MENSAJE'   => "USUARIO INSERTADO"
        );
    }
    else
    {
        $return[] = array
        (
            'RESULT'    => "001",
            'MENSAJE'   => "NO SE PUDO INSERTAR EL USUARIO",
        );
    }
    
    if(isset($_GET["callback"]))
    {	
        echo $_GET["callback"]."(" . json_encode($return) . ");";	
    }
    else
    {
        echo  json_encode($return);
    }