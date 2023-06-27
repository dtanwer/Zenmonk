import React from 'react'
import './index.css';
import SideBar from '../../components/sideBar'
import Chats from '../../components/chats'
import MessageBody from '../../components/messageBody'
import { useDispatch } from 'react-redux';
import { setLogOut } from '../../features/userSlice';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
function Chat() {
  const dispatch = useDispatch();
  const logOut = async () => {
    try {
      await signOut(auth);
      dispatch(setLogOut());

    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
    
      <button onClick={logOut}>LogOut</button>
    <div className='chat'>
      <SideBar />
      <Chats />
      <MessageBody />
    </div>
    </>
  )
}

export default Chat