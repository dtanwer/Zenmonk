import { db } from "../config/firebase";

import { updateDoc, doc, onSnapshot } from "firebase/firestore";
export const updateRooms = async (id, roomId, status) => {
    // let oldRooms={}
    // const unsub = onSnapshot(doc(db, "users", id), (doc) => {
    //     oldRooms=doc.data()?.rooms;
    // });
    if (roomId && roomId!=='1') {
        const userDoc = doc(db, "users", id);
        const newFields = { rooms: { [roomId]: status } };
        await updateDoc(userDoc, newFields);
        console.log("updating room dashdahahsdk");
    }
};
