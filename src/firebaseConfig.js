import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDWWv2r7qovtgA4UJr425fodTizwwUBrto",
    authDomain: "fastcomps-339c9.firebaseapp.com",
    databaseURL: "https://fastcomps-339c9.firebaseio.com",
    projectId: "fastcomps-339c9",
    storageBucket: "",
    messagingSenderId: "940700901791",
    appId: "1:940700901791:web:306e2856bb4fd942131daa",
    measurementId: "G-RNNXWS513X"
  };
  // Initialize Firebase
  const firebaseApp = Firebase.initializeApp(config);
  const db = firebaseApp.database()
  export const dbMenuRef = db.ref('menu')
  export const dbOrdersRef = db.ref('orders')
//   Firebase.analytics();