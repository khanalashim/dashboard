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
  const database = firebase.database().ref('users');
  var a = 12;



  

// Listen for changes to the "data" node in your database
database.once("value", function(snapshot) {
  var user = auth.currentUser;
  // Update the innerHTML of your element with the new data
  snapshot.forEach(function(childSnapshot){
    var uid = childSnapshot.key;
    var userData = childSnapshot.val();
    var total = userData.total;
    if (user.uid==uid){
    document.getElementById('total').innerHTML = total + ' TRX';
    }
  });
});
