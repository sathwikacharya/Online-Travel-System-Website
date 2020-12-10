import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
   // enter credentials here from the firebase website 
  // Initialize Firebase
});

var db = firebaseApp.firestore();

export { db };
