$(function () 
{
    $.material.init();
});

function onBackKeyDown(e) 
{
    
    e.preventDefault();
    navigator.notification.confirm
    (
        "¿Seguro que quieres salir?",
         onConfirm,
        'Confirmación',
        ['SI','NO']
    );
}

function onConfirm(button) 
{
    if(button === 2)
    {
        return;
    }
    else
    {
        navigator.app.exitApp();
    }
}

document.addEventListener("deviceready", function()
{
    document.addEventListener("backbutton", onBackKeyDown, false);
	
    $("#buttonVender").click(function()
    {
        $(location).attr("href","login.html");
    });
    
    $("#buttonBuscar").click(function()
    {
        $(location).attr("href","inmuebles.html");
    });
    
    $("#preloader").delay(600).fadeOut("slow");
});

/*
$(document).ready(function() 
{
    $("#buttonVender").click(function()
    {
        $(location).attr("href","login.html");
    });
    
    $("#buttonBuscar").click(function()
    {
        $(location).attr("href","inmuebles.html");
    });
    
    $("#preloader").delay(600).fadeOut("slow");
});
 */