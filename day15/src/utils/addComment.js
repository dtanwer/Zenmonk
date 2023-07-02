import { collection,addDoc} from "firebase/firestore";
import {db} from '../config/firebase'

export const addComment = async (data) => {
    const commentCollectionRef = collection(db, "comments");
    try {
     await addDoc(commentCollectionRef,data );
    } catch (error) {
      console.log(error);
    }
  };