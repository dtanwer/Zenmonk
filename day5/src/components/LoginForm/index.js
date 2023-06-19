import React, { useEffect, useState } from 'react'
import './index.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Input, Form, Radio, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const navigate = useNavigate();
    const [useType, setUserType] = useState("user")
    const handleChangeType = (e) => {
        setUserType(e.target.value);
        console.log(e.target.value);

    };

    useEffect(() => {
        if (localStorage.getItem('id')) {
            navigate('/home');
        }
    },[])
    console.log(localStorage.getItem('id'));
    const onFinish = (values) => {
        const data = JSON.parse(localStorage.getItem(useType));
        let email = false;
        if (!data) alert("User Doesnot Exist!!");

        for (let i = 0; i < data.length; i++) {
            if (data[i].email === values.email && data[i].password === values.password) {
                localStorage.setItem('id', JSON.stringify(data[i]));
                localStorage.setItem('useType', useType);
                navigate('/home')
                return;
            }
            else if (data[i].email === values.email) {
                email = true;
            }

        }
        if (email) alert("Password Did Not match!!!!");
        if (!email) alert("Invalid Mail!!!");
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handelLogin = () => {
        navigate('/home')
    }
    const handelSingUp = () => {
        navigate('/signup')

    }
    return (
        <div className='loginForm'>
            <div className="back">
                <p> <ArrowBackIosIcon /> <span>Back</span> </p>
            </div>
            <div className="inputform">
                <div className="box">
                    <h1>Account Login</h1>
                    <p>If you are already a member you can login with your email address and password.</p>
                    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                        <div className="inputEmail inpt">
                            <label htmlFor="email">Username</label>
                            <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
                                <Input className='Input' id='email' />
                            </Form.Item>
                        </div>
                        <div className="inputpassword inpt">
                            <label htmlFor="password">Password</label>
                            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                                <Input.Password className='Input' id='password' />
                            </Form.Item>
                        </div>
                        <div className="select">
                            <Form.Item name="userType" rules={[{ required: true, message: 'Please input your Type!' }]}>
                                <Radio.Group value={useType} onChange={handleChangeType}>
                                    <Radio.Button value="user">User</Radio.Button>
                                    <Radio.Button value="vender">Vender</Radio.Button>
                                    <Radio.Button value="admin">Admin</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div className="btn">
                            <Form.Item>
                                <Button htmlType="submit" type="primary" block>Login</Button>
                            </Form.Item>
                        </div>
                        <div className="footerInfo">

                            <p >Dont have an account ? <span onClick={handelSingUp}>Sign up here </span></p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm