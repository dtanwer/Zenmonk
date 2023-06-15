import React, { useState } from 'react'
import './index.scss'
export default function Index({ setSearchValue, setIsSearch }) {
  const [inputData, setInputData] = useState("");
  const handelSubmit = (event) => {
    event.preventDefault()
    setSearchValue(inputData);
    setIsSearch(true);
  }
  const handelChange = (e) => {
    setInputData(e.target.value);
    if(e.target.value==="")
    {
      setIsSearch(false);
    }
  }
  return (
    <div className='nabBar'>
      <div className="leftNav">
        <h1>Products</h1>
      </div>
      <div className="rightNav">
        <form onSubmit={handelSubmit}>
          <input type="text" placeholder='Search' onChange={handelChange} required />
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}
