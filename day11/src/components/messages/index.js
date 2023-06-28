import React from 'react';
import './index.css';
import {getTime} from '../../utils/getTime'
import { getDate } from '../../utils/getDate';

function Message({ sender, data, time, msg }) {
    const myTime=getTime(time);
    return (
        <>
            {
                // data?.map((msg,i) => {
                //     return (
                //     )
                // })
                <div className={sender === true ? 'sender myMsg' : 'reciver myMsg'}>
                    <p>{msg}</p>
                </div>
            }
            <div className={sender === true ? 'senderTime time' : 'reciverTime time'}><p>{myTime}</p></div>
        </>
    )
}

export default Message
