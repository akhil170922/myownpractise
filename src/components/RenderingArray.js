// if its is having no id and having plain array
//we can mention key via index. approach

import React from "react";
export default function RenderingArray() {
  const fruits = ["apple", "banana", "orange"];
  return (
    <>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}
