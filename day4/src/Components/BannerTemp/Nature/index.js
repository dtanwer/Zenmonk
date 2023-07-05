import React from 'react';
import './index.css';
import sun from '../../../SVG/sun.svg'
import { Image,Typography,Space } from 'antd';
const { Title } = Typography;

function Nature({data}) {
    console.log()
    return (
        <div className='nature'>
            <Image preview={false} src={sun} />
            <Title level={2}> {parseInt(data?.temp)-273}°C</Title>
            <Title level={3}>{data?.weather}</Title>
        </div>
    )
}

export default Nature