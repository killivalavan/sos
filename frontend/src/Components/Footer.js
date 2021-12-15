import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div className='content'>
        <div className='copyright'>
          <span>&copy;</span>
          <div>SOS 2022. All Rights Reserved.</div>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  margin-top: 3rem;
  background: var(--blue);
  color: white;
  .content {
    width: 80%;
    margin: auto;
  }
  .copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    span {
      font-size: 1rem;
      margin-right: 0.2rem;
    }
  }
`;

export default Footer;
