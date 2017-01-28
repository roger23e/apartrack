<?php

include ('conexion.php');

$name = $_POST['name'];
$lastname = $_POST['lastname'];
$org =  $_POST['organization'];
$telephone =  $_POST['telephone'];
$email = $_POST['email'];
$medio =  $_POST['medio'];
$comment = $_POST['comment'];

$para  = 'contacto@tucercoelectrico.com.ve' . ', '; 
$para .= 'jlaca@tucercoelectrico.com.ve' . ', '; 
$para .= 'roger23e@gmail.com';

$título = 'Formulario de Contacto';

$mensaje = "Formulario enviado desde tucercoelectrico.com \n\n";
$mensaje .= "Nombre: ".$name."  ".$lastname." \n";
$mensaje .= "Telefono: ".$telephone." \n";
$mensaje .= "Correo: ".$email." \n";
$mensaje .= "Mensaje: ".$comment." \n";

/*
$mensaje = '
<html>
<head>
  <title>Recordatorio de cumpleaños para Agosto</title>
</head>
<body>
  <p>¡Estos son los cumpleaños para Agosto!</p>
  <table>
    <tr>
      <th>Quien</th><th>Día</th><th>Mes</th><th>Año</th>
    </tr>
    <tr>
      <td>Joe</td><td>3</td><td>Agosto</td><td>1970</td>
    </tr>
    <tr>
      <td>Sally</td><td>17</td><td>Agosto</td><td>1973</td>
    </tr>
  </table>
</body>
</html>
';
*/

$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

/*
$cabeceras .= 'To: Mary <mary@example.com>, Kelly <kelly@example.com>' . "\r\n";
$cabeceras .= 'From: Recordatorio <cumples@example.com>' . "\r\n";
$cabeceras .= 'Cc: birthdayarchive@example.com' . "\r\n";
$cabeceras .= 'Bcc: birthdaycheck@example.com' . "\r\n";
*/


if (empty($name)) { 
	echo "Debe ingresar su nombre para poder contactarlo.";
}
else if (empty($lastname)) { 
	echo "Debe ingresar su apellido para poder contactarlo.";
}
else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { 
	echo "Correo Inv&aacute;lido, por favor ingresar un correo correcto.";
}
else if (empty($comment)) { 
	echo "Debe ingresar un mensaje indicando su solicitud.";
}
else if (empty($medio)) { 
	echo "Debe selecionar a través de que medio se enter&oacute; de nosotros.";
}
else {
		

mysql_query("INSERT INTO `contactos`(nombre,apellido,empresa,telefono,correo,medio,mensaje) 
														VALUES ('$name','$lastname','$org','$telephone','$email','$medio','$comment')");


$success = mail($para, $título, $mensaje);
    if ($success) {
        echo "Gracias por contactarnos!!! <br> Los datos han sido enviados correctamente."; 
    }
    else {
        echo "Su mensaje no pudo ser enviado, por favor intente nuevamente."; 
    }
				
			
}