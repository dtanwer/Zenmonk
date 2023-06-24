import React from 'react'
import './index.css'
import { generatePDF } from '../../utils/exportPdf';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
function View1({ item, view }) {
    return (
        <>
            {
                view && <div className='exportbtn'><button onClick={() => generatePDF('#report1')}>Export PDF</button></div>
            }

            <div className='view1' id='report1'>
                <div className='mainHead'>
                    <div className='Img'>
                        <img src="https://media.licdn.com/dms/image/D4D03AQFXxV3eDmX38A/profile-displayphoto-shrink_800_800/0/1686504020188?e=1692835200&v=beta&t=GcGRp0WeSdtHyD4Nm5ZtWBCM6ezDtBU276ZsxZtu7gM" alt="" />
                    </div>
                    <div className='myName'>
                        <div className='name'>
                            <h1>{item.name.toUpperCase()}</h1>
                            <h1>SINGH</h1>
                        </div>
                        <div className='nameFooter'>
                            <p>CREATIVE GRAPHIC DESIGNER</p>
                        </div>
                    </div>
                </div>
                <div className='DetailsContent'>
                    <div className="left">
                        <ul>
                            <li>
                                <h2>CONTACTS</h2>
                                <ul>
                                    <li className='myLi'> <LocationOnIcon className='icon' /> <span>1719 Penne Street</span></li>
                                    <li className='myLi'> <EmailIcon className='icon' /> <span>{item.email}</span></li>
                                    <li className='myLi'> <LocalPhoneIcon className='icon' /> <span>{item.phone}</span></li>
                                    <li className='myLi'> <LanguageIcon className='icon' /><span>{item.website}</span></li>
                                </ul>

                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h2>SCHOOL</h2>
                                <ul>
                                    <li className='myLi'><SchoolIcon className='icon' />  <span>{item.school}</span></li>
                                    <li className='myLi'> <DateRangeIcon className='icon' /> <span>{item.schoolYear}</span></li>
                                    <li className='myLi'> <BookmarksIcon className='icon' />  <span>{item.schoolMarks}%</span></li>
                                </ul>

                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h2>UNIVERSITY</h2>
                                <ul>
                                    <li className='myLi'><SchoolIcon className='icon' /> <span>{item.university}</span></li>
                                    <li className='myLi'> <DateRangeIcon className='icon' /><span>{item.graduatingYear}</span></li>
                                    <li className='myLi'> <BookmarksIcon className='icon' /><span>{item.cgpa} CGPA</span></li>
                                </ul>

                            </li>
                        </ul>

                    </div>
                    <div className="right">
                        <div className="intro">
                            <h1>INTRODUCTION</h1>
                            <p>{item.intro}</p>
                        </div>
                        <div className="skills">
                            <h2>SKILLS</h2>
                            <ul>
                                <li className='myLi'> <span>{item.school}</span></li>
                                <li className='myLi'> <span>{item.schoolYear}</span></li>
                                <li className='myLi'>  <span>{item.schoolMarks}%</span></li>
                            </ul>
                        </div>

                        <div className='project'>

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
            </div>
        </>
    )
}

export default View1