import axios from "axios";
import React, { useEffect } from "react";

const Cocktail = () => {
  useEffect(() => {
    axios
      .get("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return <div>aa</div>;
};

export default Cocktail;
