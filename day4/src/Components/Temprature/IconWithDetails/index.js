import React from 'react';
import './index.css';
import { Image } from 'antd';
import sunDark from '../../../SVG/darkSun.svg';
import cloudWithSun from '../../../SVG/cloudWithSun.svg';
import ranning from '../../../SVG/ranning.svg';
import { Typography } from 'antd';
import { getDay } from '../../../Uitils/getDay';
const { Paragraph } = Typography;


function IconWithContent({ data }) {
    const day="Monday";
    return (
        <div className='IconContent'>
            <div className='item active'>
                <Image preview={false} className='TempIcons' src={sunDark} />
                <Paragraph className='para'>{getDay().slice(0,4)}</Paragraph>
                <Paragraph className='para'>{parseInt(data?.temp)-273}°C</Paragraph>
            </div>
            <div className='item'>
                <Image preview={false} className='TempIcons' src={ranning} />
                <Paragraph className='para'>{day}</Paragraph>
                <Paragraph className='para'>{parseInt(data?.temp)-273}°C</Paragraph>
            </div>
            <div className='item'>
                <Image preview={false} className='TempIcons' src={cloudWithSun} />
                <Paragraph className='para'>{day}</Paragraph>
                <Paragraph className='para'>{parseInt(data?.temp)-273}°C</Paragraph>
            </div>
            <div className='item'>
                <Image preview={false} className='TempIcons' src={ranning} />
                <Paragraph className='para'>{day}</Paragraph>
                <Paragraph className='para'>{parseInt(data?.temp)-273}°C</Paragraph>
            </div>
        </div>
    )
}

export default IconWithContent