//event handling in function based component

import React from "react";
function FunctionEvent() {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <>
      function event
      <button onClick={handleClick}>Click here</button>
    </>
  );
}
export default FunctionEvent;
