import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

function Buttons({deleteData,completeData}) {
    const navigatier = useNavigate();

    const handelDeleteClick = () => {
        navigatier(
            'delete',
            {
              state: deleteData
            })
       
    }
    const handelCompleteClick = () => {
        navigatier(
            'complete',
            {
              state: completeData
            })
    }
    return (
        <div className='myButtons'>
            <div className="btn">
            <button className='delete' onClick={handelDeleteClick}>Delete</button>
            </div>
            <div className="btn">
            <button className='complete' onClick={handelCompleteClick}> Complete</button>
            </div>
        </div>
    )
}

export default Buttons