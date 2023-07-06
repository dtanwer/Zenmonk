import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './index.css'
import { getOrders } from '../../services/product.service';
function Orders() {
    const currentUser = useSelector((state) => state.auth.userData)
    const [orders, setOrders] = useState([]);
    const getAllOrders=async ()=>{
        try {
            const res=await getOrders(currentUser._id)
            setOrders(res.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getAllOrders();
    })
    return (
        <div className='orders'>
            <ol>
                {
                    orders.map((item) => {
                        return (
                            <li>{item?.name}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Orders
