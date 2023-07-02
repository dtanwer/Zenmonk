import React, { useEffect, useState } from 'react'
import './index.css'
import { useSelector } from 'react-redux'
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from '../../config/firebase'
import Chat from '../chat';
function Chats() {
    const roomId = useSelector(state => state.auth.currentRoom)
    const sender = useSelector(state => state.auth.userData)

    const [message, setMessage] = useState([]);

    const roomCollectionRef = collection(db, "room");
    useEffect(() => {

        const q = query(
            collection(db, "rooms"),
            orderBy("Time"),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let messages = [];
            QuerySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });

            console.log(messages);
            setMessage(messages.filter(item => item.roomId === roomId));

        });
        return () => unsubscribe;
    }, [roomId])
    return (
        <div className='chats'>
            {
                message?.map((item) => {

                    return (
                        <div>
                            {
                                sender?.UserId === item?.senderId ? <Chat data={item} sender={true} /> :
                                    <Chat data={item} sender={false} />
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Chats
