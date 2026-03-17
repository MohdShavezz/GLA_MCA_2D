import React, { useCallback, useEffect, useMemo, useState } from 'react'

const Expensive = () => {

  const [count,setCount]=useState(0)
  const [num,setNum]=useState(10)

  const expensiveFunction=()=>{
    let sum=0
    for (let index = 0; index < 10000000; index++) {
      sum+=10000      
    }
    return sum
  }
  
  console.log('hi')
  const r=useMemo(()=>{
    let res=expensiveFunction()
    console.log('useMemo run...')
    console.log(res)
  },[count])
 


  return (
    <div>
      Expensive
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count+1)}>Inc</button>
    </div>
  )
}

export default Expensive
