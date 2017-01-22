$(function () 
{
    $.material.init();
});

function onBackKeyDown(e) 
{
    $(location).attr("href","login.html");
}

document.addEventListener("deviceready", function()
{
    document.addEventListener("backbutton", onBackKeyDown, false);
    
    $("#preloader").delay(600).fadeOut("slow");
	
    $("#buttonRegresar").click(function()
    {
        $(location).attr("href","login.html");
        
    });
    
    $("#buttonGuardar").click(function()
    {
        navigator.notification.alert
        (
            'Se registro se completo satisfactoriamente.',  // message
            alertDismissed,         // callback
            'Informacion ',            // title
            'OK'                  // buttonName
        );
    });
    
    $("#buttonRegistrarse").click(function()
    {
        $(location).attr("href","registro.html");
    });
    
    $("#buttonRedes").click(function()
    {
        $(location).attr("href","redes.html");
    });
    
    
});

$(document).ready(function() 
{
    $("#preloader").delay(600).fadeOut("slow");
    
    $("#buttonRegresar").click(function()
    {
        $(location).attr("href","index.html");
    });
});


