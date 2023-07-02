import { db } from "../config/firebase";
import { updateDoc, doc } from "firebase/firestore";
export const updateUserData = async (id, data) => {
    const userDoc = doc(db, "users", id);
    const newFields = { ...data };
    await updateDoc(userDoc, newFields);
};