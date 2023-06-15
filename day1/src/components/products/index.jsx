import React, { useEffect, useState } from 'react';
import { getProductData } from '../../api/getData';
import Product from '../productCard/Index';
import './product.scss';

function Index({ isSearch, searchValue }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    
    isSearch === true ? setProducts(getProductData(searchValue)) :setProducts(getProductData()) ;
  }, [searchValue,isSearch])

  return (
    <div className='products'>
      {
        products.map((item) => {
          return (
            <div key={item.id}>
              <Product name={item.name} price={item.price} img={item.img} quantity={item.quantity} description={item.description}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Index