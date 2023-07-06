import React, { useEffect, useState } from 'react'
import './index.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Input, Form, Radio, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/auth.service';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../slice/authSlice';
const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const [msg,setMsg]=useState("");
    // const [useType, setUserType] = useState("user")
    // const handleChangeType = (e) => {
    //     setUserType(e.target.value);
    //     console.log(e.target.value);

    // };

    // useEffect(() => {
    //     if (localStorage.getItem('id')) {
    //         navigate('/home');
    //     }
    // }, [])

    // console.log(localStorage.getItem('id'));
    const onFinish = async (values) => {
        // const data = JSON.parse(localStorage.getItem(useType));
        // let email = false;
        // if (!data) alert("User Doesnot Exist!!");

        // for (let i = 0; i < data.length; i++) {
        //     if (data[i].email === values.email && data[i].password === values.password) {
        //         localStorage.setItem('id', JSON.stringify(data[i]));
        //         localStorage.setItem('useType', useType);
        //         navigate('/home')
        //         return;
        //     }
        //     else if (data[i].email === values.email) {
        //         email = true;
        //     }

        // }
        // if (email) alert("Password Did Not match!!!!");
        // if (!email) alert("Invalid Mail!!!");

        try {
            // console.log(data);
            const res = await loginUser(values)
            // console.log(res);
            if (res.status === 200) {
                // dispatch(setLogin({ email: data.email }))
                dispatch(setLogin(res.data));
                navigate('/home');
            }
            if (res.status === 204) {
                setMsg("User Not Found!!")
            }
            // setData({ email: "", password: "" })
            // console.log(res)
        } catch (error) {
            // setData({ ...data, password: "" });
            setMsg("Wrong Password!!!")
            // console.log(error.response)
        }
        console.log(values)
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
                            <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
                                <Input className='Input' id='email' />
                            </Form.Item>
                        </div>
                        <div className="inputpassword inpt">
                            <label htmlFor="password">Password</label>
                            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                                <Input.Password className='Input' id='password' />
                            </Form.Item>
                        </div>
                        <div style={{color:"red"}} ><span>{msg}</span></div>
                        {/* <div className="select">
                            <Form.Item name="userType" rules={[{ required: true, message: 'Please input your Type!' }]}>
                                <Radio.Group value={useType} onChange={handleChangeType}>
                                    <Radio.Button value="user">User</Radio.Button>
                                    <Radio.Button value="vender">Vender</Radio.Button>
                                    <Radio.Button value="admin">Admin</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </div> */}
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