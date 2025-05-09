import React, { useReducer } from 'react'

export default function UseReducerExampel2() {
   let initialstate={
    name:"",
    age:"",
    email:""
   }
  
   function reducerFunction(state,action){
     const{type,payload}=action     
     switch(type){
      case "name" :
        return {...state, name:payload}
      case "email" :
        return  {...state, email:payload}
      case "age" :
        return   {...state, age:payload}
        default :
          return state
     }
  }
    const[form,dispatch]=useReducer(reducerFunction,initialstate)
    
     function handelSubmit(){
      console.log("Data", {form})
     }
  
    function handelname(e){
     
     dispatch({type: "name",  payload: e.target.value})
     
    }
    function handelEmail(e){
      dispatch({type:"email" , payload: e.target.value})
      
    } 
    function handelage(e){
      dispatch({type:"age", payload: e.target.value})
  
    }
    return (
      <div>
        <h1>UseReducer</h1>
        <input type="text"  value={form.name} onChange={handelname} placeholder='EnterName'/>
        <input type="text"  value={form.email} onChange={handelEmail} placeholder='EnterEmail'/>
        <input type="text"  value={form.age} onChange={handelage} placeholder='EnterAge'/>
        <button onClick={handelSubmit}>Submit</button>
        <div>
       <ul>
          <li>{form.name}</li>
          <li>{form.age}</li>
          <li>{form.email}</li>
        </ul>
        </div>
     
      </div>
    )
}
