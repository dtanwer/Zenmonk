import React, { useState } from 'react'
import './index.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { signOut } from 'firebase/auth';
import { useDispatch,useSelector} from 'react-redux';
import {setLogOut} from '../../features/authSlice'
import {updateOnline} from '../../utils/updateOnline'
import { auth } from '../../config/firebase';
import Notification from '../notification';
import { useNavigate, useNavigation } from 'react-router-dom';
function Navbar() {
    const [notification,setNotification]=useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const sender=useSelector(state=>state.auth.userData);
    const logOut = async () => {
        try {
          await signOut(auth);
          if(sender?.id){
            updateOnline(sender?.id,false);
          }
          dispatch(setLogOut());
    
        } catch (err) {
          console.error(err);
        }
      };


    return (
        <div className='Navbar'>
            <div className="left">
                <div className="logo">
                    <ElectricBoltIcon className='icon' />
                    <span>Sociala.</span>
                </div>
                <div className="items">
                    <div className="search" >
                        <SearchOutlinedIcon className='icon'/>
                        <input type="text" placeholder='Start typing to search..' />
                    </div>
                    <div className="iconDiv active" onClick={()=>navigate('/')}>
                        <CottageOutlinedIcon className='icon' />
                    </div>
                    {/* <div className="iconDiv">
                        <ElectricBoltIcon className='icon' />
                    </div> */}
                    {/* <div className="iconDiv">
                    <VideocamOutlinedIcon className='icon'/>
                    </div> */}
                    <div className="iconDiv" onClick={()=>navigate('/profile')}>
                    <Person2OutlinedIcon className='icon'/>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="iconDiv">
                <NotificationsNoneOutlinedIcon className='icon' onClick={()=>setNotification(true)}/>
                </div>
                <div className="iconDiv">
                <LogoutOutlinedIcon className='icon' onClick={logOut}/>
                </div>
                <div className="" onClick={()=>navigate('/profile')}>
                    <img className='avtar' src={sender.imgUrl} alt="" />
                </div>

               {
                notification &&  <Notification setNotification={setNotification} id={sender.id} />
               }

            </div>
        </div>
    )
}

export default Navbar