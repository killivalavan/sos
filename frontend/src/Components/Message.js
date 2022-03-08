import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
// Avatar
import Avatar, { genConfig } from "react-nice-avatar";

//Time Stramp
import ReactTimeAgo from "react-time-ago";

const Message = ({ id, name, message, date, verified }) => {
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
      <Card layoutId={id}>
        <div className="avatar">
          <Avatar style={{ width: "3rem", height: "3rem" }} {...config} />
        </div>
        <div className="card-body">
          {!verified && <p className="verify">Pending Review!</p>}
          <div className={`${verified ? "dontBlur" : "blur"}`}>
            <div className="name">
              <Link className="more-info" to={`/posts/${id}`}>
                {name}
              </Link>
              <span className="date">
                <ReactTimeAgo date={Date.parse(date)} locale="en-US" />
              </span>
            </div>
            <div className="message">
              {message.substring(0, 200)}
              {message.length >= 150 && (
                <Link className="read-more" to={`/posts/${id}`}>
                  {" "}
                  Read more
                </Link>
              )}
            </div>
            <div className="message-mobile-view">
              {message.substring(0, 245)}
              {message.length >= 160 && (
                <Link className="read-more" to={`/posts/${id}`}>
                  {" "}
                  Read more
                </Link>
              )}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

const Card = styled.div`
  position: relative;
  height: 15vh;
  width: 23rem;
  background: white;
  display: flex;
  padding: 0rem 0.6rem;
  justify-content: space-between;
  font-size: 0.7rem;
  border-radius: 10px;
  transition: transform 0.5s ease-out;
  &:hover {
    transform: translate(0px, -5px);
  }
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
    .more-info {
      color: var(--blue);
      &:hover {
        text-decoration: underline;
        text-underline-offset: 1px;
      }
    }
    .message-mobile-view {
      display: none;
    }
    .message {
      display: block;
    }
    /* To blur */
    .blur {
      -webkit-filter: blur(4px);
      -moz-filter: blur(4px);
      -o-filter: blur(4px);
      -ms-filter: blur(4px);
      filter: blur(4px);
      pointer-events: none;
    }
    .verify {
      position: absolute;
      top: 40%;
      left: 30%;
      font-size: 0.9rem;
      font-style: italic;
      color: black;
      padding: 0.2rem 2rem;
    }
  }

  @media screen and (max-width: 678px) {
    height: 20vh;
    width: 20rem;
    .card-body {
      .message-mobile-view {
        display: block;
      }
      .message {
        display: none;
      }
    }
  }
`;

export default Message;
