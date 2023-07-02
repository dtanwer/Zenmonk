import { collection,addDoc} from "firebase/firestore";
import {db} from '../config/firebase'

export const addMessage = async (data) => {
    const messageCollectionRef = collection(db, "rooms");
    try {
     await addDoc(messageCollectionRef,data );
    } catch (error) {
      console.log(error);
    }
  };