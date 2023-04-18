if (window.speechnotesPremiumKeyInjectedByPremiumExtension == true) {
    setPremium();
}

$('.closeAdBtn').on('click',function () {
    invokePremiumDialog2();
});
document.getElementById('closeDialogBtn').addEventListener('click',closeDialog);

function setPremium() {
    $('.ad').hide();
    $('#app_container').css('bottom',0);
    $('#app_container').css('top','50px');
    $('#app_container').css('right',0);
    $('#app_container').css('left',0);

    $('#content_pane, .addthis_sharing_toolbox,#donateButton').hide();
    //$('.addthis_sharing_toolbox').hide();
    toggleFullScreen();
}
var isFullScreen = false;
function toggleFullScreen() {
    if (!window.speechnotesPremiumKeyInjectedByPremiumExtension) {
        invokePremiumDialog2();
        //toastNotification("Go premium to unlock full screen mode.\nUnleash your full potential and support our development by upgrading to premium. Single payment for life.");
        return;
    }

    if (!isFullScreen) {
        app_inner_container.webkitRequestFullscreen();
    } else {
        document.webkitCancelFullScreen();
    }
    isFullScreen = !isFullScreen;
}

document.getElementById("goPremiumBtn").addEventListener('click', function () {
    invokePremiumDialog();
    openInNewTab("https://chrome.google.com/webstore/detail/speechnotes-premium/nncconplehmbkbhkgkodmnkfaflopkji");
    //("Reload this page after installing the premium-key in order to activate your premium features.");
});

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function invokePremiumDialog() {
    //alert('premium for: ' + firebase.auth().currentUser.uid);
    invokeDialog('goPremiumDialog');
}

function invokePremiumDialog2() {
    //alert('premium for: ' + firebase.auth().currentUser.uid);
    invokeDialog('goPremiumDialog2');
}

function invokeDialog(dialogId) {
    document.getElementById('dialogContainer').style.display = 'block';
    document.getElementById(dialogId).style.display = 'block';
    bindKey(27,closeDialog);
}

function notify(msg, action, callback) {
    document.getElementById('notificationMsg').innerText = msg;
    document.getElementById('notificationBtn').innerText = action;
    document.getElementById('notificationBtn').addEventListener('click',function(e) {
        closeDialog();
        callback();
    });
    invokeDialog('notification');
}

function closeDialog() {
    document.getElementById('dialogContainer').style.display = 'none';
    $('.dialog').hide();
    unbindKey(27);
}

function bindKey(keyCode, callback) {
    $(document).on('keyup.boundkey'+keyCode, function(e) {
        if (e.keyCode == keyCode) { // escape key maps to keycode `27`
            // <DO YOUR WORK HERE>
            callback();
        }
    });
}

function unbindKey(keyCode) {
    $(document).unbind('keyup.boundkey'+keyCode)
}