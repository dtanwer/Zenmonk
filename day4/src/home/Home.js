import React from 'react'
import './Home.css';
import Navbar from '../../Components/NavBar/Navbar';
import Content from '../../Components/Content/Content';
import Myfooter from '../../Components/footer/Myfooter';
export default function Home() {
  return (
    <div className='HomeWindow'>
      <Navbar/>
      <Content/>
     <Myfooter/>
      
    </div>
  )
}
