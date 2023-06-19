import React from 'react'
import './index.css'
function Card({task}) {
  return (
    <tr >
        <td><span>{task.userName}</span></td>
        <td><span>{task.userTask.length}</span></td>
        <td><span>{
            task.userTask.map((details)=>{
                return(
                    <div className='taskAndDateBox'>
                       <div> <span>{details.date}</span></div> 
                       <div> <span>{details.task}</span></div> 
                    </div>
                )
            })
            }</span></td>
    </tr>
  )
}

export default Card