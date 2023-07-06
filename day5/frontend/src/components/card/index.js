import React from 'react'
import { Button, Card } from 'antd';
import addItem from '../../utils/addItem';
import './index.css'
import { useSelector } from 'react-redux';

function MyCard({ i, setIndex, setItem, item, handelDeleteItem, mode, setIsUpdate }) {
    const currentUser=useSelector((state)=>state.auth.userData)
    const useType = currentUser.type;
    // const useType = localStorage.getItem('useType');
    const hanndelUpadte = () => {
        setIsUpdate(true);
        setItem(item);
    }

    const handelClickCart = () => {
        addItem(item, 'cart');
        alert(`${item.name} Added Cart!!!`);
    }
    return (
        <div className='itemCard'>
            <div className="img">
                <img src={item.img} alt="" />
            </div>
            <div className="itemInfo">
                <h3>{item.name}</h3>
                <p>{`${item.price} Rs`}</p>
                {
                    useType === 'admin' ? (<div style={{ padding: "10px" }}>
                        <Button style={{ backgroundColor: "red", color: "white" }} onClick={() => handelDeleteItem(item._id)} >{mode === 'draft' ? ("Delete Draft") : ("Delete")}</Button>
                        <Button style={{ backgroundColor: "green", color: "white" }} onClick={hanndelUpadte} >Edit</Button>
                    </div>) : (<div style={{ padding: "10px" }} >
                        {
                            useType === 'vender' && mode === 'draft' ? (<div style={{ padding: "10px" }} >
                                <Button style={{ backgroundColor: "red", color: "white" }} onClick={() => handelDeleteItem(item._id)} >Delete Draft</Button>
                                <Button style={{ backgroundColor: "green", color: "white" }} onClick={hanndelUpadte} >Edit</Button>
                            </div>) : (<div>
                                {
                                    useType === 'user' ? (<Button style={{ backgroundColor: "blue", color: "white" }} onClick={handelClickCart} >Add To Cart</Button>) : ("")
                                }
                            </div>)
                        }
                    </div>)
                }

            </div>
        </div>
    )
}

export default MyCard
