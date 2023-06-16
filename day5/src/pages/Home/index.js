import React from 'react'
import './index.css'
import Navbar from '../../components/NavBar'
import Products from '../../components/Products'
function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <h1>Products</h1>
      <Products/>

    </div>
  )
}

export default Home