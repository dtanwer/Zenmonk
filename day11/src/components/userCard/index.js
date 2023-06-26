import React from 'react';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSenderIndex, setCurrentWindowMsg } from '../../features/userSlice';

function UserCard({ onlineCard,active,user,key,i }) {
     const dispatch=useDispatch();
     const index=useSelector((state)=>state.user.currentSenderIndex);
    const data = {
        time: '10:22 PM',
        name: 'Deepak',
        msg: 'I am Fine,What about You ?',
        cnt: 3
    }
    const handelCLick=()=>{
        if(onlineCard)
        {
            dispatch(setCurrentWindowMsg(user));
            dispatch(setCurrentSenderIndex(i));
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
                <div className={onlineCard===true?'name':'name userOnline'}><span>{data.name}</span></div>
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