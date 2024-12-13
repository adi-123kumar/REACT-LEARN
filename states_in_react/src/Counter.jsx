import {useState} from "react"

export default function Counter(){
  let count = 0;
       let[initCount,setCount]=useState(count);

  function incCount(){
  setCount((currentCount)=>{
    return currentCount+2;
  })
  setCount((currentCount)=>{
    return currentCount+2;
  })
  }
  return(
  <div>
    <h2>Count = {initCount}</h2>
    <button onClick={incCount}>Increase Count</button>
  </div>
  )
}