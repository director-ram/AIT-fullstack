import { useState } from "react"

export const useCount=()=> {
  
  let [count,setCount] = useState(0)

  let INC = ()=>setCount(count+1)
  let DEC = ()=>{if(count>0){setCount(count-1)}}
  let RES = ()=>setCount(0)
  
  return [count,INC,DEC,RES]
}



// Custom hooks are reusable functions that encapsulate stateful logic,
// so it can be written once and shared across components.