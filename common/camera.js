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



$("#preloader").delay(60).fadeOut("slow");





