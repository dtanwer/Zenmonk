import React from 'react'
import './index.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
function Navbar() {
    return (
        <div className='Navbar'>
            <div className="left">
                <div className="logo">
                    <ElectricBoltIcon className='icon' />
                    <span>Sociala.</span>
                </div>
                <div className="items">
                    <div className="search" >
                        <SearchOutlinedIcon className='icon'/>
                        <input type="text" placeholder='Start typing to search..' />
                    </div>
                    <div className="iconDiv active">
                        <CottageOutlinedIcon className='icon' />
                    </div>
                    <div className="iconDiv">
                        <ElectricBoltIcon className='icon' />
                    </div>
                    <div className="iconDiv">
                    <VideocamOutlinedIcon className='icon'/>
                    </div>
                    <div className="iconDiv">
                    <Person2OutlinedIcon className='icon'/>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="iconDiv">
                <NotificationsNoneOutlinedIcon className='icon'/>
                </div>
                <div className="iconDiv">
                <SettingsOutlinedIcon className='icon'/>
                </div>
                <div className="iconDiv">
                <ChatBubbleOutlineOutlinedIcon className='icon'/>
                </div>
                <div className="">
                    <img className='avtar' src="http://uitheme.net/sociala/images/profile-4.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Navbar