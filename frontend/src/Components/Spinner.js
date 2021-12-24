import React from "react";
import styled from "styled-components";
import spinner from "../img/spinner.svg";

// Skeleton loading
import Skeleton from "@mui/material/Skeleton";

export const SpinnerTitle = () => {
  return (
    <StyledSpinner>
      <div className='spinner'>
        <Skeleton
          className='spinnerMsg'
          sx={{ mb: 1 }}
          variant='p'
          animation='wave'
        />
        <Skeleton
          variant='rectangular'
          animation='wave'
          width={80}
          height={10}
        />
      </div>
    </StyledSpinner>
  );
};

const StyledSpinner = styled.div`
  .spinnerMsg {
    width: 100px;
    height: 10px;
  }
  @media screen and (max-width: 678px) {
    .spinnerMsg {
      margin-top: 0rem;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem 0rem;
  }
`;

export const SpinnerMsg = () => {
  return (
    <div>
      <MsgSpinner>
        <Skeleton
          sx={{ mt: 6 }}
          variant='rectangular'
          animation='wave'
          height={10}
        />
        <Skeleton
          sx={{ mt: 2 }}
          variant='rectangular'
          animation='wave'
          height={10}
        />
        <Skeleton
          sx={{ mt: 2 }}
          variant='rectangular'
          animation='wave'
          height={10}
        />
        <Skeleton
          sx={{ mt: 2 }}
          variant='rectangular'
          animation='wave'
          height={10}
        />
        <Skeleton
          sx={{ mt: 2 }}
          variant='rectangular'
          animation='wave'
          height={10}
        />
        <Skeleton
          sx={{ mt: 2 }}
          variant='rectangular'
          animation='wave'
          height={10}
        />
        <Skeleton
          className='lastLine'
          sx={{ mt: 2 }}
          variant='rectangular'
          animation='wave'
          height={10}
        />
      </MsgSpinner>
    </div>
  );
};

const MsgSpinner = styled.div`
  .lastLine {
    width: 90%;
  }
  @media screen and (max-width: 678px) {
    .lastLine {
      width: 50%;
    }
  }
`;

// Spinner for Posts
export const SpinnerPosts = () => {
  return (
    <Spinner>
      <Skeleton className='avatar' animation='wave' variant='circular' />
      <div className='content'>
        <Skeleton animation='wave' className='title' />
        <Skeleton
          animation='wave'
          className='body'
          variant='rectangular'
          width='100%'
        />
      </div>
    </Spinner>
  );
};

const Spinner = styled.div`
  display: flex;
  margin: 0.5rem 1rem;
  z-index: 2;
  .content {
    margin-left: 0.7rem;
  }
  .avatar {
    width: 2.5rem;
    height: 2.5rem;
  }
  .title {
    width: 15rem;
    height: 1rem;
    margin-bottom: 0.5rem;
  }
  .body {
    height: 1.8rem;
  }
`;

export const SpinnerMain = () => {
  return (
    <SpinnerImg>
      <img src={spinner} alt='Loading' />
    </SpinnerImg>
  );
};

const SpinnerImg = styled.div`
  text-align: center;
  margin-top: 5rem;
  img {
    width: 5rem;
  }
`;
