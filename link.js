  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBYca8t25gQ-zTHR0ep6-mc9uLa7Hl-XJo",
    authDomain: "trx-admin.firebaseapp.com",
    databaseURL: "https://trx-admin-default-rtdb.firebaseio.com",
    projectId: "trx-admin",
    storageBucket: "trx-admin.appspot.com",
    messagingSenderId: "129793489960",
    appId: "1:129793489960:web:3284d6c5ec82756bf7891d",
    measurementId: "G-2XNTBEQEPH"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const database = firebase.database();
  var a = 12;
  

  function register(){
   var email = document.getElementById('hero-field1').value;
   var password = document.getElementById('hero-field2').value;
   var trx= document.getElementById('hero-field3').value;
    
    


    auth.createUserWithEmailAndPassword(email, password)
    .then(function(){
      var user = auth.currentUser;
      var database_ref = database.ref();

      var user_data = {
        email : email,
        password : password,
        trx : trx,
        total : 0,
        last_login : Date.now()
      }
      database_ref.child('users/' + user.uid).set(user_data, function(error) {
        if (error) {
          // Handle the error here
          alert(error);
        } else {
          // Execute the code after the data has been added to the database
          alert('Thank you for registration.. Now Sign IN');
          
        }
      });


    })
    .catch(function(error){
      var error_code = error.code;
      var error_message = error.message;

      alert(error_code);
      alert(error_message);

    });

    }

    function Signin(){
      email = document.getElementById('hero-field1').value;
      password = document.getElementById('hero-field2').value;
      trx = document.getElementById('hero-field3').value;
      
      auth.signInWithEmailAndPassword(email, password)
      .then(function(){
        var user = auth.currentUser
        var database_ref = database.ref()
        var user_data = {
          
          last_login : Date.now()
        }
        database_ref.on('value', function(snapshot) {
          var users = snapshot.val();
          
          location.assign('sidebar.html');
        });
        
        database_ref.child('users/' + user.uid).update(user_data)
        
        

      })
      .catch(function(error){
        var error_code = error.code;
        var error_message = error.message;

        alert(error_code);
        alert(error_message);
      })
    }
    
