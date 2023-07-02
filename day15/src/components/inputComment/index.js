import { useState } from 'react'
import './index.css';
import EmojiPicker from 'emoji-picker-react';
import { serverTimestamp } from 'firebase/firestore';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { useSelector } from 'react-redux';
import { addComment } from '../../utils/addComment';
import { updateNotification } from '../../utils/updateNotification';
function InputComment({mainId,postId}) {
    const [comment, setComment] = useState("");
    const [showEmojis, setShowEmojis] = useState(false);
    const currentUser=useSelector(state=>state.auth.userData);
    const userImg=currentUser.imgUrl;
    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setComment(comment + emoji);
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        const commentData={
            comment,
            name:currentUser.name,
            userImg,
            UserId:currentUser.UserId,
            postId,
            Time:serverTimestamp(),
        }
        if(mainId!==currentUser?.id)
        {
            updateNotification(mainId,{name:currentUser.name,userImg,msg:comment,Time:Date.now()})
        }
        addComment(commentData)
        setComment('');
    }
    return (
        <div className='inputComment'>
            <form onSubmit={handelSubmit}>
                <EmojiEmotionsOutlinedIcon onClick={() => setShowEmojis(!showEmojis)} className='icon' />
                <input type="text" placeholder='Enter Comment...' value={comment} onChange={(e) => setComment(e.target.value)} required />
                <button type="submit" disabled={comment.length===0} >Post</button>
            </form>
            {showEmojis && (
                <div className='emoji'>
                    <EmojiPicker onEmojiClick={addEmoji} />
                </div>
            )}
        </div>
    )
}

export default InputComment
