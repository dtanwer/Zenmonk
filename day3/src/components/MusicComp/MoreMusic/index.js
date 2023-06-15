import React from 'react';
import './index.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function MoreMusic({setIsList}) {
  return (
    <div onClick={()=>setIsList(true)} className='moreMusic'> 
    <KeyboardArrowDownIcon/>
    More Music
    <KeyboardArrowUpIcon/>
    </div>
  )
}

export default MoreMusic