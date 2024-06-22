import axios from "axios";
import React, { useEffect, useState } from "react";

const Pnrstatus = () => {
  const [pnr, setPnr] = useState({});
  const [pnrNumber, setPnrNumber] = useState("");
  const [pnrNumberFromBtnClick, setPnrNumberFromBtnClick] = useState("");

  const handleClick = () => {
    setPnrNumberFromBtnClick(pnrNumber);
  };
  useEffect(() => {
    axios
      .get(`http://pnrapi.dfth.in/pnr/${pnrNumberFromBtnClick}`)
      .then((res) => {
        setPnr(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pnrNumberFromBtnClick]);

  return (
    <div>
      <input value={pnrNumber} onChange={(e) => setPnrNumber(e.target.value)} />
      <button onClick={handleClick}>Search Pnr Status</button>
      <h1>{pnr.status}</h1>
    </div>
  );
};

export default Pnrstatus;
