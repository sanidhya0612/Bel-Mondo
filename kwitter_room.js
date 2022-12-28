
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

function addroom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name- "+ room_names);
      row = "<div class='room_name' id="+room_names+"onclick='redirectToroomName(this.id)'>#"+room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToroomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location("kwiter_page.html");
}
