import React, { useRef, useState } from 'react'

export default function Timer() {
    const[time,setTime]=useState(0)
     let timeref=useRef(null)


     function handelStart(){
       timeref.current=setInterval(()=>{
             setTime(time=>time+1)
        },1000)
     }


     function handelStop(){
         clearInterval(timeref.current)
         timeref.current=null
     }


     function handelReStart(){
          handelStop()
          setTime(0)
     }

  return (
    <div>
      <h1>StopWatch: {time} Seconds</h1>
       <button onClick={handelStart}>Start</button>
       <button onClick={handelStop}>Stop</button>
       <button onClick={handelReStart}>ReStart</button>
    </div>
  )
}
