import React from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import styled from "styled-components";

const Avatarr = () => {
  //Avatar
  const config = genConfig({
    sex: "woman",
    bgColor: "#2F80ED",
    mouthStyle: "peace",
    glassesStyle: "none",
    isGradient: "true",
    eyeStyle: "circle",
  });

  return (
    <div>
      <Avatar style={{ width: "3rem", height: "3rem" }} {...config} />
    </div>
  );
};

const StyledAvatar = styled.div`
  width: 5rem;
  height: 5rem;
`;

export default Avatarr;
