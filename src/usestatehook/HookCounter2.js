import React, { useState } from "react";

const HookCounter2 = () => {
  //usage of prevState...
  //to increment value by 5
  //if we use loops..
  let intialCount = 0;
  const [count, setCount] = useState(intialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <h4>Counter 2</h4>
      <h5>the counter value is : {count}</h5>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        decrement
      </button>
      <button onClick={() => setCount(intialCount)}>Reset</button>
      <button onClick={incrementFive}>Increment 5 </button>
    </div>
  );
};

export default HookCounter2;
