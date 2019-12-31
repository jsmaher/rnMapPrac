import firebase from 'firebase'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyAbZRoXYiFUoTUjy1vZF_Ll3k0VyOFLKXU",
    authDomain: "sign-html.firebaseapp.com",
    databaseURL: "https://sign-html.firebaseio.com",
    projectId: "sign-html",
    storageBucket: "sign-html.appspot.com",
    messagingSenderId: "102319128186",
    appId: "1:102319128186:web:a9d53b64f920a326c2c5c3"
  };

  firebase.initializeApp(firebaseConfig);
 export default firebase