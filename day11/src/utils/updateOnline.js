import { db } from "../config/firebase";
import { updateDoc,doc } from "firebase/firestore";
export const updateOnline = async (id,online) => {
    const userDoc = doc(db, "users", id);
    const newFields = {online};
    await updateDoc(userDoc, newFields);
  };
