import React from 'react';
import './Index.scss';
function Index({name,description,img,quantity,price}) {
  return (
    <div className='card'>
        <img src={img} alt="myimg"/>
        <div className="name">
            <h1>{name}</h1>
            <span>{price}$</span>
        </div>
        <div className='description'>
            <p>
                {description}
            </p>
        </div>

    </div>
  )
}

export default Index