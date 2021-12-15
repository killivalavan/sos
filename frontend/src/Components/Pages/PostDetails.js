import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
// Avatar
import Avatar, { genConfig } from "react-nice-avatar";
// Skeleton loading
import Skeleton from "@mui/material/Skeleton";
import { SpinnerTitle, SpinnerMsg } from "../Spinner";

const PostDetails = ({ id }) => {
  const [postDetails, setPostDetails] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [close, setClose] = useState(false);
  const history = useHistory();
  //   console.log(history.push("/Post"));
  const closeHandler = (e) => {
    if (e.target.classList.contains("shadow")) {
      history.push("/posts");
    }
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

  const getPostDetails = async () => {
    const { data } = await axios.get(`http://localhost:3001/posts/${id}`);
    setPostDetails(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPostDetails();
  }, []);

  return (
    <Shadow onClick={closeHandler} className='shadow'>
      <Details>
        <div className='avatar'>
          <Avatar style={{ width: "7rem", height: "7rem" }} {...config} />
          {!isloading ? <h4>{postDetails.name}</h4> : <Skeleton />}
        </div>
        <Info>
          {!isloading ? (
            <div className='item'>
              <p>Country</p>
              <h6>{postDetails.country}</h6>
            </div>
          ) : (
            <SpinnerTitle />
          )}
          {!isloading ? (
            <div className='item'>
              <p>City</p>
              <h6>{postDetails.city}</h6>
            </div>
          ) : (
            <SpinnerTitle />
          )}
          {!isloading ? (
            <div className='item'>
              <p>Locality</p>
              <h6>{postDetails.locality}</h6>
            </div>
          ) : (
            <SpinnerTitle />
          )}
          {!isloading ? (
            <div className='item'>
              <p>What happen</p>
              <h6>{postDetails.category}</h6>
            </div>
          ) : (
            <SpinnerTitle />
          )}
          {!isloading ? (
            <div className='item'>
              <p>When</p>
              <h6>{postDetails.date}</h6>
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
      </Details>
    </Shadow>
  );
};

const Shadow = styled.div`
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow-y: scroll;
`;

const Details = styled.div`
  margin-top: 1rem;
  background: white;
  color: black;
  min-height: 85vh;
  width: 60%;
  border-radius: 20px;
  position: absolute;
  left: 20%;
  top: 10%;
  z-index: 1;
  .avatar {
    background: white;
    border-radius: 100px;
    padding: 0.5rem;
    position: absolute;
    top: -10%;
    left: 45%;

    /* transform: translate(-10%, -45%); */
    h4 {
      text-align: center;
      margin-top: 1rem;
      font-size: 1.3rem;
      text-transform: capitalize;
      color: var(--blue);
    }
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  //FIXME:
  width: 80%;
  margin: 9rem auto 0rem auto;
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
`;

const Line = styled.div`
  border-bottom: 2px solid #f0f0f0;
  width: 60%;
  margin: 1rem auto;
`;

const Message = styled.div`
  /* overflow-y: scroll; */
  margin: 2rem auto;
  min-height: 40vh;
  width: 80%;
  font-size: 1rem;
  text-align: justify;

  h6 {
    color: var(--blue);
    text-align: left;
    margin-bottom: 2rem;
  }
`;

export default PostDetails;
