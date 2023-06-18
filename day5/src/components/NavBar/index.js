import React from 'react'
import './index.css'
import { useNavigate,NavLink } from 'react-router-dom';
import { Button} from 'antd';

function Navbar() {
  const useType=localStorage.getItem('useType');
    const navigate=useNavigate();
    const handelProfile=()=>{
        navigate('/profile');
    }
  const LogOut=()=>{
    localStorage.removeItem("id");
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
              useType==='user'?(<NavLink to='/cart' >My Cart</NavLink>):""
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