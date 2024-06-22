import axios from "axios";
import React, { useEffect, useState } from "react";
const AgeApi = () => {
  const [person, setPerson] = useState({});
  const [personName, setPersonName] = useState("michael");
  const [nameFromBtnClick, setNameFromBtnClick] = useState("michael");
  const handleClick = () => {
    setNameFromBtnClick(personName);
  };
  useEffect(() => {
    axios
      .get(`https://api.agify.io?name=${nameFromBtnClick}`)
      .then((res) => {
        setPerson(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [nameFromBtnClick]);
  return (
    <div>
      <input
        type="text"
        value={personName}
        onChange={(e) => setPersonName(e.target.value)}
      />
      <button onClick={handleClick}>Find Age</button>
      {person.age}
    </div>
  );
};

export default AgeApi;
