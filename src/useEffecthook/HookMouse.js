import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("event");
    window.addEventListener("mousemove", getMousePosition);
    //if we need to umount the component..
    return () => {
      console.log("component has been unmouted");
      window.removeEventListener("mousemove", getMousePosition);
    };
  }, []);
  return (
    <div>
      the value x:{x} and the value y is: {y}
    </div>
  );
};

export default HookMouse;
