import React, { useReducer } from "react";

const initialState = 0;
const reduce = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CounterThree = () => {
  const [count, dispatch] = useReducer(reduce, initialState);
  const [countTwo, dispatchTwo] = useReducer(reduce, initialState);
  return (
    <div>
      <h1>Counter 1: {count}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>
        <h1>Counter 2: {countTwo}</h1>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </div>
  );
};

export default CounterThree;
