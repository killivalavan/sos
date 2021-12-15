import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Message from "../Message";
import { useLocation } from "react-router-dom";
import PostDetails from "./PostDetails";
import { SpinnerPosts, SpinnerMain } from "../Spinner";

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  // Get Posts
  const getPosts = async () => {
    const { data } = await axios.get("http://localhost:3001/posts");
    setPosts(data);
    setIsLoading(false);
  };
  // To get pathID
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {pathId && <PostDetails id={pathId} />}
      <StyledPost>
        <StyledMessage>
          {posts.map((post) => (
            <>
              {!isLoading && (
                <Message
                  key={post._id}
                  id={post._id}
                  name={post.name}
                  message={post.message}
                  date={post.updatedAt}
                />
              )}
            </>
          ))}
        </StyledMessage>
        {isLoading && <SpinnerMain />}
      </StyledPost>
    </>
  );
};

const StyledPost = styled.div`
  min-height: 90vh;
  width: 100%;
  background: #f2f2f2;
  padding: 4rem 0rem 2rem 0rem;
`;

const StyledMessage = styled.div`
  width: 80%;
  margin: 0rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, auto));
  grid-gap: 1.5rem;
`;

export default Posts;
