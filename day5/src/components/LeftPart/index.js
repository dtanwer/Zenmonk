import React from 'react';
import './index.css';
function LeftPart({leftImg}) {
    return (
        <div className='leftPart'>
            <div className='logo'>
                <h1>Logo</h1>
            </div>
            <div className='leftImg'>
                <img src={leftImg} alt="myimg" />
            </div>
        </div>
    )
}

export default LeftPart