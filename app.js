var config = {
  apiKey: "AIzaSyB_6TsckCgz9kRj-0K6Zo9EmkTEziupjn4",
    authDomain: "smurfo-3b51e.firebaseapp.com",
    databaseURL: "https://smurfo-3b51e.firebaseio.com",
    projectId: "smurfo-3b51e",
    storageBucket: "smurfo-3b51e.appspot.com",
    messagingSenderId: "15983497033",
    appId: "1:15983497033:web:14bddbc78b36bbd93dd498",
    measurementId: "G-7WPQH5GB0J"
  };
  firebase.initializeApp(config);
  
    var uploader = document.getElementById('uploader');
          var fileButton = document.getElementById('fileButton');

          fileButton.addEventListener('change', function(e) {
              var file = e.target.files[0];

              var storageRef = firebase.storage().ref('sweet_gifs/'+file.name);

              var task = storageRef.put(file);

              task.on('state_changed', 
                  function progress(snapshot) {
                      var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                      uploader.value = percentage;
                  },
                  function error(err) {

                  },
                  function complete() {

                  }
                  
                  );
          });
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('registrationform').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var age = getInputVal('age');
    var location = getInputVal('location')
    var gender = getInputVal('gender');
    var bio = getInputVal('bio');
    var experience = getInputVal('experience')
    
    // Save message
    saveMessage(name, email, age, location, gender, bio, experience);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('registrationform').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, age, location, gender, bio, experience){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      age:age,
      location:location,
      gender:gender,
      bio:bio,
      experience:experience
    });
  }