// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlIEyDGMuXoTHL_j7VA3_FDkJj9S23T40",
  authDomain: "r-meals-46633.firebaseapp.com",
  projectId: "r-meals-46633",
  storageBucket: "r-meals-46633.appspot.com",
  messagingSenderId: "1058245361063",
  appId: "1:1058245361063:web:bfadf85bd5ecd47a854a82",
  measurementId: "G-MFSH1FLF6S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
