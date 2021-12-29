import React from "react";
import styled from "styled-components";
import map from "../img/map.png";

const Map = ({ id }) => {
  return (
    <StyledMap id={id}>
      <div className='map'></div>
    </StyledMap>
  );
};

const StyledMap = styled.div`
  min-height: 60vh;
  background-image: url(${map});
  background-position: 10px 0px;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: white;
  @media screen and (max-width: 1000px) {
    background-position: -130px 10px;
  }
  @media screen and (max-width: 678px) {
    display: none;
  }
`;

export default Map;
