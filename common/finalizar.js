var IMAGES_STR  = null;
var IMAGES_JSON = null;
var ADVANTAGES_STR  = null;
var ADVANTAGES_JSON = null;
var CHARACTERISTICS_STR  = null;
var CHARACTERISTICS_JSON = null;
    
    
    
$(function () 
{
    $.material.init();
});

function onBackKeyDown(e) 
{
    $(location).attr("href","camera.html");
}

document.addEventListener("deviceready", function()
{
    document.addEventListener("backbutton", onBackKeyDown, false);

    $("#buttonRegresar").click(function()
    {
        $(location).attr("href","camera.html");
    }); 
    
    $("#preloader").delay(600).fadeOut("slow");

});


$(document).ready(function() 
{   
    $("#nombre_inmueble").text(localStorage.getItem("inmueble"));
    $("#description").val(localStorage.getItem("descripcion"));
    $("#room-number").val(localStorage.getItem("numero_habitaciones"));
    $("#bath-number").val(localStorage.getItem("numero_banios"));
    $("#price").val(localStorage.getItem("precio"));
    
    IMAGES_STR  = localStorage.getItem("images");
    IMAGES_JSON = JSON.parse(IMAGES_STR);
    
    alert(IMAGES_STR);
    
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
        alert();
        //$(location).attr("href","camera.html");
        
    });
    
    $("#buttonRegresar").click(function()
    {
        $(location).attr("href","camera.html");
    });
    
    $("#preloader").delay(600).fadeOut("slow");
});


/*
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
                    
var CURRENT                 = null;


function onBackKeyDown(e) 
{
    $(location).attr("href","bienvenida.html");
}

function call_Ajax(FN) 
{
    $.ajax
    ({
        type: "GET",
        url: WS_URL + "lista_inmuebles.php",
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

$(function() {    
    $('#input-search').on('keyup', function() {
        var rex = new RegExp($(this).val(), 'i');
        $('.searchable-container .items').hide();
        $('.searchable-container .items').filter(function() {
            return rex.test($(this).text());
        }).show();
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
                            
            item = $('<div>', 
            {
                'class':'items col-xs-12 col-sm-6 col-md-6 col-lg-4 clearfix'
            }); 

            link = $('<a/>', 
            {
                'class':'LINK'
            }); 
            //link.attr( 'href', 'informacionApartamento.html?id=' + LINK );
            link.attr( 'href', '#');
            link.attr( 'id', LINK );

            info_block = $('<div>', 
            {
                'class':'info-block block-info clearfix'
            });

            square_box = $('<div>', 
            {
                'class':'square-box pull-left'
            });

            image = $( '<img />',{
                'style':'margin-left: 0px; padding-top: 5px'
            });
            //image.attr( 'src', 'http://placehold.it/100x100/009688/FFFFFF?text=BRAND' );
            image.attr( 'src', IMAGEN + "/inmueble_list_img.jpg" );
            image.attr( 'onerror', "this.src='http://placehold.it/100x100/009688/FFFFFF?text=NOT FOUND'" );
            image.width(100); 
            image.height(105);


            building = $('<h4></h4>', 
            {
                'text':NOMBRE
            });

            owner = $('<h6></h6>', 
            {
                'text':''
            });

            phone = $('<h6></h6>', 
            {
                'text':''
            });

            stars_container = $('<h6></h6>', 
            {
                'style':'margin-bottom: 0; padding-bottom: 0;'
            });

            stars = $('<i></i>', 
            {
                'class':'fa fa-star',
                'aria-hidden':'true',
                'style':'color: #F78E00;'
            });

            $(".searchable-container").append(

            item.append(
                link.append(
                        info_block.append(
                            square_box.append(
                                image
                            ),building, owner, phone, stars_container
                        )
                    )
                )
            );

            $("#preloader").delay(600).fadeOut("slow");
            
        });
        
        $(".btn-next").css("display", "none");
        
        
        $(".LINK").click(function() 
        {
            id = $(this).attr("id");
            $('.wizard-card').bootstrapWizard('show',1);
        });
        
        if($('.wizard-card').bootstrapWizard('currentIndex') === "1")
        {
            alert();
            localStorage.setItem("descripcion",$("#descripcion").val());
            localStorage.setItem("precio",$("#precio").val());
            localStorage.setItem("numero_habitaciones",$("#num_habitaciones").val());
            localStorage.setItem("numero_banios",$("#num_banios").val());
        };
    });
 
    $("#buttonRegresar").click(function()
    {
        $(location).attr("href","bienvenida.html");
    }); 
});


*/