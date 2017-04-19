<?php 
    header('Content-Type: text/html; charset=utf-8');
    include_once './connection.php';
    
    $user       = $_GET['user'];
    $password   = $_GET['password'];

    $sql= "SELECT count(*) as num_users, id FROM tbl_users WHERE user = :user AND password = :password;"; 
	
    $stmt = $conn->prepare($sql); 

    $stmt->bindParam(':user',        $user,     PDO::PARAM_STR);
    $stmt->bindParam(':password',    $password, PDO::PARAM_STR);

    $stmt->execute();
    
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
	
    $num_users  = $result['num_users'];
    $id         = $result['id'];

    if ($num_users == "0") 
    {
        $return[] = array
        (
            'RESULT'    => "001",
            'MENSAJE'   => "USUARIO NO ENCONTRADO",
            'NUM_USERS'	=> $num_users,
            'USER'      => $user,
            'PASSWORD'	=> $password 
        );
    }
    else
    {
        $return[] = array
        (
            'RESULT'    => "000",
            'MENSAJE'   => "USUARIO ENCONTRADO",
            'NUM_USERS'	=> $num_users,
            'ID'	=> $id,
            'USER'      => $user,
            'PASSWORD'	=> $password 
        );
    }
    
    /*
    $retorno = $sth->fetchAll();
    foreach($retorno as $row) 
    {
        $parts[] = array
        (
            'idrequest'     => $row['idrequest'], 
            'seg'           => $row['seg'], 
            'part'          => $row['part'], 
            'description'   => $row['description'], 
            'quantity'      => $row['quantity'], 
            'ord'           => $row['ord'],
            'edit'          => $row['idrequest']."|".$row['part'], 
            'delete'        => $row['idrequest']."|".$row['part']
        );
    }
    */

    if(isset($_GET["callback"]))
    {	
        echo $_GET["callback"]."(" . json_encode($return) . ");";	
    }
    else
    {
        echo  json_encode($return);
    }