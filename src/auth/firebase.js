// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB-e0J-0UNMURA3HrIkeJkfUhTZxNrn6g",
  authDomain: "ecomzy-5f781.firebaseapp.com",
  projectId: "ecomzy-5f781",
  storageBucket: "ecomzy-5f781.appspot.com",
  messagingSenderId: "641070839408",
  appId: "1:641070839408:web:ae5208d751c6419dfda6b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};