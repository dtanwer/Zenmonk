import { collection,addDoc} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {db,auth} from '../config/firebase'

export const createUserInDataBase = async (data, UserId, name, online = false) => {
    const usersCollectionRef = collection(db, "users");
    try {
     await addDoc(usersCollectionRef, { email: data.email, UserId, name, online, rooms: { } });
    } catch (error) {
      console.log(error);
    }
  };

export const createUserWithEmailPassword=(email,password)=> createUserWithEmailAndPassword(auth, email, password)