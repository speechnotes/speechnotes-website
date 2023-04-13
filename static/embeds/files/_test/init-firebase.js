
let firebaseConfig = {
  apiKey: "AIzaSyDS4OUr6QMADFbbFbXpfYnsDkpk-jHOuO0",
  authDomain: "speechnotes-bba59.firebaseapp.com",
  databaseURL: "https://speechnotes-bba59.firebaseio.com",
  storageBucket: "speechnotes-bba59.appspot.com",
  projectId: "speechnotes-bba59",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let unsubscribeFsListener = function (){};

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('user signed in ', user);
    window.location = "../";
  } else {
    // No user is signed in.
    console.log('user signed out');
    //updateStateWithProps({isSignedIn: false}, null);
  }
});

