
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBcIkCqbGwDbLF8oYaCJmWErvhw85I5tAw",
      authDomain: "rekwitter.firebaseapp.com",
      databaseURL: "https://rekwitter-default-rtdb.firebaseio.com",
      projectId: "rekwitter",
      storageBucket: "rekwitter.appspot.com",
      messagingSenderId: "433805092545",
      appId: "1:433805092545:web:b44199bffa04de6a161640"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
