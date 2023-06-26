import React from 'react'
import './index.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { generatePDF } from '../../utils/exportPdf'
function View2({ item, view }) {
    return (
        <>
            {
                view && <div className='exportbtn' ><button onClick={() => generatePDF('#report2')}>Export PDF</button></div>
            }

            <div className='view2' id='report2'>
                <div className='left'>
                    <div className='items myImgContent '>
                        <div className='Content'>
                            <div className='myImg'>
                                <img src="https://media.licdn.com/dms/image/D4D03AQFXxV3eDmX38A/profile-displayphoto-shrink_800_800/0/1686504020188?e=1692835200&v=beta&t=GcGRp0WeSdtHyD4Nm5ZtWBCM6ezDtBU276ZsxZtu7gM" alt="" />
                            </div>
                            <div className='name'>
                                <h1>{item.name}</h1>
                                <h3>Web Developer</h3>
                            </div>
                        </div>
                    </div>
                    <div className='items'>
                        <div className='heading'>
                            <h1>Education</h1>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <h3>School</h3>
                                    <ul>
                                        <li>{item.school}</li>
                                        <li>{item.schoolYear}</li>
                                        <li>{item.schoolMarks}%</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>University</h3>
                                    <ul>
                                        <li>{item.university}</li>
                                        <li>{item.graduatingYear}</li>
                                        <li>{item.cgpa} CGPA</li>
                                    </ul>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className='items'>
                        <div className='heading'>
                            <h1>Projects</h1>
                        </div>
                        <div className='projects'>

                            <ol>
                                <li>
                                    <h2>Project 1</h2>
                                    <ul>
                                        <li>{item.project1}</li>
                                    </ul>
                                </li>
                                <li>
                                    <h2>Project 2</h2>
                                    <ul>
                                        <li>{item.project2}</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                    </div>

                </div>
                <div className='right'>
                    <div className="items"></div>
                    <div className="items">
                        <div className='headings'><h3>Contact</h3></div>
                        <div className='details'>
                            <h3>Email</h3>
                            <p><span><a href={`mailto:${item.email}`} target="_blank"  style={{color:'white'}} >{item.email}</a></span></p>
                            <h3>Phone</h3>
                            <p> {item.phone}</p>
                            <h3>Website</h3>
                            <p><span><a href={item.website} target='_blank'  style={{color:'white'}}   > {item.website}</a></span></p>
                        </div>
                    </div>
                    <div className="items">
                        <div className='headings'><h3>Skills</h3></div>
                        <div className='details'>
                            <ul>
                                <li> <h3>C++</h3></li>
                                <li> <h3>Java</h3></li>
                                <li> <h3>DSA</h3></li>
                                <li> <h3>JavaScript</h3></li>
                                <li> <h3>DSA</h3></li>
                                <li> <h3>DSA</h3></li>
                            </ul>
                        </div>
                    </div>
                    <div className='icons'>
                        <span><LinkedInIcon className='icon' /></span>
                        <span><TwitterIcon className='icon' /></span>
                        <span><InstagramIcon className='icon' /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View2