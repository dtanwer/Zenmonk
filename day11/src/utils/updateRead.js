import { db } from "../config/firebase";
import { updateDoc, doc } from "firebase/firestore";
export const updateRead = async (id) => {
    console.log('sdds',id)
    if (id) {
        console.log(id)
        const userDoc = doc(db, "room", id);
        const newFields = { read: true };
        await updateDoc(userDoc, newFields);
    }
}
