import React, { useState } from 'react'

const QuantityComponent = () => {
    const [count,setCount]=useState(0)
  return (
    <>
    <input type='number' value={count} />
    <button onClick={()=>{setCount((prevState)=>prevState+1)}}>+</button>
    <button onClick={()=>{if(count>0){setCount((prevState)=>prevState-1)}}}>-</button>
    </>
  )
}

export default QuantityComponent