
var DATA                    = null;
var RUTA_IMAGEN             = "http://apartrack.com/REP/modulos/inmuebles/imagenes/"; 
var RUTA_IMAGEN_APARTAMENTO = "http://apartrack.com/REP/modulos/apartamentos/imagenes/";
var INMUEBLE                ='<li class="media well">'+
                                '<div class="media-left">'+
                                    '<a href="informacionApartamento.html?id=$LINK1">'+
                                        '<img alt="" class="media-object" src="https://placehold.it/64x64" style="width: 64px; height: 64px;">'+                              
                                    '</a>'+
                                '</div>'+
                                '<div class="media-body" style="text-align: left;">'+
                                    '<a href="informacionApartamento.html?id=$LINK2">'+
                                        '<h6 class="media-heading" style="padding-top: 27px; color: #000000;">$NOMBRE</h6>'+
                                   '</a>'+
                                '</div>'+
                            '</li>';

$(function () 
{
    $.material.init();
});

function onBackKeyDown(e) 
{
    $(location).attr("href","bienvenida.html");
}

function call_Ajax(FN) 
{
    $.ajax
    ({
        type: "GET",
        url: "https://www.apartrack.com/apartrack_movil/ws/lista_inmuebles.php",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "JasonpCallback",
        async: true,
        statusCode: 
        {
            404: function()
            {
                console.log("NOT FOUND");
            },
            200: function() 
            {
                console.log("SUCCESS");
            }
        },
        beforeSend: function()
        {
            $("#fountainG").css("display", "block");
        },
        complete: function(){},
        success: function(data)
        {
            FN(data);
        },
        error: function () 
        {
            console.log("ERROR");
        }
    });
}

document.addEventListener("deviceready", function()
{
    document.addEventListener("backbutton", onBackKeyDown, false);
    
    call_Ajax(function (data)
    {
        DATA = data.INMUEBLES;
        $.each(DATA, function (index)
        {      
            IMAGEN              = RUTA_IMAGEN + DATA[index].COD_INMUEBLE;
            NOMBRE              = DATA[index].NOMBRE; if (NOMBRE){NOMBRE.toUpperCase()};
            NUMERO_APARTAMENTOS = DATA[index].NUM_APARTAMENTOS;
            LINK                = DATA[index].COD_INMUEBLE;
            INMUEBLE_LIST       = INMUEBLE;
            INMUEBLE_LIST       = INMUEBLE_LIST.replace('$IMAGEN', IMAGEN);
            INMUEBLE_LIST       = INMUEBLE_LIST.replace('$NOMBRE', NOMBRE);
            INMUEBLE_LIST       = INMUEBLE_LIST.replace('$NUMERO_APARTAMENTOS', NUMERO_APARTAMENTOS);
            INMUEBLE_LIST       = INMUEBLE_LIST.replace('$LINK1', LINK);
            INMUEBLE_LIST       = INMUEBLE_LIST.replace('$LINK2', LINK);
            $('#inmuebles').append(INMUEBLE_LIST); 
            
            $("#preloader").delay(600).fadeOut("slow");
        });
    });
	    
    $("#buttonRegresar").click(function()
    {
        $(location).attr("href","bienvenida.html");
    });  
});

$(document).ready(function() 
{    
    call_Ajax(function (data)
    {
        DATA = data.INMUEBLES;
        $.each(DATA, function (index)
        {      
            IMAGEN              = RUTA_IMAGEN + DATA[index].COD_INMUEBLE;
            NOMBRE              = DATA[index].NOMBRE; if (NOMBRE){NOMBRE.toUpperCase()};
            NUMERO_APARTAMENTOS = DATA[index].NUM_APARTAMENTOS;
            LINK                = DATA[index].COD_INMUEBLE;
            INMUEBLE_LIST       = INMUEBLE;
            INMUEBLE_LIST       = INMUEBLE_LIST.replace('$IMAGEN', IMAGEN);
            INMUEBLE_LIST       = INMUEBLE_LIST.replace('$NOMBRE', NOMBRE);
            INMUEBLE_LIST       = INMUEBLE_LIST.replace('$NUMERO_APARTAMENTOS', NUMERO_APARTAMENTOS);
            INMUEBLE_LIST       = INMUEBLE_LIST.replace('$LINK1', LINK);
            INMUEBLE_LIST       = INMUEBLE_LIST.replace('$LINK2', LINK);
            $('#inmuebles').append(INMUEBLE_LIST); 
            
            $("#preloader").delay(600).fadeOut("slow");
        });
    });
	    
    $("#buttonRegresar").click(function()
    {
        $(location).attr("href","bienvenida.html");
    }); 
        
});


