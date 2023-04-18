// TODO: Update extension id here, and version in bg.js:

function onMessageReceivedFromExtension(reply) {
    if (reply) {
        console.log('snx reply = ', reply);
        if (reply.version) {
            if (reply.version == 1) {
                hasExtension = true;
                console.log('sn extension version == 1 ', reply.version);
                setPremium(); // TODO: register life premium if signed in
            } else {
                console.log('sn extension version: ', reply.version);
            }
        } else {
            console.log('sn extension reply does not include version: ', reply);
        }

        if (reply.licenseEpochSecsExpiration) {
            console.log('license: ', reply.licenseEpochSecsExpiration);
            if (reply.licenseEpochSecsExpiration >= Date.now()/1000) {
                setPremium(); // TODO: register life premium if signed in
            }
        } else {
            console.log('no license type from extension');
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
            //injectNextMillenniumAds();
            initAds();
        }
    }, 3000);
}

function clearDelayedAdInject() {
    if (timeoutID!=null && timeoutID!=undefined) {
        window.clearTimeout(timeoutID);
        timeoutID = null;
    }
}

if (isPremium()) {
    setPremium();
} else {
    delayedAdInject();
}

function isPremium() {
    let ans = window.speechnotesPremiumKeyInjectedByPremiumExtension===true
      || pageState.epochLicenseExpirationDateInSecs >= Date.now()/1000
      || Number.parseFloat("" + localStorage.getItem("epochLicenseExpirationDateInSecs")) >= Date.now()/1000;

    return ans;
}

$('.closeAdBtn').on('click',function () {
    invokePremiumDialog2();
});
document.getElementById('closeDialogBtn').addEventListener('click',closeDialog);

function setPremium() {
    window.speechnotesPremiumKeyInjectedByPremiumExtension = true;
    $('.ad').hide();
    $('#app_container').css('bottom',0);
    $('#app_container').css('top','100px');
    $('#app_container').css('right',0);
    $('#app_container').css('left',0);
    clearDelayedAdInject();
    $('#content_pane, .addthis_sharing_toolbox,#donateButton').hide();
    //$('.addthis_sharing_toolbox').hide();
    toggleFullScreen();
    setTimeout(function() {
        document.getElementById("results_box").focus();
    }, 0);
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


function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function invokePremiumDialog() {
    //alert('premium for: ' + firebase.auth().currentUser.uid);
    //invokeDialog('goPremiumDialog');
    notifyMe("Go premium to unlock this feature and others - for a productivity flow boost", "Click here to learn more", function(){window.open('/upgrade/','_blank');});
}

function invokePremiumDialog2() {
    //alert('premium for: ' + firebase.auth().currentUser.uid);
    //invokeDialog('goPremiumDialog2');
    notifyMe("Go premium to unlock this feature and much more", "Learn more", function(){window.open('/upgrade/','_blank');});
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

function initAds() {
    /*
    Inside each container, append this:
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-5030295218223297"
      data-ad-slot="3296641206"
      data-ad-format="link"
      data-full-width-responsive="true"></ins>
        <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>*/

    let elements = document.querySelectorAll("[data-ws-ad]").forEach((el) => {
        let child1 = document.createElement("script");
        child1.setAttribute("async", "");
        child1.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");

        let child2 = document.createElement("ins");
        child2.classList.add("adsbygoogle");
        let parentAttributes = el.getAttributeNames();
        for (const attr of parentAttributes) {
            if (attr.startsWith("data-ad")) {
                child2.setAttribute(attr, el.getAttribute(attr));
            }
        }
        child2.setAttribute("style", el.getAttribute("style"));

        let child3 = document.createElement("script");
        child3.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});"

        el.appendChild(child1);
        el.appendChild(child2);
        el.appendChild(child3);
    });
}
