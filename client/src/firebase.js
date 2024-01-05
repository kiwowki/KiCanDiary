import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBWo1eZGQ65_rr1kNYohnJaUZYZmQ_H9aA",
    authDomain: "kicandiary.firebaseapp.com",
    projectId: "kicandiary",
    storageBucket: "kicandiary.appspot.com",
    messagingSenderId: "400388743300",
    appId: "1:400388743300:web:8fa591435c092032d0a2d1"
};


firebase.initializeApp(firebaseConfig)


export default firebase;