import React, { useRef } from 'react'

export default function UseRef() {
    let val=useRef(1)
    // let value=1
    function handelclick(){
      val.current=val.current+1
    //   value=value+1
      console.log(val.current)
    //   console.log(value)
    }
    
    return (
      <div className="App">
       <button onClick={handelclick}>clike</button>
      </div>
    );
}
