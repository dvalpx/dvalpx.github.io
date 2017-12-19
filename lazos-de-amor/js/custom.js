var keyshotVR;

function initKeyShotVR(folder) {

    var folderName;

    //folder === 'undefined' ? folderName = "configurator_assets/uploads/model_1" : folderName = folder;
 
    if (folder) {
        folderName = folder;
    }
    else {
        folderName = "configurator_assets/uploads/model_1";
    }

    var nameOfDiv = "KeyShotVR";
    //var folderName = "configurator_assets/uploads/model_1";
    var viewPortWidth = 499;
    var viewPortHeight = 439;
    var backgroundColor = "#FFFFFF";
    var uCount = 10;
    var vCount = 1;
    var uWrap = true;
    var vWrap = false;
    var uMouseSensitivity = -0.0277778;
    var vMouseSensitivity = 1;
    var uStartIndex = 5;
    var vStartIndex = 0;
    var minZoom = 1;
    var maxZoom = 1;
    var rotationDamping = 0.96;
    var downScaleToBrowser = true;
    var addDownScaleGUIButton = false;
    var downloadOnInteraction = false;
    var imageExtension = "jpg";
    var showLoading = true;
    var loadingIcon = "ks_logo.png"; // Set to empty string for default icon.
    var allowFullscreen = true; // Double-click in desktop browsers for fullscreen.
    var uReverse = false;
    var vReverse = false;
    var hotspots = {};

    new keyshotVR(nameOfDiv,folderName,viewPortWidth,viewPortHeight,backgroundColor,uCount,vCount,uWrap,vWrap,uMouseSensitivity,vMouseSensitivity,uStartIndex,vStartIndex,minZoom,maxZoom,rotationDamping,downScaleToBrowser,addDownScaleGUIButton,downloadOnInteraction,imageExtension,showLoading,loadingIcon,allowFullscreen,uReverse,vReverse,hotspots);
}

window.onload = initKeyShotVR(false);

$('.select_model li img').click(function()
{
    var folder = "configurator_assets/uploads/model_" + $(this).attr('data-id');

    initKeyShotVR(folder);
});


