import React from "react";

const CountAgeSal = ({ count, text }) => {
  console.log(`rendering ${text}`);
  return (
    <div>
      {text}: {count}
    </div>
  );
};

export default React.memo(CountAgeSal);
