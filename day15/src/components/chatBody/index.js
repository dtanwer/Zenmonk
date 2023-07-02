import React from 'react'
import { useSelector } from 'react-redux'
import './index.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CloseIcon from '@mui/icons-material/Close';
import InputMsg from '../InputMsg';
import Chats from '../chats';
function ChatBody({ setOpenChat }) {
    const room = useSelector(state => state.auth.currentRoom)
    const reciver = useSelector(state => state.auth.reciver);
    const imgUrl = reciver?.imgUrl;
    return (
        <div className='chatBody'>
            <div className="header">
                <div className="reciverDetails">
                    <img src={imgUrl} alt="userImg" />
                    <div className='reciverStatus'>
                        <span>{reciver.name}</span>
                        {reciver.online ? <p><FiberManualRecordIcon className='icon online' /> Active </p> : <p><FiberManualRecordIcon className='icon' /> offline </p>}
                    </div>
                </div>
                <div className="close">
                    <CloseIcon className='icon' onClick={() => setOpenChat(false)} />
                </div>
            </div>
            <Chats />
            <div className='msgInput'>
                <InputMsg roomId={room} />
            </div>
        </div>
    )
}

export default ChatBody
