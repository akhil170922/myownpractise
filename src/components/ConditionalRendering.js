// import React, { useState } from "react";
// export default function ConditionalRendering() {

//     const[display, setDisplay]=useState(true);
//     if(display){
//         return <>
//         <h1>Conditional Rendering</h1>
//         </>
//     }
//     else{
//         return (
//           <>
//             <h1>an exceptional case</h1>
//           </>
//         );
//     }
// }

//using both return statements is not a good practise... so, we can use 2nd approach to render conditionally
//is ELEMENT VARIABLE APPROACH...
import React, { useState } from "react";
export default function ConditionalRendering() {
  const [display, setDisplay] = useState(true);
  let output;
  if (display) {
    output = <h1>Conditional Rendering</h1>;
  } else {
    output = <h1>an exceptional case</h1>;
  }
  return <>{output}</>;
}


// and the third approach is ternary operator... practise more this approach useful..


// import { useState } from "react";
// export default function TernaryConditional() {
//   const [display, setDisplay] = useState(true);
//   return display ? (
//     <h1>This a Ternary Conditional Rendering</h1>
//   ) : (
//     <h1>Exceptional Case</h1>
//   );
// }
