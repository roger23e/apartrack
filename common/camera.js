$(function () 
{
    $.material.init();
});

function onBackKeyDown(e) 
{
    
    e.preventDefault();
    navigator.notification.confirm
    (
        "¿Seguro que quieres salir?",
         onConfirm,
        'Confirmación',
        ['SI','NO']
    );
}

function onConfirm(button) 
{
    if(button === 2)
    {
        return;
    }
    else
    {
        navigator.app.exitApp();
    }
}

document.addEventListener("deviceready", function()
{
    document.addEventListener("backbutton", onBackKeyDown, false);
	
    $("#buttonVender").click(function()
    {
        $(location).attr("href","login.html");
    });
    
    $("#preloader").delay(600).fadeOut("slow");
});










//Take FILE_URL
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














    var varimageURI = null;

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
            targetWidth: 300,
            targetHeight: 300,
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
            targetWidth: 300,
            targetHeight: 300,
            saveToPhotoAlbum: true
        });
    }

    function getImageSuccess(imageURI) 
    {
        varimageURI = imageURI;
        var image = document.getElementById('myImageUrl');
        image.src = imageURI;
        alert("DONE");
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
            varimageURI, "http://apartrack.com/apartrack_movil/upload.php", function(result)
            {
                console.log(JSON.stringify(result));
                alert(name);
            }, 
            function(error)
            {
                console.log(JSON.stringify(error));
                alert(JSON.stringify(error));
            }, 
            options
        );
    }

$("#preloader").delay(60).fadeOut("slow");





