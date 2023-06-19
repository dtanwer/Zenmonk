import React from 'react'
import { useRef } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,

} from 'antd';
import { useDispatch, useSelector } from "react-redux";

import { assignTask } from '../../Slice/userSlice';

function MyForm() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users)

  const onFinish = (values) => {
    let same = false;
    const taskdate = `${values.date.$D}-${values.date.$M}-${values.date.$y}`;
    for (let i = 0; i < users[(parseInt(values.user) - 1)].userTask.length; i++) {
      if (values.task === users[(parseInt(values.user) - 1)].userTask[i].task && taskdate === users[(parseInt(values.user) - 1)].userTask[i].date) {
        same = true;
        break;
      }
    }

    if (same) {
      console.log('Same Task');
      alert("User already Assigned Task!!!!");
      return;
    }
    else {
      console.log(values)
      const userTask = {
        id: parseInt(values.user) - 1,
        task: values.task,
        date: taskdate
      }
      dispatch(assignTask(userTask));
      console.log(users);
      formRef.current?.resetFields();
    }


  };
  return (
    <Form className='form'
      style={{
        maxWidth: 700,
      }}
      ref={formRef}
      onFinish={onFinish}
    >

      <Form.Item label="Enter Task" name='task' rules={[
        {
          required: true,
        },
      ]}>
        <Input />
      </Form.Item>
      <Form.Item name='user' label="Select"
        rules={[
          {
            required: true,
          },

        ]}>
        <Select>
          {
            users.map((user) => {
              return (

                <Select.Option key={user.userId} value={user.id}>{user.userName}</Select.Option>
              )
            })
          }
        </Select>
      </Form.Item>
      <Form.Item label="Enter Date" name='date' rules={[
        {
          required: true,
        },
      ]}>
        <DatePicker />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Assign Task</Button>
      </Form.Item>
    </Form>
  )
}

export default MyForm