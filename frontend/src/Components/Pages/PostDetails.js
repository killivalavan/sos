import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
// Avatar
import Avatar, { genConfig } from "react-nice-avatar";
// Skeleton loading
import Skeleton from "@mui/material/Skeleton";
import { SpinnerTitle, SpinnerMsg } from "../Spinner";

// Framer-motion
import { motion } from "framer-motion";

//To change date format
import moment from "moment";

// SEO
import { Helmet } from "react-helmet";

const PostDetails = ({ id }) => {
  const [postDetails, setPostDetails] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const history = useHistory();

  // shadow closer
  const closeHandler = (e) => {
    if (e.target.classList.contains("shadow")) {
      history.push("/posts");
    }
  };
  // Close icon
  const closeIconHandler = () => {
    history.push("/posts");
  };

  //Avatar
  const config = genConfig({
    sex: "woman",
    bgColor: "#2F80ED",
    mouthStyle: "peace",
    glassesStyle: "none",
    isGradient: "true",
    eyeStyle: "circle",
  });

  useEffect(() => {
    const getPostDetails = async () => {
      const { data } = await axios.get(`/posts/${id}`);
      setPostDetails(data);
      setIsLoading(!isloading);
    };
    getPostDetails();
  }, []);

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/logo.png" />
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
        <title>Save women - saveoursouls.co.in</title>
      </Helmet>
      <Shadow onClick={closeHandler} className="shadow">
        <Details>
          <Conent>
            <div onClick={closeIconHandler} className="close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="avatar">
              <Avatar style={{ width: "7rem", height: "7rem" }} {...config} />
            </div>
            <div className="name">
              {!isloading ? (
                <h4>{postDetails.name}</h4>
              ) : (
                <Skeleton sx={{ mx: "auto", mt: 10 }} width={100} />
              )}
            </div>
            <Info>
              {/* <div> */}
              {!isloading ? (
                <div className="item">
                  <p>Country</p>
                  <h6>{postDetails.country}</h6>
                </div>
              ) : (
                <SpinnerTitle />
              )}
              {!isloading ? (
                <div className="item">
                  <p>City</p>
                  <h6>{postDetails.city}</h6>
                </div>
              ) : (
                <SpinnerTitle />
              )}
              {!isloading ? (
                <div className="item">
                  <p>Locality</p>
                  <h6>{postDetails.locality}</h6>
                </div>
              ) : (
                <SpinnerTitle />
              )}
              {/* </div> */}
              {!isloading ? (
                <div className="item category">
                  <p>What happen</p>
                  <h6>{postDetails.category}</h6>
                </div>
              ) : (
                <SpinnerTitle />
              )}
              {!isloading ? (
                <div className="item">
                  <p>When</p>
                  <h6>{moment(postDetails.date).format("MMM DD, YYYY")}</h6>
                </div>
              ) : (
                <SpinnerTitle />
              )}
            </Info>
            <Line />
            <Message>
              {!isloading ? <h6>Mesage</h6> : <SpinnerTitle />}
              {!isloading ? <p>{postDetails.message}</p> : <SpinnerMsg />}
            </Message>
          </Conent>
        </Details>
      </Shadow>
    </>
  );
};

const Shadow = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow-y: scroll;
`;

const Details = styled(motion.div)`
  background: white;
  margin-top: 1rem;
  color: black;
  min-height: 85vh;
  width: 60%;
  border-radius: 10px;
  position: absolute;
  left: 20%;
  top: 10%;
  z-index: 1;
  @media screen and (max-width: 678px) {
    left: 8%;
    width: 85%;
  }
`;

const Conent = styled.div`
  .avatar {
    background: white;
    border-radius: 100px;
    padding: 0.5rem;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }
  .name {
    text-align: center;
    margin-top: 4.5rem;
    text-transform: capitalize;
    font-size: 1.3rem;
    color: var(--blue);
  }
  .close {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(130%, -130%);
    width: 2rem;
    height: 2rem;
    color: #c0c0c0;
    cursor: pointer;
    &:hover {
      color: #c0c0c0;
      opacity: 0.5;
    }
  }
  @media screen and (max-width: 678px) {
    .close {
      top: -4%;
      right: -7%;
      transform: translate(4%, 7%);
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: black;
  width: 80%;
  margin: 3rem auto 0rem auto;
  padding-bottom: 2rem;
  .item {
    text-align: center;
    p {
      font-size: 0.9rem;
      margin-bottom: 0rem;
      font-weight: 500;
    }
    h6 {
      color: var(--blue);
      text-transform: capitalize;
    }
  }
  .category {
    max-width: 30%;
  }
  @media screen and (max-width: 678px) {
    display: block;
    margin-top: 2rem;

    p {
      margin: 1.3rem 0rem;
    }
    .category {
      max-width: 100%;
    }
  }
`;

const Line = styled.div`
  border-bottom: 2px solid #f0f0f0;
  width: 60%;
  margin: 1rem auto;
  @media screen and (max-width: 678px) {
    margin: 0rem auto;
  }
`;

const Message = styled.div`
  margin: 2rem auto;
  min-height: 40vh;
  width: 80%;
  font-size: 1rem;

  h6 {
    color: var(--blue);
    text-align: left;
    margin-bottom: 2rem;
  }
  p {
    /* color: #696969; */
  }
`;

export default PostDetails;
