const firebaseConfig = {
    apiKey: "AIzaSyB_6TsckCgz9kRj-0K6Zo9EmkTEziupjn4",
    authDomain: "smurfo-3b51e.firebaseapp.com",
    databaseURL: "https://smurfo-3b51e.firebaseio.com",
    projectId: "smurfo-3b51e",
    storageBucket: "smurfo-3b51e.appspot.com",
    messagingSenderId: "15983497033",
    appId: "1:15983497033:web:14bddbc78b36bbd93dd498",
    measurementId: "G-7WPQH5GB0J"
  };
  firebase.initializeApp(firebaseConfig);


  function signup(){
    var userEmail = document.getElementById('email').value;
    var userPassword = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...


        window.alert("Error: " + errorMessage);
      });
      
  }

  
  