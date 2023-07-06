import React from 'react'
import './index.css'
import { useNavigate,NavLink } from 'react-router-dom';
import { Button} from 'antd';
import { useDispatch,useSelector} from 'react-redux';
import { setLogOut } from '../../slice/authSlice';

function Navbar() {
  const dispatch=useDispatch()
  const currentUser=useSelector((state)=>state.auth.userData)
  // const useType=localStorage.getItem('useType');
  const useType=currentUser.type;
    const navigate=useNavigate();
    const handelProfile=()=>{
        navigate('/profile');
    }
  const LogOut=()=>{
    dispatch(setLogOut());
    navigate('/');
  }
  return (
    <div className='navBar'>
        <div className="logo">
           <h1> MyLogo</h1>
        </div>
        <div className="links">
             <NavLink to='/Home'>Home</NavLink>
             {
              useType!=='user' && <NavLink to='/add'>New Items</NavLink>
             }
             {
              useType==='user' && useType!=='admin' ?(<NavLink to='/cart' >My Cart</NavLink>):( <NavLink to='/orders' >Orders</NavLink> )
             }
            <Button type="link" onClick={LogOut}>
              LogOut
            </Button>
            <span onClick={handelProfile}><img src="https://media.licdn.com/dms/image/D4D03AQFXxV3eDmX38A/profile-displayphoto-shrink_200_200/0/1686504020188?e=1692230400&v=beta&t=iTiGk06DfI4RZVpuG7FA7jE3G33pucGsSeeS946Wik4" alt="profile" /></span>
        </div>
    </div>
  )
}

export default Navbar