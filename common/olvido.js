$(function () 
{
    $.material.init();
});
            
function onBackKeyDown(e) 
{
    $(location).attr("href","login.html");
}

function alertDismissed() 
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
    
    $("#buttonContinuar").click(function()
    {
        navigator.notification.alert
        (
            'Se enviaron las instrucciones para regenerar su clave a su email.',  // message
            alertDismissed,         // callback
            'Informacion ',            // title
            'OK'                  // buttonName
        );
        

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


