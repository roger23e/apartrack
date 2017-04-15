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
        url: WS_URL + "login.php",
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
    
    var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
    var userProfile;

    $('#buttonRedes').click(function(e) 
    {
        e.preventDefault();
        lock.show
        (
            {
                dict: 
                {
                    signin:
                    {
                        title: "Ingresa con:"                
                    }
                }
            }, 
            function(err, profile, token) 
            {
                if (err) 
                {
                    console.log("There was an error");
                    alert("There was an error logging in");
                } 
                else 
                {
                  localStorage.setItem('userToken', token);
                 /* userProfile = profile;
                  $('.login-box').hide();
                  $('.logged-in-box').show();
                  $('.nickname').text(profile.nickname);
                  $('.nickname').text(profile.name);
                  $('.avatar').attr('src', profile.picture);*/
                  $(location).attr("href","bienvenida.html");
                }
            }
        );
    });

    /*
    $.ajaxSetup(
    {
        'beforeSend': function(xhr) 
        {
            if (localStorage.getItem('userToken')) 
            {
                xhr.setRequestHeader('Authorization',
                'Bearer ' + localStorage.getItem('userToken'));
            }
        }
    });

    $('.btn-api').click(function(e) 
    {
        $.ajax
        ({
            url: 'http://auth0-nodejsapi-sample.herokuapp.com/secured/ping',
            method: 'GET'
        }).then(function(data, textStatus, jqXHR) 
        {
            alert("The request to the secured enpoint was successfull");
        }, 
        function() 
        {
            alert("You need to download the server seed and start it to call this API");
        });
    });
    */
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
    
    /*
    $("#buttonRedes").click(function()
    {
        $(location).attr("href","redes.html");
    });
    */
    $('#user').keydown(function() 
    {
        $("#error").delay(1000).fadeOut("slow");
    });
    
    $('#password').keydown(function() 
    {
        $("#error").delay(100).fadeOut("slow");
    });
    
    $("#preloader").delay(600).fadeOut("slow"); 
});

$(document).ready(function() 
{
    var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
    //var userProfile;

    $('#buttonRedes').click(function(e) 
    {
        e.preventDefault();
        lock.show
        (
            {
                dict: 
                {
                    signin:
                    {
                        title: "Ingresa con:"                
                    }
                }
            }, 
            function(err, profile, token) 
            {
                if (err) 
                {
                    console.log("There was an error");
                    alert("There was an error logging in");
                } 
                else 
                {
                  localStorage.setItem('userToken', token);
                 /* userProfile = profile;
                  $('.login-box').hide();
                  $('.logged-in-box').show();
                  $('.nickname').text(profile.nickname);
                  $('.nickname').text(profile.name);
                  $('.avatar').attr('src', profile.picture);*/
                  $(location).attr("href","bienvenida.html");
                }
            }
        );
    });

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

    $('#user').keydown(function() 
    {
        $("#error").delay(1000).fadeOut("slow");
    });
    
    $('#password').keydown(function() 
    {
        $("#error").delay(100).fadeOut("slow");
    });
    
    $("#preloader").delay(600).fadeOut("slow"); 
});


