import React from 'react'
import './index.css'
import { getTime } from '../../utils/getTime'
function Chat({data,sender}) {
    const time=getTime(data?.Time?.seconds);
    console.log(data)
  return (
      <>
            {
              
                <div className={sender === true ? 'sender myMsg' : 'reciver myMsg'}>
                    <p>{data?.message}</p>
                </div>
            }
            <div className={sender === true ? 'senderTime time' : 'reciverTime time'}><p>{time}</p></div>
        </>
  )
}

export default Chat
