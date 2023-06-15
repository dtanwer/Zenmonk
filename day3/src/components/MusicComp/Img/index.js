import React from 'react';
import './index.css';
import cd from '../../../SVG/cd.svg'
function Img({current,db}) {
  return (
    <div className='ImgCointainer'>
        <div className='circle'>
            <img className='myimg' src={db[current].img_source} alt="img" />
        </div>
    </div>
  )
}

export default Img