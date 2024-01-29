import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC60E8wvWfAKC7eC9RnfPkQcVTQ6E6qKEI",
    authDomain: "kitchcandydiary.firebaseapp.com",
    projectId: "kitchcandydiary",
    storageBucket: "kitchcandydiary.appspot.com",
    messagingSenderId: "48131765351",
    appId: "1:48131765351:web:0897fc51a7c78c64c2d0c2"
};


firebase.initializeApp(firebaseConfig)


export default firebase;