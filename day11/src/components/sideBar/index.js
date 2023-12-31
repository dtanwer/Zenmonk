import React from 'react'
import './index.css';
import barIcon from '../../icons/msg.png'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { setLogOut } from '../../features/userSlice';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { updateOnline } from '../../utils/updateOnline';

function SideBar() {
  const dispatch = useDispatch();
  const sender=useSelector((state)=>state.user.userData)
  const logOut = async () => {
    try {
      await signOut(auth);
      console.log(sender)
      if(sender.id){
        updateOnline(sender?.id,false);
      }
      dispatch(setLogOut());

    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className='sideBar'>
      <div className="BarIcon">
        <img src={barIcon} alt="icon" />
      </div>
      <div className="links">
        <p><HomeIcon/></p>
        <p><NotificationsActiveIcon/></p>
        <p><PersonIcon/></p>
        <p className='active'><ChatIcon/></p>
      </div>
      <div className="footer">
        <p><SettingsIcon/></p>
        <p><LogoutIcon onClick={logOut}/></p>
      </div>


    </div>
  )
}

export default SideBar