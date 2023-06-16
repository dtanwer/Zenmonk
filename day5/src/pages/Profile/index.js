import React from 'react'
import './index.css'
import Navbar from '../../components/NavBar'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { Input, Image, message, Form, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import changeData from '../../utils/changeData';
function Profile() {
  const navigate = useNavigate()
  const handelCross = () => {
    navigate('/home')
  }
  const [form] = Form.useForm();
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const onFinish = (values) => {
    changeData(values);
    navigate('/home');
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onFill = () => {
    let data = JSON.parse(localStorage.getItem('id'));
    form.setFieldsValue({
      name: data.name,
      email: data.email,
    })
  }
  onFill();
  return (
    <>

      <div className='profile'>
        <Navbar />

      </div>
      <div className="info">
        <div className='cross'> <span onClick={handelCross}><CloseIcon className='crossIcon' /></span></div>
        <div className="profileImg">
          <Image
            width={200}
            src="https://media.licdn.com/dms/image/D4D03AQFXxV3eDmX38A/profile-displayphoto-shrink_200_200/0/1686504020188?e=1692230400&v=beta&t=iTiGk06DfI4RZVpuG7FA7jE3G33pucGsSeeS946Wik4"
          /> <br />
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
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
            <div className="phone">
              <label htmlFor="phone">Phone No.</label>
              <Form.Item name="number" rules={[{ required: true, message: 'Please input your Phone Number!' }]}>
                <Input type='number' className='Input' id='phone' />
              </Form.Item>
            </div>
            <div className="btns">
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
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

export default Profile