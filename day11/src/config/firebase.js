// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCDYTpOxKqKVlUyIcoxeGs5Pf3sgxj6IGE",
  authDomain: "mymsg-4004f.firebaseapp.com",
  projectId: "mymsg-4004f",
  storageBucket: "mymsg-4004f.appspot.com",
  messagingSenderId: "881831928368",
  appId: "1:881831928368:web:939f7bde1f7e14ff7803f5",
  measurementId: "G-5MJWMTZHL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =  getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();