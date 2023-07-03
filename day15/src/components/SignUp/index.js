import './index.css'
import { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {createUserWithEmailPassword,createUserInDataBase} from '../../utils/createUser'
const SignUp = ({ setlogin }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  // fun to submit form values
  const handelSubmitForm = async (e) => {
    e.preventDefault();

    //if password matches
    if (password === confirmPassword) {
      //creating user Auth with email and password
      const res =await createUserWithEmailPassword(email,password);
      const UserId = Date.now();

      //creating user in database
      createUserInDataBase(res._tokenResponse, UserId,name,false);
      setEmail('');
      setPassword('');
      setName("");
      setlogin(true);
    }
    else {
      alert('Confirm Password did not match!!!');
    }
  }




  return (
    <div className='login'>

      <div className="heading">
        <h1>Create <br />
          your account</h1>
      </div>
      <div className="inputBox">
        <form onSubmit={handelSubmitForm}>
          <div className="name myInput">
            <PersonOutlineIcon className='icon' />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder=' Your Name' required />
          </div>
          <div className="email myInput">
            <MailOutlineIcon className='icon' />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=' Your Email Address' required />
          </div>
          <div className="password myInput">
            <LockOpenIcon className='icon' />
            <input type="password" placeholder=' Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="confPassword myInput">
            <LockOpenIcon className='icon' />
            <input type="password" placeholder=' Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <div className="submitBtn">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
      <div className="link">
        <p>Already have Account ?<span onClick={() => setlogin(true)} > Login</span></p>
      </div>

    </div>
  )
}
export default SignUp
