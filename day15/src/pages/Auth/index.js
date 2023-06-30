import {useState} from 'react'
import './index.css'
import loginImg from '../../img/loginImg.png'
import RegisterImg from '../../img/signUpImg.png'
import Login from '../../components/Login'
import SignUp from '../../components/SignUp'
const  Auth=()=> {
  const [isLogin,setLogin]=useState(true)
  return (
    <div className='auth'>
        <div className="left">
        <img src={ isLogin? loginImg:RegisterImg } alt="login" />
        </div>
        <div className="right">
          {isLogin?<Login  setlogin={setLogin}/>:<SignUp setlogin={setLogin}/>}
        </div>
    </div>
  )
}
export  default  Auth