import React from 'react'
import './index.css';

function Content({data}) {
  return (
    <div className='content'>
        <div className='row'>
            <div className="col">PRECIPITATION</div>
            <div className="txtRight"><span>{data.main.pressure}</span>%</div>
        </div>
        <div className='row'>
            <div className="col">HUMIDITY</div>
            <div className=" txtRight">{data.main.humidity}%</div>
        </div>
        <div className='row'>
            <div className="col">WIND</div>
            <div className="txtRight">{data.wind.speed}km/h</div>
        </div>
    </div>
  )
}

export default Content