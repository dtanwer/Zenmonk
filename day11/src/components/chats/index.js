import { useState,useEffect } from 'react'
import './index.css'
import UserCard from '../userCard';
import SearchIcon from '@mui/icons-material/Search';
import {db} from '../../config/firebase'
import {
  collection,
  getDocs
} from "firebase/firestore";
import { useSelector } from 'react-redux';

function Chats() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users")
  const sender=useSelector((state)=>state.user.userData)
  // const users=[
  //   {
  //     name:'deepak',
  //     active:false,
  //     message:[
  //       {
  //         time:'12:00 AM',
  //         sender:['Hii','I am Demo Msg'],
  //         reciverMsg:['hellow','How are You!!']
  //       },
  //       {
  //         time:'1:00 PM',
  //         sender:['Hii','I am Demo Msg'],
  //         reciverMsg:['hellow','How are You!!']
  //       },
  //       {
  //         time:'3:00 PM',
  //         sender:['Hii','I am Demo Msg'],
  //         reciverMsg:['hellow','How are You!!']
  //       },
  //     ]
  //   },
  //   {
  //     name:'deepak',
  //     active:false,
  //     message:[
  //       {
  //         time:'12:00 AM',
  //         sender:['Hhellow','Demo Msg'],
  //         reciverMsg:['hellow','I am Fine!!']
  //       },

  //     ]
  //   },
  //   {
  //     name:'deepak',
  //     active:false,
  //     message:[
  //       {
  //         time:'1:00 AM',
  //         sender:['Hii','I am Demo Msg'],
  //         reciverMsg:['hell','How are You!!']
  //       },

  //     ]
  //   },
  //   {
  //     name:'deepak',
  //     active:false,
  //     message:[
  //       {
  //         time:'12:00 AM',
  //         sender:['Hii','I am Demo Msg'],
  //         reciverMsg:['hellow','How are You!!']
  //       },

  //     ]
  //   },
  //   {
  //     name:'deepak',
  //     active:false,
  //     message:[
  //       {
  //         time:'12:00 AM',
  //         sender:['Hii','I am Demo Msg'],
  //         reciverMsg:['hellow','How are You!!']
  //       },

  //     ]
  //   },

  // ]
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  console.log('first',sender)
  return (
    <div className='chats'>
      <div className="heading">
        <h1>Messages</h1>
        <p>People,Group,Messages</p>
      </div>
      <div className='onlineUser'>
        <UserCard onlineCard={false} reciver={sender}/>
      </div>
      <div className="search">
        <span className='iconWithSearch'>
          <SearchIcon className='SearchIcon' />
          <input type="text" placeholder=' Search People, Group, Message' />
        </span>
      </div>
      <div className="users">
        {
          users.map((item, index) => {
            if(item.id!==sender.id)
            return (
              <UserCard key={index} i={index} onlineCard={true} active={item.active} reciver={item} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Chats