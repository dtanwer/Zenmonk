import React from 'react'
import './index.css'
import LeftPart from '../../components/LeftPart'
import LoginForm from '../../components/LoginForm';
import leftImg from '../../SVG/LoginLeftImg.svg'
function Login() {
  return (
    <div className="login">
      <LeftPart   leftImg={leftImg}/>
      <LoginForm/>
    </div>
  )
}

export default Login