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
	
    $("#buttonVer").click(function()
    {
        $(location).attr("href","ver.html");
    });
    
    $("#buttonPublicar").click(function()
    {
        $(location).attr("href","lista_inmuebles.html");
    });
    
    $("#buttonRegresar").click(function()
    {
        $(location).attr("href","login.html");
    });  
});

/*
$(document).ready(function() 
{
    $("#preloader").delay(600).fadeOut("slow");
	
    $("#buttonVer").click(function()
    {
        $(location).attr("href","ver.html");
    });
    
    $("#buttonPublicar").click(function()
    {
        $(location).attr("href","lista_inmuebles.html");
    });
    
    $("#buttonRegresar").click(function()
    {
        $(location).attr("href","login.html");
    });  
});

*/
