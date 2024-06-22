import React, { useMemo, useState } from "react";

const CounterMemo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  return (
    <div>
      <button onClick={incrementOne}>Count One -{counterOne}</button>
      <span>{isEven ? "EVEN" : "ODD"}</span>
      <button onClick={incrementTwo}>Count Two -{counterTwo}</button>
    </div>
  );
};

export default CounterMemo;
