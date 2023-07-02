import { useState } from 'react'
import './index.css';
import EmojiPicker from 'emoji-picker-react';
import { serverTimestamp } from 'firebase/firestore';
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { useSelector } from 'react-redux';
import { addMessage } from '../../utils/addMessage';
import './index.css'
function InputMsg({roomId}) {
    const [message, setMessage] = useState("");
    const [showEmojis, setShowEmojis] = useState(false);
    const sender=useSelector(state=>state.auth.userData);
    const userImg='https://media.licdn.com/dms/image/D4D03AQFXxV3eDmX38A/profile-displayphoto-shrink_100_100/0/1686504020188?e=1693440000&v=beta&t=ainAEl4GjpVAPF9qqONXwNsGCFQwSdEAqVg1Yj96U_g'
    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setMessage(message + emoji);
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        const messageData={
            message,
            senderId:sender.UserId,
            Time:serverTimestamp(),
            read:false,
            roomId
        }
        addMessage(messageData)
        setShowEmojis(false);
        setMessage('');
    }
    return (
        <div className='inputMessage'>
            <form onSubmit={handelSubmit}>
                <EmojiEmotionsOutlinedIcon onClick={() => setShowEmojis(!showEmojis)} className='icon' />
                <input type="text" placeholder='Enter Comment...' value={message} onChange={(e) => setMessage(e.target.value)} required />
                <button type="submit" disabled={message.length===0} ><SendIcon className='icon'/></button>
            </form>
            {showEmojis && (
                <div className='emoji'>
                    <EmojiPicker onEmojiClick={addEmoji} />
                </div>
            )}
        </div>
    )
}

export default InputMsg
