import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAYulnb_HY7cdOLAjqy_0jAkGlbs-nz8QU",
    authDomain: "chatapp-229f0.firebaseapp.com",
    databaseURL: "https://chatapp-229f0.firebaseio.com",
    projectId: "chatapp-229f0",
    storageBucket: "chatapp-229f0.appspot.com",
    messagingSenderId: "461246300264",
    appId: "1:461246300264:web:7426d2fb9128d0cbab3bdd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/*
if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
*/

export default firebase;