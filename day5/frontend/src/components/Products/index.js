import React, { useEffect, useState } from 'react'
import './index.css'
import MyCard from '../card';
import { handelDeleteItem } from '../../utils/changeData';
import { useSelector } from 'react-redux';
import { getDraftProducts, getProducts, getProductsForUsers } from '../../services/product.service';
function Products({ isUpdate,setIsChange,isChange, setIsUpdate, setItem, setIndex }) {
    const currentUser=useSelector((state)=>state.auth.userData)
    const [myProducts, setProducts] = useState([]);
    const [myDraft, setDraft] = useState([]);
    const useType = currentUser.type;


    const getAllProducts=async (id)=>{
        try {
            
            const res=  useType==='user'|| useType==='admin'?await getProductsForUsers(): await  getProducts(id);
            // console.log("products",res);
            setProducts(res.data);
            
        } catch (error) {
            console.log(error)
        }
        
    }
    const getAllDraftProducts=async (id)=>{
        try {
            const res=await  getDraftProducts(id);
            // console.log("Draft",res);
            setDraft(res.data);
            
        } catch (error) {
            console.log(error)
        }
       
    }

    useEffect(() => {
        // if (localStorage.getItem('products')) {

        //     let data = JSON.parse(localStorage.getItem('products'));
        //     setProducts([...data]);
        // }
        // if (localStorage.getItem('draft')) {

        //     let dummydraft = JSON.parse(localStorage.getItem('draft'));
        //     setDraft([...dummydraft]);
        // }
        getAllProducts(currentUser._id);
        getAllDraftProducts(currentUser._id);

    }, [isChange,isUpdate])

    const handelDelete = (id) => {
        handelDeleteItem(id,isChange)
        setTimeout(() => {
            setIsChange(!isChange);
        }, 400);
       
    }



    return (
        <div className='products'>
            <div className="myproducts mygrid">
                <div className="heading"><h2>my Products</h2></div>
                <div className="content">
                    {
                        myProducts?.map((item, i) => {
                            if (item.name !== '') {
                                return (
                                    <MyCard key={i} i={i} setItem={setItem} item={item} setIndex={setIndex} handelDeleteItem={handelDelete} mode={`products`} setIsUpdate={setIsUpdate} />
                                )
                            }
                        })
                    }
                </div>
            </div>

            {
                useType!=='user' && <div className="mydraft mygrid">
                <div className="heading"><h2>My Drafts</h2></div>
                <div className="content">
                    {
                        myDraft.map((item, i) => {
                            return (

                                <MyCard key={i} i={i} setItem={setItem} item={item} setIndex={setIndex} handelDeleteItem={handelDelete} mode={`draft`} setIsUpdate={setIsUpdate} />
                            )
                        })

                    }
                </div>
            </div>
            }
        </div>
    )
}

export default Products