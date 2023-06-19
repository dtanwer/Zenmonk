import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Card from '../card';
import { useState } from 'react';
import {  Badge} from 'antd';
import './index.css'
function TodoList() {
    // const [users, setUsers] = useState([])
    const users = useSelector((state) => state.users.users)
    // setUsers([...data]);

    return (
        <div>
            <div className='DetailsBox'>
                {
                    users.map((task) => {
                        if (task.userTask.length)
                            return (
                                <div className='box'>
                                    <Badge count={task.userTask.length}>
                                        <h1>{task.userName}</h1>
                                        <img src={task.userImg} alt="img" />
                                    </Badge>

                                    <h3>{ }</h3>
                                </div>
                            )
                    })
                }
            </div>
            <div className="heading"><h1>Users Tasks</h1></div>

            <table  className='mytable'>
                <tr>
                    <th>Name</th>
                    <th>Number of Task</th>
                    <th>Tasks and Date</th>
                </tr>
                <tbody>
                    {
                        users.map((task) => {
                            if (task.userTask.length)
                                return (
                                    <Card task={task} />
                                )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}

export default TodoList