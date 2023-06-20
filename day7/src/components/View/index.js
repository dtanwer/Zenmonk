import React from 'react'
import './index.css'
import CloseIcon from '@mui/icons-material/Close';
function View({note,setIsView}) {
  return (
    <div className='view'>
        <div className='cross'><CloseIcon onClick={()=>setIsView(false)}  /></div>
        <div className="Date"> <h2>Date: <span>20 Jun 2023</span></h2></div>
        <div className="title"><h1> Title : {note?.title}</h1></div>
        <div style={{textAlign:"center" ,color:"rgb(0, 0, 149)"}}><h1>Content</h1></div>
        <div className="body" dangerouslySetInnerHTML={{__html: note?.body}}></div>
    </div>
  )
}

export default View