import React, { useEffect, useState } from "react";

const HookCounterEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `clicked ${count} times`;
  });
  return (
    <div>
      You Have Clicked : {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default HookCounterEffect;
