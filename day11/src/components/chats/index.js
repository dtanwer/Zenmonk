import React from 'react'
import './index.css'
import UserCard from '../userCard';
import SearchIcon from '@mui/icons-material/Search';
function Chats() {
  const users=[
    {
      name:'deepak',
    },
    {
      name:'deepak',
    },
    {
      name:'deepak',
    },
    {
      name:'deepak',
    },
    {
      name:'deepak',
    },
    {
      name:'deepak',
    },
    {
      name:'deepak',
    },
    {
      name:'deepak',
    },
    {
      name:'deepak',
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
              <UserCard  key={index} onlineCard={true}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Chats