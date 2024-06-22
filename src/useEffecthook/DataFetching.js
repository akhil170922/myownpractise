import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  return (
    <div>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
};

export default DataFetching;
