import React from 'react'
import './index.css'
import { setCvTemplet } from '../../features/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import templet2 from '../../img/templet2.png'
import templet3 from '../../img/templet3.png'
import templet1 from '../../img/templet1.png'
function SelectTemplets() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handelClick=(num)=>{
        dispatch(setCvTemplet(num));
        navigate('/form')
    }
  return (
    <div className='SelectTempletes'>
        <div onClick={()=>handelClick(1)} className='item'>
            <img src={templet1} alt="img" />
        </div>
        <div onClick={()=>handelClick(2)} className='item'>
        <img src={templet2} alt="img" />
        </div>
        <div  onClick={()=>handelClick(3)} className='item'>
        <img src={templet3} alt="img" />
        </div>
    </div>
  )
}

export default SelectTemplets