import { collection,addDoc} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {db,auth} from '../config/firebase'

export const createUserInDataBase = async (data, UserId, Name, online = false) => {
  const imgUrl= data?.photoUrl??"";
  const name= Name??'';

    const usersCollectionRef = collection(db, "users");
    try {
     await addDoc(usersCollectionRef, { email: data?.email,imgUrl, UserId, name, online, rooms: { },notification:[] });
    } catch (error) {
      console.log(error);
    }
  };

export const createUserWithEmailPassword=(email,password)=> createUserWithEmailAndPassword(auth, email, password)