import React from 'react';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSenderIndex, setCurrentWindowMsg,setReciver, setRoomId} from '../../features/userSlice';
import { getRoomId } from '../../utils/getRoomId';
import { updateRooms } from '../../utils/updateRooms';
import { getTime } from '../../utils/getTime';

function UserCard({ onlineCard,active,reciver,key,i }) {
     const dispatch=useDispatch();
     const index=useSelector((state)=>state.user.currentSenderIndex);
     const sender=useSelector((state)=>state.user.userData);
     const msg=useSelector((state)=>state.user.msg);
    //  console.log(reciver)
    const tempRoomId=getRoomId(reciver?.UserId,sender?.UserId)
    const userMsg=msg.filter((item)=>item.roomId===tempRoomId)
    const UnReadMsg=msg.filter((item)=>item.roomId===tempRoomId && !item?.read && item.Id!==sender.UserId)
    const lastMsg=userMsg.length;
    const data = {
        time: '10:22 PM',
        name: 'Deepak',
        msg: 'I am Fine,What about You ?',
        cnt: 3
    }
    const handelCLick= async ()=>{
        if(onlineCard)
        {
            const currentroomId=getRoomId(reciver?.UserId,sender?.UserId)
            dispatch(setCurrentWindowMsg(reciver));
            dispatch(setCurrentSenderIndex(i));
            dispatch(setReciver(reciver));
            dispatch(setRoomId(currentroomId));
            updateRooms(sender?.id,currentroomId,false);

            // console.log(getRoomId(reciver.UserId,sender.UserId));
        }

        // console.log(reciver.online);
    }
    return (
        <div onClick={handelCLick} className={ i===index? 'userCard currentWindow':'userCard'}>
            <div className="img">
                <img src="https://media.licdn.com/dms/image/D4D03AQFXxV3eDmX38A/profile-displayphoto-shrink_800_800/0/1686504020188?e=1693440000&v=beta&t=iKPxfzZqfjAIs9J63LmVMiwHjXZ76RKJmhefkpVUbA8" alt="dp" />
                {
                    reciver.online===true?(<div className="online"></div>):(<div className="online offline"></div>)
                }
            </div>
            <div className="content">
                <div className="time">
                    {
                        onlineCard==!true? ( <div className='loading'>...</div> ):(<span>
                            {
                                lastMsg===0?"":<span>{getTime(userMsg[lastMsg-1].Time?.seconds)}</span>
                            }
                            </span>)
                    }
                </div>
                <div className={onlineCard===true?'name':'name userOnline'}><span>{reciver?.name}</span></div>
                {
                    onlineCard && <div className="msg">
                        {
                            lastMsg===0?"":<span>{userMsg[lastMsg-1].message.slice(0, 40)}</span>
                        }
                        
                        
                        {
                            UnReadMsg.length===0?"":<div className='msgCount'><span>{UnReadMsg.length}</span></div>
                        }
                            
                        
                    </div>
                }
            </div>
        </div>
    )
}

export default UserCard