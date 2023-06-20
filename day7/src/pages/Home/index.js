import {useState} from 'react'
import LeftBar from '../../components/LeftBar'
import RightBox from '../../components/RightBox'
import './index.css'

function Home() {
    const [isChange,setChange]=useState(false);
    return (
        <div className='home'>
            <LeftBar/>
            <RightBox />

        </div>
    )
}

export default Home