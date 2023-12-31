import { useState } from 'react'
import './index.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Input, Form, Button, Radio } from 'antd';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../../services/auth.service';
function SignUpForm() {
  const navigate = useNavigate();
  const [msg,setMsg]=useState("")
  const [useType, setUserType] = useState("user")
  const onRadioChange = (e) => {
    setUserType(e.target.value);
    // console.log(useType);
  };
  const handelSignUp = () => {
    navigate('/home')
  }
  const handelBack = () => {
    navigate('/')
  }

  const onFinish = async (values) => {
    // console.log(values)
    // if(!localStorage.getItem(useType))
    // {
    //   const mydata = [values,];
    //   localStorage.setItem(useType, JSON.stringify(mydata))
    // }
    // else{
    //   let data=JSON.parse(localStorage.getItem(useType));
    //   localStorage.setItem(useType, JSON.stringify([...data,values]));

    // }
    // localStorage.setItem('id', JSON.stringify(values));
    // localStorage.setItem('useType', useType);
    if (values?.password === values?.confirmpassword) {
      try {
        const res = await signUpUser(values);
        if (res.status === 209) {
          setMsg('user Alredy Exist!!');
        }
        else {
          navigate('/');
        }

      } catch (error) {
        console.log("Unable to Register  Right Now!!",error)
      }
    }
    else {
      alert('Confirm password is Wrong')
    }

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='signUpForm'>
      <div className="back" onClick={handelBack}>
        <p> <ArrowBackIosIcon /> <span>Back</span> </p>
      </div>
      <div className="inputform">
        <div className="box">
          <h1>Account Sign Up</h1>
          <p>Become a member and enjoy exclusive promotions.</p>
          <Form onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <div className="inputEmail inpt">
              <label htmlFor="name">Full Name</label>
              <Form.Item name="name" rules={[{ required: true, message: 'Please input your Name!' }]}>
                <Input className='Input' id='name' />
              </Form.Item>
            </div>
            <div className="inputEmail inpt">
              <label htmlFor="username">Username</label>
              <Form.Item name="username" rules={[{ required: true, message: 'Please input your Email!' }]}>
                <Input className='Input' id='username' />
              </Form.Item>
            </div>
            <div className="inputpassword inpt">
              <label htmlFor="password">Password</label>
              <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input.Password className='Input' id='password' />
              </Form.Item>
            </div>
            <div className="inputpassword inpt">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <Form.Item name="confirmpassword" rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input.Password className='Input' id='confirmpassword' visibilityToggle={false} />
              </Form.Item>
            </div>
            <div className="select">
              <Form.Item name="type" rules={[{ required: true, message: 'Please input your Type!' }]}>
                <Radio.Group onChange={onRadioChange} value={useType}>
                  <Radio value="user">User</Radio>
                  <Radio value="vender">Vender</Radio>
                  <Radio value="admin">Admin</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <div style={{color:"red"}} ><span>{msg}</span></div>
            <div className="btn">
              <Form.Item>
                <Button htmlType="submit" type="primary" block>SignUp</Button>
              </Form.Item>
            </div>
            <div className="footerInfo" >

              <p>Already have an account ? <span onClick={handelBack}>Login here </span></p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm