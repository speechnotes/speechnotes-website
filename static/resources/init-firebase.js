
let firebaseConfig = {
  apiKey: "AIzaSyDS4OUr6QMADFbbFbXpfYnsDkpk-jHOuO0",
  authDomain: "speechnotes.co",
  databaseURL: "https://speechnotes-bba59.firebaseio.com",
  storageBucket: "speechnotes-bba59.appspot.com",
  projectId: "speechnotes-bba59",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  //window.globalMethods.closeModalById("modalSigninVertical");
  if (user) {
    if (window.updatePageStateWithParams!=undefined && updatePageStateWithParams) {
      updatePageStateWithParams({
        loading: false,
        uid: user.uid,
        email: user.email
      });
    }

    if (window.pageState!=undefined && pageState && pageState.epochLicenseExpirationDateInSecs && pageState.epochLicenseExpirationDateInSecs>=3000000000) {
      if (setPremiumLife) {
        setPremiumLife();
      }
    }
  } else {
    if (window.updatePageStateWithParams!=undefined && updatePageStateWithParams) {
      updatePageStateWithParams({
        loading: false,
        uid: user ? user.uid : ""
      });
    }
  }


  if (user) {
    // TODO: resetPayPalButton(9, user.uid);

    // User is signed in.
    console.log('user signed in ', user);
    window.fbUser = user;

    /*var db = firebase.firestore();
    let docRef = db.collection("users").doc(user.uid);
    docRef.onSnapshot((doc) => {
        console.log("Current data: ", doc.data());
        if (window.updatePageStateWithParams!=undefined && updatePageStateWithParams) {
          updatePageStateWithParams({
            epochLicenseExpirationDateInSecs: doc.data() ? (doc.data().hasOwnProperty("epochLicenseExpirationDateInSecs") ? doc.data().epochLicenseExpirationDateInSecs : 0) : 0
          });
        }
      });*/
    let startedMs = Date.now();
    user.getIdToken().then((idToken)=>{
      console.log(idToken);
      let xhr = new XMLHttpRequest();
      xhr.open('GET', "https://firestore.googleapis.com/v1beta1/projects/speechnotes-bba59/databases/(default)/documents/users/" + user.uid, true);
      xhr.setRequestHeader('Authorization', 'Bearer ' + idToken);
      xhr.responseType = 'json';
      xhr.onload  = function() {
        let jsonResponse = xhr.response;
        try {
          let epochLicenseExpirationDateInSecs = jsonResponse.fields.epochLicenseExpirationDateInSecs.doubleValue;
          updatePageStateWithParams({epochLicenseExpirationDateInSecs: epochLicenseExpirationDateInSecs});
          if (epochLicenseExpirationDateInSecs >= Date.now()/1000 && setPremium) {
            setPremium();
          }
        } catch (e) {
          console.log('no license data for this user');
        };
        console.log('firestore took: ', Date.now()-startedMs, ' ms');
        // do something with jsonResponse
      };
      xhr.send();
    });

    /*

    curl "https://firestore.googleapis.com/v1beta1/projects/speechnotes-bba59/databases/(default)/documents/users/tnpqlgFML0NhUGu5AMiGrCpZfU82"  \
  --header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjk2MDVjMzZlOThlMzAxMTdhNjk1MTc1NjkzODY4MzAyMDJiMmQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUm9uZW4gUmFiaW5vdmljaSIsInBpY3R1cmUiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLWJZTFFUdGphQmlRL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FDSGkzcmRZWHVPU0kzOFU0cE1xSEIzQklrT1BIOEdTeUEvbW8vcGhvdG8uanBnIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3NwZWVjaG5vdGVzLWJiYTU5IiwiYXVkIjoic3BlZWNobm90ZXMtYmJhNTkiLCJhdXRoX3RpbWUiOjE2MDM5MzE3MzcsInVzZXJfaWQiOiJ0bnBxbGdGTUwwTmhVR3U1QU1pR3JDcFpmVTgyIiwic3ViIjoidG5wcWxnRk1MME5oVUd1NUFNaUdyQ3BaZlU4MiIsImlhdCI6MTYyNzIxNDE1NiwiZXhwIjoxNjI3MjE3NzU2LCJlbWFpbCI6InJvbmVuQHdlbGxzcmMuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTc5NTY2OTkzMjM0MTEwOTA5MjQiXSwiZW1haWwiOlsicm9uZW5Ad2VsbHNyYy5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.HoPigBPz1OjJ3I2q-32w8Hn7djQr0CWdkutnIY4czXZhw14Ky4yzpYHt6k3lfY-5TE7lnlcDglZffuNjPHpOyow_Hqw2GBnU_SG5g-b4UxyE4ghCKXlEM4CZuzKmY2tao-BxYsuPC_qSc3MIThRmAebMLEqpPXu3NgqK1h1H_rqRbqEFUqdo4-MLbDA-mAifFlF-l8MMsql6r0jura9btCtELMw4jDSU2BjhOgPgwjLcSxWvs5NuCGt-iwlUprEepNA2Hz5DTWuelRMaEfXs8vQtlamT5qSUZSIjtdvNCRc0ziDKnpNQtLsCK1KIyr0FBfb8LUotZT3CR-zhX5oI4g' \
  --header 'Accept: application/json' \
  --compressed

    * */



    // let pathWithoutDomain = window.location.href.split("//")[1].split("/")[1];
    // const urlParams = new URLSearchParams(window.location.search);
    // const langParam = urlParams.get('lng');
  } else {
    // No user is signed in.
    console.log('user signed out');
    if (window.pageState!=undefined && pageState && pageState.email) {
      //toggleSignIn();
    }
    //document.getElementById("iframeWhenSignedIn").style.display = "none";
    //document.querySelector("main").style.display = "block";
  }

});
