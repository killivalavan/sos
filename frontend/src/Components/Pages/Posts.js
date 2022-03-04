import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Message from "../Message";
import { useLocation } from "react-router-dom";
import PostDetails from "./PostDetails";
import { SpinnerPosts, SpinnerMain } from "../Spinner";
import LazyLoad from "react-lazyload";
import { Helmet } from "react-helmet";

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  // Get Posts
  const getPosts = async () => {
    const { data } = await axios.get("/posts/");
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
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        {/* Meta edge */}
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        {/* Meta description */}
        <meta
          name="description"
          content="Women who have faced any Sexual/Financial/Physical abuse, they can post their happenings on our website without revealing any personal data. Once the details are verified, the post will be published on the website. Furthermore, the action would be taken by the Govt for justice."
        />
        {/*  Keywords */}
        <meta
          name="keywords"
          content="women, Sexual abuse, Financial abuse, Physical abuse, post abuse, without revealing any personal data, the action would be taken by the Govt for justice, Sexual assault,Threatening, Child Sexual Abuse, Marital rape,Incest sexual intrusion between family members,Sexual Exploitaion By Professionals,Body shaming,Threats to publish nude photo's,Stalking,Pornographic images to threaten,Forcing to take part in pornography,Following or Tracking,Threatening to commit suicide,Forcing into prostitution,Sexual touching,Cyberstalking,Trolling,Insulting,Hidden Cameras,Touching in any way you doesn't want,Forcing into sexual acts,Slapping, Beating, Punching, Kicking, Burning, Stabbing,keeping you imprisoned,Sexual Violence Within Prisons,Same Gender Assault,Gang Rape,Destroying immigration papers,Not letting you to see your friends or family,"
        />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <title>Posts - saveoursouls.co.in</title>
      </Helmet>
      {pathId && <PostDetails id={pathId} />}
      <StyledPost>
        <StyledMessage>
          {posts.map((post) => (
            <LazyLoad
              key={post._id}
              throttle={200}
              height={200}
              offset={[100, 0]}
              placeholder={<SpinnerPosts />}
            >
              {!isLoading && (
                <Message
                  key={post._id}
                  id={post._id}
                  name={post.name}
                  message={post.message}
                  date={post.updatedAt}
                />
              )}
            </LazyLoad>
          ))}
        </StyledMessage>
        {isLoading && <SpinnerMain />}
      </StyledPost>
    </>
  );
};

const StyledPost = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #f2f2f2;
  padding: 2rem 0rem 2rem 0rem;
`;

const StyledMessage = styled.div`
  width: 80%;
  margin: 0rem auto;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(290px, auto));
  grid-gap: 1.5rem;
  @media screen and (max-width: 1300px) {
    width: 90%;
  }
`;

export default Posts;
