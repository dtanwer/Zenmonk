import React from 'react'
import {useState} from 'react'

import './index.css';

const Form=({setInputData,inputData})=> {
  const [data,setData]=useState({
    "text":"",
    "date":"",
    "isDelete":false
  });

  const handelOnChange= (e)=>{
    const key=e.target.name;
    const value=e.target.value;
     setData({...data,[key]:value});
  }

const handelSubmit=(e)=>{
  e.preventDefault();

 
  setInputData(old=>[...old,data]);
}

  return (
    <div className="myform">
    <form onSubmit={handelSubmit}>
    <input type="text" className='text' name="text" id=""  required  onChange={handelOnChange} placeholder=' Write here ...'/>
    <input type="date" name="date" className="date"  onChange={handelOnChange} required/>
    <button type='submit'>Add</button>
    </form>
  </div>
  )
}

export default Form