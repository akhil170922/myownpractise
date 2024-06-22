import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching2 = () => {
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
        console.log(res.data);
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromBtnClick]);
  return (
    <>
      <div>
        <input value={id} onChange={(e) => setId(e.target.value)}></input>
      </div>
      <button type="button" onClick={handleClick}>
        fetch post
      </button>

      <div>{post.title}</div>
    </>
  );
};

export default DataFetching2;
