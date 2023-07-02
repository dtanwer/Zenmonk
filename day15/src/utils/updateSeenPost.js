import { db } from "../config/firebase";
import { updateDoc, doc } from "firebase/firestore";
export const updateSeenPost = async (id) => {
    const postDoc = doc(db, "post", id);
    const newFields = { seen:true};
    await updateDoc(postDoc, newFields);
};