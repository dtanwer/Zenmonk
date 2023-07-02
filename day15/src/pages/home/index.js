import React from 'react'
// import { useSelector } from 'react-redux/es/hooks/useSelector'
import Navbar from '../../components/Navbar'
import './index.css';
import CreatePost from '../../components/CreatePost';
import PostCard from '../../components/postCard';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import FriendList from '../../components/FriendList';
import FriendRequest from '../../components/friendRequest';
import PostList from '../../components/PostList';
function Home() {
  return (
    <div className='Home'>
        <Navbar/>

        <div className="container">
          {/* <div className="sidebar">

            <div className="newFeed">
              
            </div>  

          </div> */}
          <div className="posts">
            <CreatePost/>
           <PostList/>
          </div>
          <div className="friends">
            <FriendList/>
          </div>
        </div>


    </div>
  )
}

export default Home