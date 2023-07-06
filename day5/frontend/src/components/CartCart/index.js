import React from 'react'
import './index.css';
import { addOrders } from '../../services/product.service';
import { useSelector } from 'react-redux';
function CartCard({item}) {
  const currentUser=useSelector((state)=>state.auth.userData)
  const handelCheckOut=async ()=>{
      try {
        await addOrders({name:item.name,owner:item.ownerId,productId:item._id,quantity:"1",clientId:currentUser._id})
        alert("Order Added");
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <div className='cartItem'>
      <div className="img">
        <img src={item.img} alt="myImg" />
      </div>
      <div className="Details">
        <h1>{item.name}</h1>
        <h1>Price : {item.price}</h1>
      <button onClick={handelCheckOut}>CheckOut</button>
      </div>
    </div>
  )
}

export default CartCard
