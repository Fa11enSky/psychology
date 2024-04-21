// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  "firebase/auth";
import "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { apiKey } from "./keys";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey,
  authDomain: "psychologists-91c74.firebaseapp.com",
  databaseURL:
    "https://psychologists-91c74-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-91c74",
  storageBucket: "psychologists-91c74.appspot.com",
  messagingSenderId: "739207982900",
  appId: "1:739207982900:web:81894ef0d97a3848cebf61",
  measurementId: "G-83WG14Y99G",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
 getAnalytics(app);
