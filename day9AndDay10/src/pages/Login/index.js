import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setNumber } from '../../features/userSlice';
import './index.css'
import { useNavigate } from 'react-router-dom';
function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [phone, setPhone] = useState(1);


  const handelChange = (e) => {
    setPhone(e.target.value)
  }
  const handelLogin = () => {
    if (phone.toString().length !== 10) {
      alert('Enter Correct length Of Number');
    }
    else {
      dispatch(setNumber(phone));
      navigate("/otp");
    }
  }
  return (
    <div className='login'>
      <div className='box'>
          <div className="inputContainer">
            <input type="Number" onChange={handelChange} placeholder='Enter Phone Number' />
          </div>
          <button className='btn' onClick={handelLogin} >Get OTP</button>
      </div>
      <div class='ripple-background'>
        <div className='circle xxlarge shade1'></div>
        <div className='circle xlarge shade2'></div>
        <div className='circle large shade3'></div>
        <div className='circle mediun shade4'></div>
        <div className='circle small shade5'></div>
      </div>
    </div>
  )
}

export default Login