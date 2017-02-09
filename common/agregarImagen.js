$(function () 
{
    $.material.init();
});

/*
function onBackKeyDown(e) 
{
    $(location).attr("href","lista_inmuebles.html");
}
*/
document.addEventListener("deviceready", function()
{
    /*document.addEventListener("backbutton", onBackKeyDown, false);*/
    
    $("#buttonContinuar").click(function(e)
    {

    });

    $("#preloader").delay(60).fadeOut("slow");

    $("#buttonRegresar").click(function()
    {
        
    });  
});
