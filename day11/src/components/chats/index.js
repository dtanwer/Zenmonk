import React from 'react'
import './index.css'
import UserCard from '../userCard';
import SearchIcon from '@mui/icons-material/Search';
function Chats() {
  const users=[
    {
      name:'deepak',
      active:false,
      message:[
        {
          time:'12:00 AM',
          sender:['Hii','I am Demo Msg'],
          reciverMsg:['hellow','How are You!!']
        },
        {
          time:'1:00 PM',
          sender:['Hii','I am Demo Msg'],
          reciverMsg:['hellow','How are You!!']
        },
        {
          time:'3:00 PM',
          sender:['Hii','I am Demo Msg'],
          reciverMsg:['hellow','How are You!!']
        },
      ]
    },
    {
      name:'deepak',
      active:false,
      message:[
        {
          time:'12:00 AM',
          sender:['Hhellow','Demo Msg'],
          reciverMsg:['hellow','I am Fine!!']
        },
        
      ]
    },
    {
      name:'deepak',
      active:false,
      message:[
        {
          time:'1:00 AM',
          sender:['Hii','I am Demo Msg'],
          reciverMsg:['hell','How are You!!']
        },
        
      ]
    },
    {
      name:'deepak',
      active:false,
      message:[
        {
          time:'12:00 AM',
          sender:['Hii','I am Demo Msg'],
          reciverMsg:['hellow','How are You!!']
        },
        
      ]
    },
    {
      name:'deepak',
      active:false,
      message:[
        {
          time:'12:00 AM',
          sender:['Hii','I am Demo Msg'],
          reciverMsg:['hellow','How are You!!']
        },
        
      ]
    },
    
  ]
  return (
    <div className='chats'>
      <div className="heading">
        <h1>Messages</h1>
        <p>People,Group,Messages</p>
      </div>
      <div className='onlineUser'>
        <UserCard onlineCard={false}/>
      </div>
      <div className="search">
        <span className='iconWithSearch'>
        <SearchIcon className='SearchIcon'/>
        <input type="text"  placeholder=' Search People, Group, Message'/>
        </span>
      </div>
      <div className="users">
        {
          users.map((item,index)=>{
            return(
              <UserCard  key={index} i={index} onlineCard={true} active={item.active} user={item}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Chats