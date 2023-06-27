// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD6XcW697uWHPnNtHjRLtEnuFuvEONRK6A",
  authDomain: "messageapp-87770.firebaseapp.com",
  projectId: "messageapp-87770",
  storageBucket: "messageapp-87770.appspot.com",
  messagingSenderId: "1045584952648",
  appId: "1:1045584952648:web:74fcdd523c9a24126bc77d",
  measurementId: "G-ZNKEH321BV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =  getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();