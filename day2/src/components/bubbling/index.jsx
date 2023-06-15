import React from 'react'
import './index.css'

const Index=()=> {
    const clickOnBigBox=(e)=>{
        e.stopPropagation();
        alert("Click on Big Box");
    }
    const clickOnSmallBox=(e)=>{
        e.stopPropagation();
        alert("Click on Small Box");
    }
    const clickOnButton=()=>{

    }
    
  return (
    <div className='box'>
        <h1>Bubbling</h1>
        <div className='bigBox' onClick={clickOnBigBox} >
            <div className="smallBox"  onClick={clickOnSmallBox} ><button>A</button></div>
            <div className="smallBox" onClick={clickOnSmallBox} ><button>B</button></div>
            <div className="smallBox" onClick={clickOnSmallBox} ><button>C</button></div>
            <div className="smallBox"onClick={clickOnSmallBox}  ><button>D</button></div>
        </div>
    </div>
  )
}

export default Index