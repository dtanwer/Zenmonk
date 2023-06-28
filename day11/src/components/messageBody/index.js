import { useEffect, useState } from 'react'
import './index.css'
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Message from '../messages';
import { useDispatch, useSelector } from 'react-redux';
import EmojiPicker from 'emoji-picker-react';
import { getRoomId } from '../../utils/getRoomId';
import { db } from '../../config/firebase';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { getDate } from '../../utils/getDate';
import { setMsg } from '../../features/userSlice';
import {deleteChats} from '../../utils/deleteChats'
// import myTypingIcon from '../../icons/'
import {
  collection,
  getDocs,
  addDoc, query, orderBy, limit, onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { updateRooms } from '../../utils/updateRooms';
import { updateRead } from '../../utils/updateRead';


function MessageBody({ group }) {
  const [message, setMessage] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const [typing, setTyping] = useState(false);
  const [text, setText] = useState([]);
  const [isChange, setIsChange] = useState(true)
  // const [date, setDates] = useState('T')
  let date='T';
  const roomCollectionRef = collection(db, "room");

  // roomCollectionRef.orderBy("Time").limit(3);

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setMessage(message + emoji);
  };


  const users = useSelector((state) => state.user.currentWindowMsg);
  const sender = useSelector((state) => state.user.userData);
  const reciver = useSelector((state) => state.user.reciver);
  // console.log(sender.UserId, reciver.UserId)
  const roomId = useSelector((state) => state.user.roomId);

  const dispatch=useDispatch();

  const handelOnChange = (e) => {

    setMessage(e.target.value);
    updateRooms(sender.id, roomId, true)
    setTimeout(() => {
      updateRooms(sender.id, roomId, false)
    }, 3000);
    
  }

  // console.log('Room Id :', roomId)

  // console.log(users);
  // const users = useSelector((state) => state.user.currentWindowMsg);
  // {
  //   name: 'deepak',
  //   active: false,
  //   message: [
  //     {
  //       time: '12:00 AM',
  //       sender: ['Hii', 'I am Demo Msg'],
  //       reciverMsg: ['hellow', 'How are You!!']
  //     },
  //     {
  //       time: '1:00 PM',
  //       sender: ['Hii', 'I am Demo Msg'],
  //       reciverMsg: ['hellow', 'How are You!!']
  //     },
  //     {
  //       time: '3:00 PM',
  //       sender: ['Hii', 'I am Demo Msg'],
  //       reciverMsg: ['hellow', 'How are You!!']
  //     },
  //   ]
  // }

  // setTimeout(() => {
  //   setIsChange(!isChange);
  // }, 2000);

  const groupDetails = {
    member: 6,
    online: 3,
  }
  const sendMsg = async (e) => {
    e.preventDefault();
    await addDoc(roomCollectionRef, { roomId, Id: sender.UserId, message, Time: serverTimestamp(),read:false });
    setMessage("");
  }

  useEffect(() => {
    if(roomId!=='1'){
      const unsub = onSnapshot(doc(db, "users", reciver?.id), (doc) => {
        setTyping(doc.data()?.rooms[roomId]);
      });
    }
    



    // const getUsers = async () => {
    //   const q = query(
    //     collection(db, "room"),
    //     orderBy("Time", "asc"),
    //     limit(50)
    //   );

    //   const data = await getDocs(q);
    //   const res = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    //   // console.log(res)
    //   const filterData = res.filter((item) => item.roomId === roomId);
    //   // const soredData=filterData.sort((date1, date2) => date2.Time - date1.Time);
    //   setText([...filterData]);
    // };

    // getUsers();
    // console.log(text);
    const q = query(
      collection(db, "room"),
      orderBy("Time"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      dispatch(setMsg(messages));
      setText(messages.filter(item => item.roomId === roomId));

    });
    return () => unsubscribe;



  }, [roomId])

  const handelClear= async ()=>{
    text?.map((item)=>{
      deleteChats(item?.id);
    })
  }


  return (
    <div className='msgBody'>

      <div className="ActiveUser">
        <div className="senderDetails">
          <div className="img">
            <img src="https://media.licdn.com/dms/image/D4D03AQFXxV3eDmX38A/profile-displayphoto-shrink_800_800/0/1686504020188?e=1693440000&v=beta&t=iKPxfzZqfjAIs9J63LmVMiwHjXZ76RKJmhefkpVUbA8" alt="dp" />
            {
              users.online === true ? (<div className="online"></div>) : (<div className="online offline"></div>)
            }
          </div>
          <div className="nameDetails">
            <h3>{users.name}</h3>
            {
              users.online === true ? <p>  {
                typing===true? ('typing...'):('online')
                } </p> : <p>offline</p>
            }
          </div>
        </div>
        <div className="icons">
          <NotificationsActiveRoundedIcon className='icon' />
          <DeleteOutlineIcon onClick={handelClear} className='icon'/>
        </div>
      </div>
      <div className="messages">
        {
          text?.map((item, index) => {
            let d=getDate(item?.Time?.seconds)
            if(date!=d && index!==0)
            {
              date=d;
            }
            if(item?.id && item.Id!==sender.UserId){

              updateRead(item?.id);
            }
            // console.log(date,index);
            return (
              <div className='myDiv'>
                {
                  date!==d?<p className='myDate' >{d}</p>:" "
                }
                
                {
                  sender?.UserId === item?.Id ? <Message data={item.sender} sender={true} time={item?.Time?.seconds} msg={item?.message} /> :
                    <Message data={item?.reciverMsg} sender={false} time={item?.Time?.seconds} msg={item?.message} />
                }

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
            <input type="text" value={message} onChange={handelOnChange} placeholder='Enter Message...' required />
          </form>
        </div>
        <div className="otherIcons">
          {
            message.length === 0 ? <MicOutlinedIcon className='icon' /> : <SendRoundedIcon onClick={sendMsg} className='icon' />
          }
          <EmojiEmotionsOutlinedIcon className='icon' onClick={() => setShowEmojis(!showEmojis)} />

          {showEmojis && (
            <div className='emoji'>
              <EmojiPicker onEmojiClick={addEmoji} />
            </div>
          )}
        </div>
      </div>




    </div>
  )
}

export default MessageBody