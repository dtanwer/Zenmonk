
import {
  AutoComplete,
  Button,
  Form,
  Input,
  Select,
  Modal,
  Pagination 
} from 'antd';
import { v4 as uuid } from 'uuid';
import './index.css'
import { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCV,setCvTemplet } from '../../features/userSlice';
import View1 from '../../components/view1';
import { getTemplets } from '../../utils/getTemplets';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
function InputForm() {
  const phone = useSelector((state) => state.data.CurrentUserNumber);
  const userId = useSelector((state) => state.data.CurrentUserId);
  const CvTempletnumber = useSelector((state) => state.data.CvTempletnumber);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const formRef=useRef(null);
  const navigeate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const [templet,setTemplet]=useState(CvTempletnumber);

  const [item,setItem]=useState({
    cgpa: "*****",
    email: "*******@gmail.com",
    gender: "male",
    graduatingYear: "0000",
    intro: "***********************",
    name: "Demo",
    phone: "***********",
    prefix: "91",
    project1: "********************************",
    project2: "*****************************",
    school: "**********",
    schoolMarks: "100",
    schoolYear: "0000",
    skill: "A  B  C  D ",
    university: "++++",
    website: "*****.com",
    CvTempletnumber:templet,
  });

  const onFinish = (values) => {
    const id = uuid().slice(0, 8);
    dispatch(addCV({ id, userId,CvTempletnumber:templet, cvData: values }));
    formRef.current?.resetFields();
    navigeate('/home');
  };
  const handelOnChange=(e)=>{
    let {name,value}=e.target;
    setItem({...item,[name]:value});
  }

  const handelChangeTemplets=(currentTemp)=>{
    setTemplet(currentTemp)
    console.log(currentTemp)
  }
  const handelSet=()=>{
    dispatch(setCvTemplet(templet));
    handleCancel();
  }

  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="90">+90</Option>
        <Option value="87">+89</Option>
      </Select>
    </Form.Item>
  );
  
 
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <>
      <div className='form'>
        <h1>Enter Your Details</h1>
        <div className="inputform">
          <Form
            {...formItemLayout}
            form={form}
            ref={formRef}
            name="register"
            onFinish={onFinish}
            initialValues={{
              prefix: '91',
            }}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true,
                },
              ]}
            >
              <Input name="name" onChange={handelOnChange} />
            </Form.Item>
            {/* <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: 'Please select gender!',
                },
              ]}
            >
              <Select placeholder="select your gender" >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item> */}
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input name="email" onChange={handelOnChange} />
            </Form.Item>


            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: '100%',
                }}
                name="number" onChange={handelOnChange}
              />
            </Form.Item>

            <Form.Item
              name="school"
              label="Enter School Name"
              rules={[
                {
                  required: true,
                  message: 'Please input your School',
                  whitespace: true,
                },
              ]}
            >
              <Input name="school" onChange={handelOnChange} />
            </Form.Item>
            <Form.Item
              name="schoolYear"
              label="Enter Passing Year"
              rules={[
                {
                  required: true,
                  message: 'Please input your year!',
                  whitespace: true,
                },
              ]}
            >
              <Input  name="schoolYear" onChange={handelOnChange} />
            </Form.Item>
            <Form.Item
              name="schoolMarks"
              label="Enter School Marks"
              rules={[
                {
                  required: true,
                  message: 'Please input your Marks!',
                  whitespace: true,
                },
              ]}
            >
              <Input name="schoolMarks" onChange={handelOnChange} />
            </Form.Item>
            <Form.Item
              name="university"
              label="Enter University"
              rules={[
                {
                  required: true,
                  message: 'Please input your University',
                  whitespace: true,
                },
              ]}
            >
              <Input  name="university" onChange={handelOnChange} />
            </Form.Item>
            <Form.Item
              name="graduatingYear"
              label="Enter Graduating Year"
              rules={[
                {
                  required: true,
                  message: 'Please input your year!',
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="cgpa"
              label="Enter Your CGPA "
              rules={[
                {
                  required: true,
                  message: 'Please input your CGPA !',
                  whitespace: true,
                },
              ]}
            >
              <Input  name="cgpa" onChange={handelOnChange} />
            </Form.Item>


            <Form.Item
              name="intro"
              label="Intro"
              rules={[
                {
                  required: true,
                  message: 'Please input Intro',
                },
              ]}
            >
              <Input.TextArea showCount maxLength={150} name="intro" onChange={handelOnChange} />
            </Form.Item>

            <Form.Item
              name="website"
              label="Website"
              rules={[
                {
                  required: true,
                  message: 'Please input website!',
                },
              ]}
            >
              <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                <Input  name="website" onChange={handelOnChange} />
              </AutoComplete>
            </Form.Item>
            <Form.Item
              name="skill"
              label="Enter Your Skill with space"
              rules={[
                {
                  required: true,
                  message: 'Please input your skills!',
                  whitespace: true,
                },
              ]}
            >
              <Input name="skill" onChange={handelOnChange} />
            </Form.Item>
            <Form.Item
              name="project1"
              label="Enter About Project 1"
              rules={[
                {
                  required: true,
                  message: 'Please input Project',
                },
              ]}
            >
              <Input.TextArea showCount maxLength={200}   name="project1" onChange={handelOnChange} />
            </Form.Item>
            <Form.Item
              name="project2"
              label="Enter About Project 2"
              rules={[
                {
                  required: true,
                  message: 'Please input Project ',
                },
              ]}
            >
              <Input.TextArea showCount maxLength={200}  name="project2" onChange={handelOnChange} />
            </Form.Item>


            <Form.Item   {...tailFormItemLayout}>
              <div className='btns'>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
                <Button type="primary" htmlType="reset">
                  Reset
                </Button>
                <Button onClick={() => navigeate('/home')} type="primary" htmlType="reset">
                  Cancel
                </Button>
                <Button type="primary" onClick={showModal}>
                  Preview
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Modal width={800} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  open={isModalOpen} footer={[]} >
        <div className='page'>
          <h1>Templets</h1>
          <Pagination onChange={handelChangeTemplets} defaultCurrent={templet} total={30} />
          </div>
        {
          getTemplets(templet,item,false)
        }
        <div className='setBtn'> <button  onClick={handelSet} >Set</button></div>
      </Modal>
    </>
  );

}

export default InputForm