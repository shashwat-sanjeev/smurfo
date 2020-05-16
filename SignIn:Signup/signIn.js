var firebaseConfig = {
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


firebase.auth().onAuthStateChanged(function(user){
    if(user) {
        //if user signed in


    var user = firebase.auth().currentUser;

    if(user != null){

      var userEmail = user.email;
      window.alert("Welcome " + userEmail + ", You are Logged In");

    }
    } else {
        //if user is not signed in

    }

});



function signIn(){
    var userEmail = document.getElementById('email').value;
    var userPassword = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    
        window.alert("Error : " + errorMessage);
    
        // ...
      });

      
}
