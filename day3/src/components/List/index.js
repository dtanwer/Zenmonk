import React from 'react';
import './index.css';
import CloseIcon from '@mui/icons-material/Close';

function List({setIsPlay,handelPlay,setIsList,setIndex, db}) {
    console.log(db);
    const handelClick=(i)=>{
        handelPlay(i);
        setIsPlay(true);
    }
  return (
    <div className='list'>
        <div onClick={()=>setIsList(false)} className="icon">
            <CloseIcon/>
           <ul>
           {
            db?.map((item,i)=>{
                return( <li onClick={()=>handelClick(i)} >{item.name} <span>{item.artist}</span></li> )
            })
           }
           </ul>
        </div>
    </div>
  )
}

export default List