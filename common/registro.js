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

function call_Ajax(USER, PASSWORD, FN) 
{
    $.ajax
    ({
        type: "GET",
        url: "https://www.apartrack.com/apartrack_movil/ws/registro.php",
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
        $(location).attr("href","login.html");
        
    });
    
    $("#buttonGuardar").click(function()
    {
        USER        = $("#user").val();
        PASSWORD    = $("#password").val();
        
        call_Ajax(USER, PASSWORD, function(data) 
        {
            DATA = data;
            if (DATA[0].RESULT === "000")
            {
                navigator.notification.alert
                (
                    'Su registrose completo de manera satisfactoria.',
                    alertDismissed,
                    'Información', 
                    'CONTINUAR'
                );
            }
        }); 
    });
});

$(document).ready(function() 
{
    $("#preloader").delay(600).fadeOut("slow");
	
    $("#buttonRegresar").click(function()
    {
        $(location).attr("href","login.html");
        
    });
    
    $("#buttonGuardar").click(function()
    {
        USER        = $("#user").val();
        PASSWORD    = $("#password").val();
        
        call_Ajax(USER, PASSWORD, function(data) 
        {
            DATA = data;
            if (DATA[0].RESULT === "000")
            {
                alert('Su registrose completo de manera satisfactoria.');
            }
        }); 
    });

});

