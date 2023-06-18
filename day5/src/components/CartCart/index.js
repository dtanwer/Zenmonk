import React from 'react'
import './index.css'
function CartCard({item}) {
  return (
    <div className='cartItem'>
      <div className="img">
        <img src={item.img} alt="myImg" />
      </div>
      <div className="Details">
        <h1>{item.name}</h1>
        <h1>Price : {item.price}</h1>
      </div>
    </div>
  )
}

export default CartCard
