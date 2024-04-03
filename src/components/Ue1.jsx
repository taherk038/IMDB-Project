import React, {useEffect} from 'react'
import {useState} from 'react'

function Ue1 () {
    const [count,setCount]=useState(0);
    const [text,setText]=useState('');
    
    let Inc=() =>{
        setCount(count+1);
    }
    let HandleChange =(e) =>{
        setText(e.target.value);
    }

    //Component mounting and component update
    // useEffect (()=>{
    //      console.log('use effect runs');
    //      document.title=`button clicked for ${count} times`
    // })
  
    //Component mounting
    useEffect (()=>{
        console.log('use effect runs');
        document.title=`button clicked for ${count} times`
   },[])

    return (
        <div>
            <h1>The count is : {count} </h1>
            <input onChange={HandleChange} type='text' value={text} ></input>
            <h2>{text}</h2>
            <button onClick={Inc}>Increment</button>
           
        </div>
      )
    }

export default Ue1