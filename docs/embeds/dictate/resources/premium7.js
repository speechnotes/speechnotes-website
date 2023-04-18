// TODO: Update extension id here, and version in bg.js:

function onMessageReceivedFromExtension(reply) {
    if (reply) {
        console.log('snx reply = ', reply);
        if (reply.version) {
            if (reply.version >= 1) {
                hasExtension = true;
                console.log('snx version >=1 ', reply.version);
                setPremium();
            } else {
                console.log('snx version <1 ', reply.version);
            }
        } else {
            console.log('snx reply does not include version: ', reply);
        }
    }
}


if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
    // Published extension:
    chrome.runtime.sendMessage("nncconplehmbkbhkgkodmnkfaflopkji", {message: "version"}, onMessageReceivedFromExtension);
    // Test extension: ('build-test'):
    chrome.runtime.sendMessage("iokhojpbdkmgcihflonglcchgpiejpnd", {message: "version"}, onMessageReceivedFromExtension);
}



function injectNextMillenniumAds() {

    var nmAdsKeyTurnOnForTest = localStorage.getItem('nmAdsKeyTurnOnForTest');
    if (!nmAdsKeyTurnOnForTest) {
        // TODO: remove this after testing:
        return;
    }

    var s = document.createElement('script');
    s.type = "text/javascript";
    s.id = "NextMillenniumJS";
    s.src = 'https://powerad.ai/script.js';
    $("head").append(s);
}

var timeoutID;
function delayedAdInject() {
    //timeoutID = window.setTimeout(window.alert, 10*1000, 'That was really slow! is premium? ' + isPremium());
    timeoutID = setTimeout(function() {
        // alert("Hello " + isPremium());
        if (!isPremium()) {
            // Inject ads:
            injectNextMillenniumAds();
        }
    }, 3000);
}

function clearDelayedAdInject() {
    if (timeoutID!=null && timeoutID!=undefined) {
        window.clearTimeout(timeoutID);
        timeoutID = null;
    }
}

if (window.speechnotesPremiumKeyInjectedByPremiumExtension == true) {
    setPremium();
} else {
    delayedAdInject();
}

function isPremium() {
    return (window.speechnotesPremiumKeyInjectedByPremiumExtension==true);
}

$('.closeAdBtn').on('click',function () {
    invokePremiumDialog2();
});
document.getElementById('closeDialogBtn').addEventListener('click',closeDialog);

function setPremium() {
    window.speechnotesPremiumKeyInjectedByPremiumExtension = true;
    $('.ad').hide();
    $('#app_container').css('bottom',0);
    $('#app_container').css('top','72px');
    $('#app_container').css('right',0);
    $('#app_container').css('left',0);
    clearDelayedAdInject();
    $('#content_pane, .addthis_sharing_toolbox,#donateButton').hide();
    //$('.addthis_sharing_toolbox').hide();
    toggleFullScreen();
}
var isFullScreen = false;
function toggleFullScreen() {
    if (!window.speechnotesPremiumKeyInjectedByPremiumExtension) {
        invokePremiumDialog2();
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
    //invokePremiumDialog2();
    openInNewTab("https://speechnotes.co/x/");
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

function notifyMe(msg, action, callback) {
    document.getElementById('notificationMsg').innerText = msg;
    if (action) {
        document.getElementById('notificationBtn').innerText = action;
        document.getElementById('notificationBtn').addEventListener('click', function (e) {
            closeDialog();
            if (callback) {
                callback();
            }
        });
    }
    invokeDialog('notificationDialog');
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

/*
var quill = new Quill('#editor-container', {
    modules: {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block']
        ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'  // or 'bubble'
});*/

$("#dark_theme_checkbox").on('click',function(){
    if (!window.speechnotesPremiumKeyInjectedByPremiumExtension) {
        invokePremiumDialog2();
        $('#dark_theme_checkbox').prop('checked',false);
        return;
    }
    var isDark = dark_theme_checkbox.checked;
    localStorage.setItem("darkTheme",isDark);
    setColorTheme(isDark);
});

$("#wordCounterBtn").on('click',function(){
    if (!window.speechnotesPremiumKeyInjectedByPremiumExtension) {
        invokePremiumDialog2();
        return;
    }
    invokeWordCounterDialog();
});

function setColorTheme(isDark) {
    var themeCss = {};
    $('#dark_theme_checkbox').prop('checked',isDark);

    if (isDark === 'true' || isDark===true) {
        themeCss = {
            'background-color':'#242729',
            'color': '#fff'
        }
    } else {
        themeCss = {
            'background-color':'#fff',
            'color': '#000'
        }
    }
    $('.color-themed').css(themeCss);
}

function invokeWordCounterDialog() {
    notifyMe('You have a total of ' + countWords($("#results_box").val()) + ' words in your note.');
}

function countWords(str) {

    if (!str) {
        return 0;
    }

    if (str.trim().length==0) {
        return 0;
    }

    var regEx = /([^\u0000-\u007F]|\w)+/g;
    return str.match(regEx).length;
}

//Run in a local-scope for the first time. ie - onload.
{
    var isDark = localStorage.getItem("darkTheme")==='true';
    localStorage.setItem("darkTheme",isDark);
    setColorTheme(isDark);
}