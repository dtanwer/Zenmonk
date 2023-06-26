import React from 'react';
import './index.css'

function UserCard({ onlineCard,active }) {
     
    const data = {
        time: '10:22 PM',
        name: 'Deepak',
        msg: 'I am Fine,What about You ?',
        cnt: 3
    }
    console.log(onlineCard)
    return (
        <div className={ active===true? 'userCard currentWindow':'userCard'}>
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