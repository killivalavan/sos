import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFemale,
  faGlobeAsia,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { Fade } from "react-reveal";

const Counter = ({ counterSection }) => {
  return (
    <StyledCounter id={counterSection}>
      <div className='counter'>
        <div className='one'>
          <FontAwesomeIcon className='icon' size='3x' icon={faGlobeAsia} />
          <Fade>
            <h3>
              <CountUp duration={1.5} delay={0} start={1} end={11} /> +
            </h3>
          </Fade>
          <p>Countries with high crime rate in the world 2021</p>
        </div>
        <div className='two'>
          <FontAwesomeIcon className='icon' size='3x' icon={faFemale} />
          <Fade>
            <h3>
              {" "}
              <CountUp duration={1.5} delay={2} start={1} end={81} />%
            </h3>
          </Fade>
          <p>
            of women reported experiencing some form of sexual harassment in top
            countries
          </p>
        </div>
        <div className='three'>
          <FontAwesomeIcon className='icon' size='3x' icon={faUsers} />
          <Fade>
            <h3>
              734,
              <CountUp duration={1.5} delay={4} start={0} end={630} /> +
            </h3>
          </Fade>
          <p>people were raped only in the U.S as per report</p>
        </div>
      </div>
    </StyledCounter>
  );
};

const StyledCounter = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(13, 110, 253, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  color: white;
  text-align: center;
  padding: 2rem 0rem;
  .title {
    padding-top: 1rem;
  }
  .counter {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  .icon {
    margin-bottom: 1rem;
  }
  .one,
  .two,
  .three {
    width: 18rem;
  }
  @media screen and (max-width: 584px) {
    .icon {
      margin-top: 2.5rem;
    }
  }
`;
export default Counter;
