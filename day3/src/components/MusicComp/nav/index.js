import React from 'react'
import './index.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

function Nav() {
  return (
    <div className="navbar">
        <div className='iconWithName'>
           <div className='icon'> <MusicNoteIcon/> </div>
           <span>Music Player</span>
        </div>
        <div className="icons">
            <CloseIcon  className='righticon'/>
            <RemoveIcon className='righticon' />
        </div>
    </div>
  )
}

export default Nav