import { useState } from "react";
export default function TernaryConditional() {
  const [display, setDisplay] = useState(true)  ;
  return display ? (
    <h1>This a Ternary Conditional Rendering</h1>
  ) : (
    <h1>Exceptional Case</h1>
  );
}
