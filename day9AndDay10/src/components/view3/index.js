import React from 'react'
import './index.css'
import { generatePDF } from '../../utils/exportPdf'
function View3({item,view}) {
  return (
    <>
    {
        view && <div   className='exportbtn' ><button onClick={()=>generatePDF('#report3')}>Export PDF</button></div>
    }
    <div className='view3' id='report3'>
        <div className='headingWithImg'>
            <div className='info'>
                <h1>Name and Details</h1>
                <h3>Name : {item.name}</h3>
                <h3>Email : {item.email}</h3>
                <h3>Phone : {item.phone}</h3>
                <h3>Gender : {item.gender}</h3>
                <h3>Website: {item.website}</h3>
                <h2>Introduction</h2>
                <p>{item.intro}</p>
            </div>
            <div className='myimg'><img src="https://www.svgrepo.com/download/134525/employee.svg" alt="img" /></div>
        </div>
        <div className='Education'>
            <h1>Education</h1>
            <h3>School :{item.school} <span> {item.schoolYear}</span> <span> <b>{item.schoolMarks}%</b> </span></h3>
            <h3>University :{item.university} <span> {item.graduatingYear}</span> <span> <b>{item.cgpa} CGPA</b> </span></h3>
        </div>
        <div className='project'>
            <h1>Projects</h1>
            <h4>Project 1</h4>
            <p>{item.project1}</p>
            <h4>Project 2</h4>
            <p>{item.project2}</p>
        </div>
        
    </div>
    </>
  )
}

export default View3