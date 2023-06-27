import React from 'react';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSenderIndex, setCurrentWindowMsg,setReciver, setRoomId} from '../../features/userSlice';
import { getRoomId } from '../../utils/getRoomId';

function UserCard({ onlineCard,active,reciver,key,i }) {
     const dispatch=useDispatch();
     const index=useSelector((state)=>state.user.currentSenderIndex);
     const sender=useSelector((state)=>state.user.userData);
    //  console.log(reciver)
    const data = {
        time: '10:22 PM',
        name: 'Deepak',
        msg: 'I am Fine,What about You ?',
        cnt: 3
    }
    const handelCLick= async ()=>{
        if(onlineCard)
        {
            dispatch(setCurrentWindowMsg(reciver));
            dispatch(setCurrentSenderIndex(i));
            dispatch(setReciver(reciver));
            dispatch(setRoomId(getRoomId(reciver.UserId,sender.UserId)));
            // console.log(getRoomId(reciver.UserId,sender.UserId));
        }
    }
    return (
        <div onClick={handelCLick} className={ i===index? 'userCard currentWindow':'userCard'}>
            <div className="img">
                <img src="https://media.licdn.com/dms/image/D4D03AQFXxV3eDmX38A/profile-displayphoto-shrink_800_800/0/1686504020188?e=1693440000&v=beta&t=iKPxfzZqfjAIs9J63LmVMiwHjXZ76RKJmhefkpVUbA8" alt="dp" />
                <div className="online"></div>
            </div>
            <div className="content">
                <div className="time">
                    {
                        onlineCard==!true? ( <div className='loading'>...</div> ):(<span>{data.time}</span>)
                    }
                </div>
                <div className={onlineCard===true?'name':'name userOnline'}><span>{reciver?.name}</span></div>
                {
                    onlineCard && <div className="msg">
                        <span>{data.msg}</span>
                        <div className='msgCount'>
                            <span>{data.cnt}</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default UserCard