import { collection,addDoc} from "firebase/firestore";
import {db} from '../config/firebase'

export const createPost= async (data)=>{
    const postsCollectionRef = collection(db, "posts");
    try {
     await addDoc(postsCollectionRef, data);
    } catch (error) {
      console.log(error);
    }
}

