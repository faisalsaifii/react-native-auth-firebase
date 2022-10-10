// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu1z0k_-4okhKLSL9hrNbAkouZUwxj3Gc",
  authDomain: "auth-app-87465.firebaseapp.com",
  projectId: "auth-app-87465",
  storageBucket: "auth-app-87465.appspot.com",
  messagingSenderId: "142768308495",
  appId: "1:142768308495:web:b8567c2aea3a37bb62be7a"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };