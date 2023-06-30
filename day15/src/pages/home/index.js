import React from 'react'
// import { useSelector } from 'react-redux/es/hooks/useSelector'
import Navbar from '../../components/Navbar'
import './index.css';
import CreatePost from '../../components/CreatePost';
import PostCard from '../../components/postCard';
import FriendList from '../../components/FriendList';
import FriendRequest from '../../components/friendRequest';
function Home() {
    // const user=useSelector(state=>state.auth.userData)
    const data=[1,2,3,4,5];
  return (
    <div className='Home'>
        <Navbar/>

        <div className="container">
          <div className="sidebar">

            <div className="newFeed">
              
            </div> 
            <div className="newFeed">
              
            </div> 

          </div>
          <div className="posts">
            <CreatePost/>
            {
              data.map((item)=><PostCard key={item}/>)
            }
          
          </div>
          <div className="friends">
            <FriendList/>
            <FriendRequest/>
          </div>
        </div>


    </div>
  )
}

export default Home