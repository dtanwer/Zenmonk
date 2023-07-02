import React, { useEffect, useState } from 'react'
import './index.css';
import { onSnapshot, collection } from 'firebase/firestore';
import { useSelector,useDispatch } from 'react-redux';
import { db } from '../../config/firebase';
import {setUsers} from '../../features/authSlice';
import FriendCard from '../friendCard';
import ChatBody from '../chatBody';
function FriendList() {
  const [openChat,setOpenChat]=useState(false);

  const dispatch=useDispatch();
  const users = useSelector(state => state.auth.allUsers)  
  const sender = useSelector(state => state.auth.userData)  

  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const unsubscribe = onSnapshot(usersCollectionRef, (QuerySnapshot) => {
      let users = [];
      QuerySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      const filterData=users.filter((item)=>item.id!==sender.id);
      dispatch(setUsers(filterData));
    });
    return () => unsubscribe;
  }, []);
  return (
    <div className='friendList'>
      <h2>Contact</h2>
      {
        users.map(item => <FriendCard setOpenChat={setOpenChat} data={item} key={item.id}/>)
      }
      {
        openChat && <ChatBody setOpenChat={setOpenChat}/>
      }
    </div>
  )
}

export default FriendList