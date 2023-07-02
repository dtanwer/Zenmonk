import React from 'react'
import './index.css'
function NotifiCard({data}) {
  return (
    <div className='notifiCard'>
        <div className="imgWithName">
            <img src={data?.userImg} alt="img" />
            <h3>{data?.name}</h3>
        </div>
        {
            data?.msg==='like'?
            <div className="like">
                <p>Like Your Image...</p>
            </div>:
            <div className="comment">
                <p>Comment Your Post...</p> <br />
                <span>{data?.msg}</span>
            </div>
        }
    </div>
  )
}

export default NotifiCard
