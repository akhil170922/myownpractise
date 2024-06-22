import React from "react";
import { useState } from "react";
function FunctionalCounter() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter+1)
  };
  const decrement=()=>{
    setCounter(counter-1)
  }
  return (
    <>
      Counter: {counter}
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </>
  );
}
export default FunctionalCounter;
