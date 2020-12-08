import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB8Ezyr090C6r_l6yJY95haIrEAXoeqVwI",
    authDomain: "travel-b6374.firebaseapp.com",
    databaseURL: "https://travel-b6374.firebaseio.com",
    projectId: "travel-b6374",
    storageBucket: "travel-b6374.appspot.com",
    messagingSenderId: "49745142676",
    appId: "1:49745142676:web:3104985dbf3697c3a82581",
    measurementId: "G-BSP6G7K6WG"
  // Initialize Firebase
});

var db = firebaseApp.firestore();

export { db };