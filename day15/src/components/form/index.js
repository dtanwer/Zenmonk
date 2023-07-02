import { useEffect, useState } from 'react'
import './index.css'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { Input, Image, Form, Button } from 'antd';
import { updateUserData } from '../../utils/updateUserData';
import { storage } from '../../config/firebase';
import { v4 } from "uuid";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";


function MyForm({ data, setForm }) {
  const [imgSrc, setImgSrc] = useState(null);
  const [imgUrl,setImgUrl]=useState(data?.imgUrl);
  const navigate = useNavigate()
  const handelCross = () => {
    setForm(false);
  }
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values)
    updateUserData(data.id,{...values,imgUrl});
    form.resetFields();
    setForm(false);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  const onFill = () => {
    form.setFieldsValue({
      name: data?.name,
      email: data?.email,
      address: data?.address,
      lastName: data?.lastName,
      bio: data?.bio
    })
  }
  useEffect(()=>{
    onFill();
  },[imgUrl])

  const uploadFile = () => {
    if (imgSrc == null) return;

  const imageRef = ref(storage, `profile/${imgSrc.name + v4()}`);
  uploadBytes(imageRef, imgSrc).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      // console.log(url);
      setImgUrl(url);
      setImgSrc(null);
    })
  });
  }



  return (
    <>

      <div className='profile'>

      </div>
      <div className="info">
        <div className='cross'> <span onClick={handelCross}><CloseIcon className='crossIcon' /></span></div>
        <div className="profileImg">
          <Image
            width={200}
            src={imgUrl}
          /> <br /> <br />
          <input type="file" name="" id="" onChange={(e)=>setImgSrc(e.target.files[0])} />
          <button onClick={uploadFile}>Upload</button>
        </div>
        <div className="form">
          <Form initialValues={{ remember: true }}
            onFinish={onFinish}
            form={form}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <div className="name">
              <div className="firstName">
                <label htmlFor="f_name">First Name</label>
                <Form.Item name="name" rules={[{ required: true, message: 'Please input your First Name!' }]}>
                  <Input className='Input' id='f_name' />
                </Form.Item>
              </div>
              <div className="LastName">
                <label htmlFor="lastName">LastName</label>
                <Form.Item name="lastName" rules={[{ required: true, message: 'Please input your Last Name!' }]}>
                  <Input className='Input' id='lastName' />
                </Form.Item>
              </div>
            </div>
            <div className="inputEmail">
              <label htmlFor="email">Email Address</label>
              <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
                <Input className='Input' id='email' />
              </Form.Item>
            </div>
            <div className="Address">
              <label htmlFor="address">Address</label>
              <Form.Item name="address" rules={[{ required: true, message: 'Please input your Address' }]}>
                <Input className='Input' id='address' />
              </Form.Item>
            </div>
            <div className="Bio">
              <label htmlFor="bio">Bio</label>
              <Form.Item name="bio" rules={[{ required: true, message: 'Please input your Bio' }]}>
                <Input className='Input' id='bio' />
              </Form.Item>
            </div>
            <div className="btn">
              <Form.Item >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default MyForm