import { db } from "../config/firebase";
import { doc,deleteDoc } from "firebase/firestore";
export const deleteChats = async (id) => {
    const userDoc = doc(db, "room", id);
    await deleteDoc(userDoc);
  };
