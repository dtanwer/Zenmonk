import React from 'react'
import { useState,useEffect,useRef,useMemo} from 'react'

function Hooks() {
    const count=useRef(0);
    const inputBox=useRef();
    const [value,setValue]=useState("");
    const [myarr,setMyarr]=useState([]);
    const mycalculation=calculate(count);


    useEffect(()=>{
        count.current=count.current+1;
    })

    useEffect(()=>{
        console.log(myarr)
    },[myarr])


    useEffect(()=>{
        console.log("This is useEffect of without dependency ")
        console.log(`Count is ${count.current} and Arr is `,myarr);
    },[])



const handelAddData=()=>{
    setMyarr(old=>[...old,value]);
    setValue("");
}
const handelFocus=()=>{
    inputBox.current.focus();
}
const calculate=(count)=>{
    console.log("Calculating...");
    return count*2;
}

  return (
    <div>
        <h1>Hooks</h1>
        <h3>Count Value: {count.current} </h3> 
        <input type="text" value={value} ref={inputBox} onChange={(e)=>setValue(e.target.value)} />
        <button onClick={handelAddData} >Add Data</button>
        <button onClick={handelFocus} >Focus</button>


    </div>
  )
}

export default Hooks