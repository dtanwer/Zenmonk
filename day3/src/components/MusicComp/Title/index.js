import React from 'react'
import './index.css'

function Title({db,current}) {
    
  return (
    <div className='details'>
        <h1>{db[current].name}</h1>
        <p>{db[current].artist}</p>
    </div>
  )
}

export default Title