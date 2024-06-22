import React from "react";
const ListItem = ({ index, name }) => {
  return (
    <>
      <li key={index}>{name}</li>
    </>
  );
};

export default ListItem;
