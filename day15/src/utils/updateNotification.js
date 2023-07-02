import { db } from "../config/firebase";
import { doc, updateDoc, arrayUnion} from "firebase/firestore";
export const updateNotification = async (id,data) => {
    const postRef = doc(db, "users", id);
    await updateDoc(postRef,{notification:arrayUnion(data)});
}