import React, { useState } from 'react'

const HookCounter = () => {
    let intialCount=0
  const[count, setCount]= useState(intialCount)

    return (
      <div>
        <h4>Counter 1</h4>
        <h5>the counter value is : {count}</h5>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
        <button onClick={()=>setCount(intialCount)}>Reset</button>
      </div>
    );
}

export default HookCounter
