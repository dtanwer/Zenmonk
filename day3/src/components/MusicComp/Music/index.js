import React, { useState } from 'react'
import './index.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import ShuffleIcon from '@mui/icons-material/Shuffle';
function Music({isSheffel,setIsSheffel,handelPrev,handelNext,isplay,setIsPlay,handelPause,handelPlay}) {
    const handelClick=()=>{

      isplay===false?handelPlay():handelPause();
        setIsPlay(!isplay);

    }
    const handelClickSheffeled=()=>{
      console.log(isSheffel);
      setIsSheffel(!isSheffel);
    }
    
  return (
    <div className='music'>
        <div className="icons">
           <center> <SkipPreviousIcon onClick={()=>handelPrev()} className='icon'/>
           <span onClick={handelClick}>
           {isplay===true? <PauseIcon className='icon pause'/>:<PlayArrowIcon className='icon pause'/>}
           </span>
            <SkipNextIcon onClick={()=>handelNext()} className='icon'/>
           {isSheffel!==true? <ShuffleIcon className='icon' onClick={handelClickSheffeled} />:<ShuffleIcon className='icon sheffeled' onClick={handelClickSheffeled} />}
            
            </center>
        </div>
    </div>
  )
}

export default Music