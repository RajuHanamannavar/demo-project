import React, { useRef, useState } from 'react'

export default function SecondExampelUseRef() {
  
    const[count,setCount]=useState(0)
    let btnRef=useRef()
    function handelClike(){
        setCount(count+1)
    }

    function changecolor(){
     btnRef.current.style.backgroundColor="red";
    }


  return (
    <div>
        <h1>{count}</h1>
      <button ref={btnRef} onClick={handelClike}>Increment</button>
      <br />
      <button onClick={changecolor}>Change color code</button>
    </div>
  )
}
