import React from 'react';
import './index.css';
import {getTime} from '../../utils/getTime'
function Comment({data}) {
  const time=getTime(data.Time);
  return (
    <div className='commentBox'>
      <div className="Userimg">
        <img src={data.userImg} alt="userImg"/>
      </div>
      <div className="commentWithName">
        <p>
          <span>{data.name} </span>
          {data.comment}
        </p>
        <p>{time}</p>
      </div>
    </div>
  )
}

export default Comment
