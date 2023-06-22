import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import OtpInput from 'react-otp-input';
import './index.css'
// import myOTP from '../../utils/myData'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, setLogin } from '../../features/userSlice';
function OTP() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');
  const number = useSelector((state) => state.data.CurrentUserNumber);
  const users = useSelector((state) => state.data.users);

  useEffect(() => {
    if (number === -1) {
      navigate('/');
    }
  }, [])

  let same = false;
  let currentUser={}

  for (let i = 0; i < users.length; i++) {
    if (users[i].number === number) {
      same = true;
      currentUser=users[i];
      break;
    }
  }

  const handelSubmit = () => {
    if (process.env.REACT_APP_OTP !== otp.toString()) {
      alert("OTP is Wrong!!");
    }
    else {

      if (!same) {
        const id = uuid().slice(0, 8);
        const user = { id, number }
        dispatch(addUser(user));
        dispatch(setLogin(user));
      }
      else{

        dispatch(setLogin(currentUser));
      }


      navigate('/home')
    }


  }
  return (
  <div className='login'>
      <div className='box'>
      <h1>Enter OTP {process.env.REACT_APP_OTP} </h1>
      <OtpInput 
      value={otp}
      onChange={setOtp}
      numInputs={4}
      inputStyle='otpInput'
      renderSeparator={<span> </span>}
      renderInput={(props) => <input  {...props} />}
    />
      <button className='btn' onClick={handelSubmit} >Submit OTP</button>
    </div>
  </div>
  )
}

export default OTP