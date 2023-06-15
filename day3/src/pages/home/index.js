import React from 'react';
import './index.css';
import Headings from '../../components/headings';
import Player from '../../components/Player';
function Home() {
  return (
    <div className='Home'>
        <div className='LeftHome'>
            <Headings/>
        </div>
        <div className='RightHome'>
           <Player/>
        </div>
    </div>
  )
}

export default Home