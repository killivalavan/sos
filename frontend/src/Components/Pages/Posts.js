import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const post = await axios.get("http://localhost:3001/posts");
    setPosts(post.data);
  };

  useEffect(() => {
    getPosts();
  }, [posts]);

  console.log(posts);
  return (
    <div>
      <h3>Posts</h3>
    </div>
  );
};

export default Posts;
