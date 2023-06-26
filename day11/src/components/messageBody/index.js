import { useState } from 'react'
import './index.css'
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Message from '../messages';

function MessageBody({ group }) {
  const [message, setMessage] = useState("");

  const users =
  {
    name: 'deepak',
    active: false,
    message: [
      {
        time: '12:00 AM',
        sender: ['Hii', 'I am Demo Msg'],
        reciverMsg: ['hellow', 'How are You!!']
      },
      {
        time: '1:00 PM',
        sender: ['Hii', 'I am Demo Msg'],
        reciverMsg: ['hellow', 'How are You!!']
      },
      {
        time: '3:00 PM',
        sender: ['Hii', 'I am Demo Msg'],
        reciverMsg: ['hellow', 'How are You!!']
      },
    ]
  }


  const groupDetails = {
    member: 6,
    online: 3,
  }
  const sendMsg = (e) => {
    e.preventDefault();
    setMessage("");
  }
  return (
    <div className='msgBody'>

      <div className="ActiveUser">
        <div className="senderDetails">
          <div className="img">
            <img src="https://media.licdn.com/dms/image/D4D03AQFXxV3eDmX38A/profile-displayphoto-shrink_800_800/0/1686504020188?e=1693440000&v=beta&t=iKPxfzZqfjAIs9J63LmVMiwHjXZ76RKJmhefkpVUbA8" alt="dp" />
          </div>
          <div className="nameDetails">
            <h3>Deepak</h3>
            {
              group === true ? <p>{groupDetails.member} Members, {groupDetails.online} Online </p> : <p>Online</p>
            }

          </div>
        </div>
        <div className="icons">
          <NotificationsActiveRoundedIcon className='icon' />
          <MoreHorizOutlinedIcon className='icon' />
        </div>
      </div>
      <div className="messages">
        {
          users.message.map((item, index) => {
            return (
              <div className='myDiv'>
                <Message data={item.sender} sender={true} time={item.time} />
                <Message data={item.reciverMsg} sender={false} time={item.time} />
              </div>
            )
          })
        }
      </div>
      <div className="inputMsg">
        <div className="attach">
          <AttachFileOutlinedIcon className='icon' />
        </div>
        <div className="EnterMsg">
          <form onSubmit={sendMsg}>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter Message...' required />
          </form>
        </div>
        <div className="otherIcons">
          {
            message.length === 0 ? <MicOutlinedIcon className='icon' /> : <SendRoundedIcon onClick={sendMsg} className='icon' />
          }
          <EmojiEmotionsOutlinedIcon className='icon' />
        </div>
      </div>




    </div>
  )
}

export default MessageBody