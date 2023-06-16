import React from 'react'
import './index.css';
import '../Login/index.css';
import LeftPart from '../../components/LeftPart';
import SignUpForm from '../../components/SignUpForm';
import leftImg from '../../SVG/SignUpLeftImg.svg'
function SignUp() {
  return (
    <div className='login'>
      <LeftPart  leftImg={leftImg}/>
      <SignUpForm/>
    </div>
  )
}

export default SignUp