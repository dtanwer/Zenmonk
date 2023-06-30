// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQfkDwrtffpQk2pXLxaE6kie9FS7O6zGc",
  authDomain: "socialmedia-30f21.firebaseapp.com",
  projectId: "socialmedia-30f21",
  storageBucket: "socialmedia-30f21.appspot.com",
  messagingSenderId: "741657329916",
  appId: "1:741657329916:web:b8cc34f97c2d5725141779",
  measurementId: "G-RB5Z1SJ2FF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();