import React from 'react';
import './index.css';
import { useDispatch,useSelector } from 'react-redux';
import { setReciver,setCurrentRoom } from '../../features/authSlice';
import { getRoomId } from '../../utils/getRoomId';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function FriendCard({data,setOpenChat}) {
    const dispatch=useDispatch();
    const sender=useSelector(state=>state.auth.userData);
    const imgUrl=data?.imgUrl;
    const handelOpenChat=()=>{
        const room=getRoomId(data.UserId,sender.UserId);
        dispatch(setReciver(data));
        dispatch(setCurrentRoom(room));
        setOpenChat(true);
    }

  return (
    <div className='friendCard' onClick={handelOpenChat}>
      <div className="userDetails">
        <img src={imgUrl} alt="userImg" />
        <span>{data.name}</span>
      </div>
      <div className="status">
        <FiberManualRecordIcon className={data.online?'icon online':'icon'}/>
      </div>
    </div>
  )
}

export default FriendCard
