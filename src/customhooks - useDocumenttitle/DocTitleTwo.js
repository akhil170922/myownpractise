import React, { useEffect, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const DocTitleTwo = () => {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count - {count}
      </button>
    </div>
  );
};

export default DocTitleTwo;
