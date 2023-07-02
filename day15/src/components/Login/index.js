import './index.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useState, useEffect } from 'react';
import { signInWithGoogle, signInWithEmailPassword } from '../../utils/signIn';
import { userPresent } from '../../utils/userPresent';
import { createUserInDataBase } from '../../utils/createUser';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin, setUsers } from '../../features/authSlice';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import {updateOnline} from '../../utils/updateOnline'



const Login = ({ setlogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const users = useSelector(state => state.auth.allUsers)


  const handelSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailPassword(email, password)
      const UserId = Date.now();
      const filterUser = userPresent(users, res._tokenResponse.email);
      console.log(res._tokenResponse);
      if (filterUser.length === 0) {
        createUserInDataBase(res._tokenResponse, UserId, res._tokenResponse.firstName, true);
        dispatch(setLogin({ email: res._tokenResponse.email,imgUrl:res._tokenResponse.photoUrl, UserId, name: res._tokenResponse.firstName, online: true,notification:[]}));

      }
      else {
        updateOnline(filterUser[0].id, true);
        dispatch(setLogin({ ...filterUser[0], online: true }));
      }
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('unable to login with mail and Password', err);
    }
  }
  const handelOnClickGoogle = async () => {
    try {
      const res = await signInWithGoogle(users);
      console.log(res);
      const filterUser = userPresent(users, res._tokenResponse.email);
      const UserId = Date.now();
      if (filterUser.length === 0) {
        createUserInDataBase(res._tokenResponse, UserId, res._tokenResponse.firstName, true);
        dispatch(setLogin({ email: res._tokenResponse.email, UserId, name: res._tokenResponse.firstName, online: true }));
      }
      else {
        updateOnline(filterUser[0].id, true);
        dispatch(setLogin({ ...filterUser[0], online: true }));
      }

    } catch (error) {
      console.log("Unable to login with google", error)
    }
  }

  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const unsubscribe = onSnapshot(usersCollectionRef, (QuerySnapshot) => {
      let users = [];
      QuerySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      console.log(users);
      dispatch(setUsers(users));
    });
    return () => unsubscribe;
  }, []);





  return (
    <div className='login'>
      <div className="heading">
        <h1>Login into <br />
          your account</h1>
      </div>
      <div className="inputBox">
        <form onSubmit={handelSubmitForm}>
          <div className="email myInput">
            <MailOutlineIcon className='icon' />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=' Your Email Address' required />
          </div>
          <div className="password myInput">
            <LockOpenIcon className='icon' />
            <input type="password" placeholder=' Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="submitBtn">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <div className="link">
        <p>Don't have Account ?<span onClick={() => setlogin(false)} > Register</span></p>
        <span className='smallHeading' >Or, Sign in with your Google account</span>
      </div>
      <div className="btns">
        <img src="http://uitheme.net/sociala/images/icon-1.png" alt="" />
        <button onClick={handelOnClickGoogle} >Sign in with Google</button>
      </div>
    </div>
  )
}
export default Login
