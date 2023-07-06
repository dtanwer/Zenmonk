import React, { useState } from 'react';
import './index.css';
import PlaceIcon from '@mui/icons-material/Place';
import { Typography } from 'antd';
import { getDay } from '../../../Uitils/getDay'
const { Title } = Typography;

const DateAndTime = ({ data }) => {
    let date = new Date().toUTCString().slice(5, 16);

    return (
        <div className='DateTime'>
            <Title level={2}>{getDay()}</Title>
            <Title level={3}>{date}</Title>
            <Title level={5}><PlaceIcon className='icon' />{data.name}</Title>
        </div>
    )
}

export default DateAndTime
