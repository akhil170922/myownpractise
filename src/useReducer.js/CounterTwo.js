//for complex state and action
//for using multiple state variables(creates 2 components) at a time.
//for having multiple actions

import React, { useReducer } from "react";
const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reduce = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - 1 };
    case "increment5":
      return { ...state, firstCounter: state.firstCounter + 5 };
    case "decrement5":
      return { ...state, firstCounter: state.firstCounter - 5 };
    case "increment10":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement10":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment100":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement100":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CounterTwo = () => {
  const [count, dispatch] = useReducer(reduce, initialState);
  return (
    <div>
      <h1>Counter1: {count.firstCounter}</h1>
      <h2>Counter2: {count.secondCounter}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "increment5" })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement5" })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "increment10", value: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement10", value: 10 })}>
        Decrement 10
      </button>
      <div>
        <button onClick={() => dispatch({ type: "increment100", value: 100 })}>
          Increment SecondCounter 100
        </button>
        <button onClick={() => dispatch({ type: "decrement100", value: 100 })}>
          Decrement SecondCounter 100
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterTwo;
