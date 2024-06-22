import { useState } from "react";

const useCounter = (intialcount=0, value) => {
  const [count, setCount] = useState(intialcount);
  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };
  const reset = () => {
    setCount(intialcount);
  };
  return [count, increment, decrement, reset];
};

export default useCounter;
