$(function () 
{
    $.material.init();
});

function onBackKeyDown(e) 
{
    $(location).attr("href","lista_inmuebles.html");
}

document.addEventListener("deviceready", function()
{
    document.addEventListener("backbutton", onBackKeyDown, false);
    
    $("#buttonContinuar").click(function(e)
    {
        localStorage.setItem("descripcion",$("#descripcion").val());
        localStorage.setItem("precio",$("#precio").val());
        localStorage.setItem("numero_habitaciones",$("#num_habitaciones").val());
        localStorage.setItem("numero_banios",$("#num_banios").val());
        $(location).attr("href","caracteristicasApartamento.html");
    });

    $("#preloader").delay(60).fadeOut("slow");

    $("#buttonRegresar").click(function()
    {
        $(location).attr("href","lista_inmuebles.html");
    });  
});

$(document).ready(function() 
{    
    $("#buttonContinuar").click(function(e)
    {
        localStorage.setItem("descripcion",$("#descripcion").val());
        localStorage.setItem("precio",$("#precio").val());
        localStorage.setItem("numero_habitaciones",$("#num_habitaciones").val());
        localStorage.setItem("numero_banios",$("#num_banios").val());
        $(location).attr("href","caracteristicasApartamento.html");
    });

    $("#preloader").delay(60).fadeOut("slow");

    $("#buttonRegresar").click(function()
    {
        $(location).attr("href","lista_inmuebles.html");
    });  
});


