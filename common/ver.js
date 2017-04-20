var IMAGES_STR              = null;
var IMAGES_JSON             = null;
var ADVANTAGES_STR          = null;
var ADVANTAGES_JSON         = null;
var CHARACTERISTICS_STR     = null;
var CHARACTERISTICS_JSON    = null;

var NAME                    = null;
var DESCRIPTION             = null;
var ROOM_NUMBER             = null;
var BATH_NUMBER             = null;
var PRICE                   = null;
var IMAGES                  = null;
var CHARACTERISTICS         = null;
var ADVANTAGES              = null;
var INMUEBLE_ID             = null;
var CLIENTE_ID              = null;
        
$(function () 
{
    $.material.init();
});

function alertDismissed() 
{
    $(location).attr("href","bienvenida.html");
}

function call_Ajax(CLIENTE_ID, FN) 
{
    $.ajax
    ({
        type: "GET",
        url: WS_URL + "ver.php",
        data:
        {
            cliente_id:CLIENTE_ID,
        },
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "JasonpCallback",
        async: true,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
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

function onBackKeyDown(e) 
{
    $(location).attr("href","bienvenida.html");
}

document.addEventListener("deviceready", function()
{
    CLIENTE_ID = localStorage.getItem("cliente_id");
    call_Ajax(CLIENTE_ID, function(data) 
    {

        DATA = data;
        console.log(DATA);            
        /*if(DATA[0].RESULTADO ==="0000")
        {
            navigator.notification.alert
            (
                '!PUBLICACION INSERTADA EXITOSAMENTE¡', 
                alertDismissed,
                'INFORMACION',
                'CONTINUAR'
            );
        }*/
    });  
    
    
    
    
    $("#nombre_inmueble").text(localStorage.getItem("inmueble"));
    $("#description").val(localStorage.getItem("descripcion"));
    $("#room-number").val(localStorage.getItem("numero_habitaciones"));
    $("#bath-number").val(localStorage.getItem("numero_banios"));
    $("#price").val(localStorage.getItem("precio"));
    
    IMAGES_STR  = localStorage.getItem("images");
    IMAGES_JSON = JSON.parse(IMAGES_STR);
    
    CHARACTERISTICS_STR  = localStorage.getItem("caracteristicas");
    CHARACTERISTICS_JSON  = JSON.parse(CHARACTERISTICS_STR);
    
    ADVANTAGES_STR  = localStorage.getItem("ventajas");
    ADVANTAGES_JSON  = JSON.parse(ADVANTAGES_STR);

    $.each(IMAGES_JSON, function(index)
    {
        if (index === 0)
        {
            img =   '<img style="max-width:752px; max-height:356px;" src="' + "http://apartrack.com/apartrack_movil/upload/" + IMAGES_JSON[index]+ ".jpg" + '" alt="Awesome Image">';
        $("#image").append(img);
        }
    });

    $.each(CHARACTERISTICS_JSON, function(index)
    {
        $("#characteristics").append('<li class="col-md-12" style="text-align: left;"><i class="material-icons text-success">check</i>'+ CHARACTERISTICS_JSON[index].nombre +'</li>'); 
    });

    $.each(ADVANTAGES_JSON, function(index)
    {
        $("#advantages").append('<li class="col-md-12" style="text-align: left;"><i class="material-icons text-success">check</i>'+ ADVANTAGES_JSON[index].nombre +'</li>'); 
    });


    
    $("#buttonRegresar").click(function()
    {
        $(location).attr("href","bienvenida.html");
    });
    
    $("#preloader").delay(600).fadeOut("slow");

});
/*
$(document).ready(function() 
{   
    $("#nombre_inmueble").text(localStorage.getItem("inmueble"));
    $("#description").val(localStorage.getItem("descripcion"));
    $("#room-number").val(localStorage.getItem("numero_habitaciones"));
    $("#bath-number").val(localStorage.getItem("numero_banios"));
    $("#price").val(localStorage.getItem("precio"));
    
    IMAGES_STR  = localStorage.getItem("images");
    IMAGES_JSON = JSON.parse(IMAGES_STR);
        
    CHARACTERISTICS_STR  = localStorage.getItem("caracteristicas");
    CHARACTERISTICS_JSON  = JSON.parse(CHARACTERISTICS_STR);
    
    ADVANTAGES_STR  = localStorage.getItem("ventajas");
    ADVANTAGES_JSON  = JSON.parse(ADVANTAGES_STR);

    $.each(IMAGES_JSON, function(index)
    {
        if (index === 0)
        {
            img =   '<div class="item active">' +
                    '<img style="width:752px; height:376px;" src="' + "http://apartrack.com/apartrack_movil/upload/" + IMAGES_JSON[index]+ ".jpg" + '" alt="Awesome Image">' +
                '</div>';
        $("#carousel-content").append(img);
        }
        else
        {
            img =   '<div class="item">' +
                    '<img style="width:752px; height:376px;" src="' + "http://apartrack.com/apartrack_movil/upload/" + IMAGES_JSON[index]+ ".jpg" + '" alt="Awesome Image">' +
                    '</div>';
            $("#carousel-content").append(img);           
        }
    });

    $.each(CHARACTERISTICS_JSON, function(index)
    {
        $("#characteristics").append('<li class="col-md-12" style="text-align: left;"><i class="material-icons text-success">check</i>'+ CHARACTERISTICS_JSON[index].nombre +'</li>'); 
    });

    $.each(ADVANTAGES_JSON, function(index)
    {
        $("#advantages").append('<li class="col-md-12" style="text-align: left;"><i class="material-icons text-success">check</i>'+ ADVANTAGES_JSON[index].nombre +'</li>'); 
    });

    $("#buttonPublicar").click(function()
    {
        INMUEBLE_ID             = localStorage.getItem("inmueble_id");
        CLIENTE_ID              = localStorage.getItem("cliente_id");
        NAME                    = $("#nombre_inmueble").text();
        DESCRIPTION             = $("#description").val();
        ROOM_NUMBER             = $("#room-number").val();
        BATH_NUMBER             = $("#bath-number").val();
        PRICE                   = $("#price").val();
        IMAGES                  = IMAGES_STR;
        CHARACTERISTICS         = CHARACTERISTICS_STR;
        ADVANTAGES              = ADVANTAGES_STR;

        call_Ajax(INMUEBLE_ID, CLIENTE_ID, NAME, DESCRIPTION, ROOM_NUMBER, BATH_NUMBER, PRICE, IMAGES, CHARACTERISTICS, ADVANTAGES, function(data) 
        {            
            if(DATA[0].RESULTADO ==="0000")
            {
                alert('!PUBLICACION INSERTADA EXITOSAMENTE¡');
                $(location).attr("href","bienvenida.html");
            }
        });          
    });
    
    $("#buttonRegresar").click(function()
    {
        $(location).attr("href","camera.html");
    });
    
    $("#preloader").delay(600).fadeOut("slow");
});
*/