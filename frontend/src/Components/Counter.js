import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFemale,
  faGlobeAsia,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <StyledCounter>
      <div className='counter'>
        <div className='one'>
          <FontAwesomeIcon className='icon' size='3x' icon={faGlobeAsia} />
          <h3>
            <CountUp duration={1.5} delay={0} start={1} end={11} />+
          </h3>
          <p>Countries with high crime rate in the world 2021</p>
        </div>
        <div className='two'>
          <FontAwesomeIcon className='icon' size='3x' icon={faFemale} />
          <h3>
            {" "}
            <CountUp duration={1.5} delay={2} start={1} end={81} />%
          </h3>
          <p>
            of women reported experiencing some form of sexual harassment in top
            countries
          </p>
        </div>
        <div className='three'>
          <FontAwesomeIcon className='icon' size='3x' icon={faUsers} />
          <h3>
            734,
            <CountUp duration={1.5} delay={4} start={0} end={630} />+
          </h3>
          <p>people were raped only in the U.S as per report</p>
        </div>
      </div>
    </StyledCounter>
  );
};

const StyledCounter = styled.div`
  background: rgba(43, 129, 238, 0.5);
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
    /* margin: 2rem 0rem; */
  }
  .icon {
    margin-bottom: 1rem;
  }
  .one,
  .two,
  .three {
    width: 18rem;
  }
`;
export default Counter;
