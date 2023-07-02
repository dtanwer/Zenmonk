import { db } from "../config/firebase";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

export const updateLike = async (id, userId, islike) => {
    const postRef = doc(db, "posts", id);
    islike?
    await updateDoc(postRef,{like:arrayRemove(userId)})
    :
    await updateDoc(postRef,{like:arrayUnion(userId)});
}