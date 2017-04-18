    var IMAGE_ARRAY = [];
    var IMAGE_URI   = null;

    $(function () 
    {
        $.material.init();
    });

    function onBackKeyDown(e) 
    {
        $(location).attr("href","ventajasApartamento.html");
        localStorage.removeItem("images");
    }
    
    function onConfirm(button) 
    {
        if(button === 2)
        {
            localStorage.setItem("images",JSON.stringify(IMAGE_ARRAY));
            $(location).attr("href","finalizar.html");
        }
        else
        {
           return;
        }
    }

    function getImagePHOTOLIBRARY() 
    {
        navigator.camera.getPicture(getImageSuccess,function(message) 
        {
            alert('FALLO LA CARGA DE LA IMAGEN ' + message);
        },
        {
            quality: 100,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 752,
            targetHeight: 376,
            saveToPhotoAlbum: true
        });
    }


    function getImageCAMERA() 
    {
        navigator.camera.getPicture(getImageSuccess,function(message) 
        {
            alert('FALLO LA CARGA DE LA IMAGEN ' + message);
        },
        {
            quality: 100,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 572,
            targetHeight: 376,
            saveToPhotoAlbum: true
        });
    }

    function getImageSuccess(imageURI) 
    {
        IMAGE_URI = imageURI;
        var image = document.getElementById('myImageUrl');
        image.src = imageURI;
    }
    
    function saveImage() 
    {
        var name = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 12; i++ )
        {
            name += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = name;
        options.mimeType = "image/jpeg";
        
        var params = new Object();
        
        params.value1 = "test";
        params.value2 = "param";

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        
        ft.upload
        (
            IMAGE_URI, "http://apartrack.com/apartrack_movil/upload.php", function(result)
            {
                console.log(JSON.stringify(result));
                IMAGE_ARRAY.push(name);
                navigator.notification.confirm
                (
                    " La imagen se guardo correctamente ¿Desea agregar otra imagen?",
                     onConfirm,
                    'Confirmación',
                    ['SI','NO']
                );
            }, 
            function(error)
            {
                console.log(JSON.stringify(error));
            }, 
            options
        );
    }

document.addEventListener("deviceready", function()
{
    document.addEventListener("backbutton", onBackKeyDown, false);
    
    $("#preloader").delay(60).fadeOut("slow");
    
    $("#buttonContinuar").click(function(e)
    {
        localStorage.setItem("images",JSON.stringify(IMAGE_ARRAY));
        $(location).attr("href","finalizar.html");
    });  
});

$(document).ready(function() 
{    
    $("#preloader").delay(60).fadeOut("slow");
    
    $("#buttonContinuar").click(function(e)
    {
        localStorage.setItem("images",JSON.stringify(IMAGE_ARRAY));
        $(location).attr("href","finalizar.html");
    }); 
});




/*
function takephotoURL()
{
navigator.camera.getPicture(onURLSuccess, onURLFail,
{ quality : 100,
  destinationType : Camera.DestinationType.FILE_URI,
  sourceType : Camera.PictureSourceType.CAMERA,
  allowEdit : true,
  encodingType: Camera.EncodingType.JPEG,
  targetWidth: 300,
  targetHeight: 300,
  saveToPhotoAlbum: true }
    );
}
function onURLSuccess(imageURI) 
{
    var image = document.getElementById('myImageUrl');
    image.src = imageURI;
    //document.getElementById("text2").innerHTML = imageURI;
}

function onURLFail(message) {
    alert('Failed because: ' + message);
}


//From Library 

function choosePhoto()
{
navigator.camera.getPicture(onlibSuccess, onlibFail,
{ quality : 100,
  destinationType : Camera.DestinationType.FILE_URI,
  sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
  allowEdit : true,
  encodingType: Camera.EncodingType.JPEG,
  targetWidth: 300,
  targetHeight: 300,
  popoverOptions: CameraPopoverOptions,
  saveToPhotoAlbum: true }
    );
}
function onlibSuccess(imageURI) 
{
    var image = document.getElementById('myImageUrl');
    image.src = imageURI;
}

function onlibFail(message) 
{
    alert('Failed because: ' + message);
}




*/