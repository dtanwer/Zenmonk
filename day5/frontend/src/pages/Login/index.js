import React from 'react'
import './index.css'
import LeftPart from '../../components/LeftPart'
import LoginForm from '../../components/LoginForm';
import leftImg from '../../SVG/LoginLeftImg.svg'
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigete=useNavigate();
 
  return (
    <div className="login">
      <LeftPart   leftImg={leftImg}/>
      <LoginForm/>
    </div>
  )
}

export default Login