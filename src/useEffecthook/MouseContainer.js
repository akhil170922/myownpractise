import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  const toggleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <button onClick={toggleDisplay}>Toggle display</button>
      {display && <HookMouse />}
    </div>
  );
};

export default MouseContainer;
