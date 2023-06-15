import React from 'react';
import './index.css'
import { Typography } from 'antd';
import DateAndTime from './DateAndTime';
import Nature from './Nature';
const { Title } = Typography;

const BannerTemp=({data})=>{
  return (
    <div className="banner">
      <DateAndTime className='top' data={data}/>
      <Nature className='top' data={data}/>
      </div>
  )
}

export default BannerTemp