import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="content">
        <div className="copyright">
          <div>
            <span>&copy;</span>SOS 2022. All Rights Reserved.
          </div>
        </div>
        <div className="quotes">
          Made with <span>❤️</span> for Women
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  scroll-snap-align: end;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(13, 110, 253, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  margin-top: 3rem;
  color: white;
  font-weight: 400;
  .content {
    min-height: 4vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 4rem;
    font-size: 0.8rem;
  }
  .copyright {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 0.9rem;
      margin-right: 0.2rem;
    }
  }
  .quotes {
    font-style: italic;
    span {
      font-style: normal;
    }
  }
  @media screen and (max-width: 468px) {
    .content {
      min-height: 7vh;
      justify-content: center;
      font-size: 0.9rem;
      padding-top: 0.4rem;
    }
  }
`;

export default Footer;
