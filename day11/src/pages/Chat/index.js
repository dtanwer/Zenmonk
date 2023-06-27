import React from 'react'
import './index.css';
import SideBar from '../../components/sideBar'
import Chats from '../../components/chats'
import MessageBody from '../../components/messageBody'

function Chat() {
 
  return (
    <>
    
      {/* <button onClick={logOut}>LogOut</button> */}
    <div className='chat'>
      <SideBar />
      <Chats />
      <MessageBody />
    </div>
    </>
  )
}

export default Chat