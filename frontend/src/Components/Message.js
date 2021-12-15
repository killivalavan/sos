import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
// Avatar
import Avatar, { genConfig } from "react-nice-avatar";

//Time Stramp
import ReactTimeAgo from "react-time-ago";

const Message = ({ id, name, message, date }) => {
  //Avatar
  const config = genConfig({
    sex: "woman",
    bgColor: "#2F80ED",
    mouthStyle: "peace",
    glassesStyle: "none",
    isGradient: "true",
    eyeStyle: "circle",
  });

  // Scroll Fix
  const { location } = useHistory();
  if (location.pathname === "/posts") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      <Card>
        <div className='avatar'>
          <Avatar style={{ width: "3rem", height: "3rem" }} {...config} />
        </div>
        <div className='card-body'>
          <div className='name'>
            <Link className='more-info' to={`/posts/${id}`}>
              {name}
            </Link>
            <span className='date'>
              <ReactTimeAgo date={Date.parse(date)} locale='en-US' />
            </span>
          </div>
          <div className='message'>
            {message.substring(0, 180)}
            {message.length >= 150 && (
              <Link className='read-more' to={`/posts/${id}`}>
                {" "}
                Read more
              </Link>
            )}
          </div>
        </div>
      </Card>
    </>
  );
};

const Card = styled.div`
  height: 15vh;
  width: 23rem;
  background: white;
  display: flex;
  padding: 0rem 0.6rem;
  justify-content: space-between;
  font-size: 0.7rem;
  border-radius: 10px;
  .avatar {
    margin-top: 0.6rem;
  }
  .card-body {
    padding: 0.6rem;
    .name {
      color: #2f80ed;
      font-size: 1rem;
      font-weight: 600;
      text-transform: capitalize;
      span {
        margin-left: 0.8rem;
        font-size: 0.6rem;
        font-weight: 400;
        color: #a0a0a0;
        text-transform: lowercase;
      }
    }
    .read-more {
      /* font-size: 0.6rem; */
    }
    .more-info {
      &:hover {
        color: var(--blue);
        text-decoration: underline;
        text-underline-offset: 1px;
      }
    }
  }
`;

export default Message;
