import React from "react";
import styled from "styled-components";
import map from "../img/map.svg";

const Map = ({ id }) => {
  return (
    <StyledMap id={id}>
      <div className='map'></div>
    </StyledMap>
  );
};

const StyledMap = styled.div`
  min-height: 70vh;
  background-image: url(${map});
  background-position: 45px -140px;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: white;
`;

export default Map;
