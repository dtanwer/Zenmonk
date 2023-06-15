import React from 'react'
import './index.css';
import { useNavigate } from 'react-router-dom';


const Heading = () => {
    const navigatier = useNavigate();

    const handelClick=()=>{
        navigatier('/');
    }
    return (
        <div className='heading'>
             <span> My ToDo List</span><br />
             <button onClick={handelClick}>Home</button>
        </div>
    )
}

export default Heading