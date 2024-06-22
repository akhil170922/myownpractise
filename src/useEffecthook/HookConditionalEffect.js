import React from "react";
import { useState, useEffect } from "react";
const HookConditionalEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Updated - State value in hook");
    document.title = `clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      You Have Clicked : {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default HookConditionalEffect;
