function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
const firebaseConfig = {
    apiKey: "AIzaSyAbjY5CvcUjornX77Tte6i109Op_DZTNLg",
    authDomain: "kwitter-e1155.firebaseapp.com",
    databaseURL: "https://kwitter-e1155-default-rtdb.firebaseio.com",
    projectId: "kwitter-e1155",
    storageBucket: "kwitter-e1155.appspot.com",
    messagingSenderId: "699896992631",
    appId: "1:699896992631:web:549a099e9ab8cbf29d8772"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);