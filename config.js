import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAvvB0tuHea1D6UGhNpBvKSTdBAsIeHT3M",
    authDomain: "book-santa-b5d8e.firebaseapp.com",
    projectId: "book-santa-b5d8e",
    storageBucket: "book-santa-b5d8e.appspot.com",
    messagingSenderId: "816665679038",
    appId: "1:816665679038:web:24f49cce2337d6ba073aef"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  export default db;

