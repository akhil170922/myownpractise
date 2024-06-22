import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching3 = () => {
  const [post, setPost] = useState("");
  const [id, setId] = useState(1);
  const [idFromBtnClick, setIdFromBtnClick] = useState(1);
  const handleClick = () => {
    setIdFromBtnClick(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromBtnClick]);
  return (
    <div>
      <input
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button onClick={handleClick}>fetch data</button>
      {post.title}
    </div>
  );
};

export default DataFetching3;
