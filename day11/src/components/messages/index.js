import React from 'react';
import './index.css';

function Message({ sender,data,time,msg }) {
    // const sender = true;
    // console.log('My Msg is ',msg)
    return (
        <>
            {
                // data?.map((msg,i) => {
                //     return (
                //     )
                // })
                        <div  className={sender === true ? 'sender myMsg' : 'reciver myMsg'}>
                            <p>{msg}</p>
                        </div>
            }
            <div className={sender === true ? 'senderTime time' : 'reciverTime time'}><p>{time}</p></div>
        </>
    )
}

export default Message
