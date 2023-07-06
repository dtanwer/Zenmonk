import { useState } from 'react'
import './index.css'
import Navbar from '../../components/NavBar'
import AddProduct from '../../components/AddProduct'
function AddProducts({isChange,setIsChange}) {
  return (
    <div className='home'>
      <Navbar />
      <AddProduct  setIsChange={setIsChange} index={-1} isChange={isChange} />
    </div>
  )
}

export default AddProducts