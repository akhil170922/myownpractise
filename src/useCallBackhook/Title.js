import React from "react";

const Title = () => {
  console.log("Rendering Title");
  return <div>useCallBack hook usage</div>;
};

export default React.memo(Title);
