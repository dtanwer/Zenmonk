// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmUv044MNy5Yc9C4ZTOIY1w4YLZqtC2aQ",
  authDomain: "userauth-7840b.firebaseapp.com",
  projectId: "userauth-7840b",
  storageBucket: "userauth-7840b.appspot.com",
  messagingSenderId: "854200758410",
  appId: "1:854200758410:web:9328e44743474c43e17d73",
  measurementId: "G-2K3STNLK2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();