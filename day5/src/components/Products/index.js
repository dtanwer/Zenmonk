import React, { useEffect, useState } from 'react'
import './index.css'
import MyCard from '../card';
import { handelDeleteItem } from '../../utils/changeData';
function Products({ setIsChange,isChange, setIsUpdate, setItem, setIndex }) {
    const [myProducts, setProducts] = useState([]);
    const [myDraft, setDraft] = useState([]);
    const useType = localStorage.getItem('useType');

    useEffect(() => {
        if (localStorage.getItem('products')) {

            let data = JSON.parse(localStorage.getItem('products'));
            setProducts([...data]);
        }
        if (localStorage.getItem('draft')) {

            let dummydraft = JSON.parse(localStorage.getItem('draft'));
            setDraft([...dummydraft]);
        }
    }, [isChange])

    const handelDelete = (i, mode) => {
        setIsChange(!handelDeleteItem(i,mode,isChange));
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
                            if (item.name !== '') {
                                return (
                                    <MyCard key={i} i={i} setItem={setItem} item={item} setIndex={setIndex} handelDeleteItem={handelDelete} mode={`draft`} setIsUpdate={setIsUpdate} />
                                )
                            }
                        })

                    }
                </div>
            </div>
            }
        </div>
    )
}

export default Products