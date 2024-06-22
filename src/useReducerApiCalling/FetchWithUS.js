import React, { useEffect, useState } from "react";
import axios from "axios";
const FetchWithUS = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setError("");
        setPost(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError("something went wrong");
      });
  }, []);
  return (
    <div>
      {loading ? "loading" : post.title}
      {error ? error : null}
    </div>
  );
};

export default FetchWithUS;
