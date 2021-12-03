import React, { useState, useEffect } from "react";
import icon from "../img/thank-icon.png";
import styled from "styled-components";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Thank = ({ setCloseIcon }) => {
  useEffect(() => {
    setCloseIcon(false);
  }, []);

  //To check image loaded
  const [load, setLoad] = useState(false);

  return (
    <>
      <StyledThank>
        <img onLoad={() => setLoad(true)} src={icon} alt='Thanks Icon' />
        {load ? (
          <div className='text'>
            <h3>Thank You!</h3>
            <p>
              your submission has been received, We'll review them and post!
            </p>
          </div>
        ) : (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
      </StyledThank>
    </>
  );
};

const StyledThank = styled.div`
  text-align: center;
  margin-top: 0.7rem;
  animation-name: shine;
  h3 {
    margin: 0.8rem 0rem;
  }
  img {
    width: 5rem;
  }
`;
export default Thank;
