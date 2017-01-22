var DATA        = null;
var USER        = null;
var PASSWORD    = null;


$(function () 
{
    $.material.init();
});
            
function onBackKeyDown(e) 
{
    $(location).attr("href","index.html");
}

function call_Ajax(USER, PASSWORD, FN) 
{
    $.ajax
    ({
        type: "GET",
        url: "https://www.apartrack.com/apartrack_movil/ws/login.php",
        data:
        {
            user:USER,
            password:PASSWORD
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

document.addEventListener("deviceready", function()
{
    document.addEventListener("backbutton", onBackKeyDown, false);
    
    $("#preloader").delay(600).fadeOut("slow");
	
    $("#buttonRegresar").click(function()
    {
        $(location).attr("href","index.html");
    });
    
    $("#buttonIngresar").click(function()
    {
        $("#error").delay(100).fadeOut("slow");
        
        USER        = $("#user").val();
        PASSWORD    = $("#password").val();
        
        call_Ajax(USER, PASSWORD, function(data) 
        {
            DATA = data;
            $("#fountainG").delay(1000).fadeOut("slow", function() 
            {
                if (DATA[0].RESULT === "000")
                {
                    $(location).attr("href","bienvenida.html");
                }
                else
                {
                    $("#error").css("display", "block");
                }
            });
        }); 
    });
    
    $("#buttonRegistrarse").click(function()
    {
        $(location).attr("href","registro.html");
    });
    
    $("#buttonRedes").click(function()
    {
        $(location).attr("href","redes.html");
    });
    
    $('#user').keydown(function() 
    {
        $("#error").delay(1000).fadeOut("slow");
    });
    
    $('#password').keydown(function() 
    {
        $("#error").delay(100).fadeOut("slow");
    });
    
    
});

$(document).ready(function() 
{
    $("#preloader").delay(600).fadeOut("slow");
	
    $("#buttonRegresar").click(function()
    {
        $(location).attr("href","index.html");
    });
    
    $("#buttonIngresar").click(function()
    {
        $("#error").delay(100).fadeOut("slow");
        
        USER        = $("#user").val();
        PASSWORD    = $("#password").val();
        
        call_Ajax(USER, PASSWORD, function(data) 
        {
            DATA = data;
            $("#fountainG").delay(1000).fadeOut("slow", function() 
            {
                if (DATA[0].RESULT === "000")
                {
                    $(location).attr("href","bienvenida.html");
                }
                else
                {
                    $("#error").css("display", "block");
                }
            });
        }); 
    });
    
    $("#buttonRegistrarse").click(function()
    {
        $(location).attr("href","registro.html");
    });
    
    $("#buttonRedes").click(function()
    {
        $(location).attr("href","redes.html");
    });
    
    $('#user').change(function() 
    {
        $("#error").delay(1000).fadeOut("slow");
    });
    
    $('#password').change(function() 
    {
        $("#error").delay(100).fadeOut("slow");
    });
});


