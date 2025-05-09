import React, { useReducer } from 'react'

export default function UseReducer() {
    
     function reducer(count,action){
           if(action.type==="Increment"){
            return count+1
           }
           if(action.type==="Decrement"){
            return count-1
           }
           if(action.type==="IncrementF"){
            return count+5
           }
           if(action.type==="DecrementF"){
            return count-5
           }
     }

    const[count,dispatch]=useReducer(reducer,0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"Decrement"})}>Increment</button>
      <button onClick={()=>dispatch({type:"IncrementF"})}>Increment</button>
      <button onClick={()=>dispatch({type:"DecrementF"})}>Increment</button>
    </div>
  )
}
