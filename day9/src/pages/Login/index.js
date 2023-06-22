import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setNumber } from '../../features/userSlice';
import './index.css'
import { useNavigate } from 'react-router-dom';
function Login() {

  const dispatch=useDispatch();
  const navigate=useNavigate();


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
      <input type="Number" onChange={handelChange} />
      <button onClick={handelLogin} >Login</button>
    </div>
  )
}

export default Login