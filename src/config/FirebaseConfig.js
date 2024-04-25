// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnEeWVaMhcqiwznagDxfsDNX4ggMHi0J8",
  authDomain: "nexa-career.firebaseapp.com",
  projectId: "nexa-career",
  storageBucket: "nexa-career.appspot.com",
  messagingSenderId: "730638386574",
  appId: "1:730638386574:web:5972354375d8a4aa3690df",
  measurementId: "G-QZMCCH1DC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);