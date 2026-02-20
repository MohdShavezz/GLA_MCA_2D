import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)

    function incFn(){
        setCount(count+1)
    }

    useEffect(()=>{
        console.log('useeffect call.. mounting...')

         return()=>{
            console.log('Unmount..')
        }
    },[])
    useEffect(()=>{
        console.log('updation..')
        
    },[count])
    


  return (
    <div>
        Count: {count}
        <button onClick={()=>incFn()} >INC</button>
    </div>
  )
}

export default Counter
