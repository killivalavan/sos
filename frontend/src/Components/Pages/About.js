import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import styled from "styled-components";
import image from "../../img/back.jpg";
import AboutCard from "../AboutCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import Counter from "../Counter";
import Map from "../Map";
const About = () => {
  // To hide scrolldown icon
  const { hash } = useLocation();

  return (
    <Shadow>
      <SectionOne id='SectionOne'>
        <Heart>
          <div className='heart'></div>
        </Heart>
        <Arrow>
          <div
            className={` arrow bounce ${
              hash === "#NextSection" ? "inactive" : "active"
            }`}
          >
            <a href='#NextSection'>
              <FontAwesomeIcon size='2x' icon={faAngleDoubleDown} />
            </a>
          </div>
        </Arrow>
      </SectionOne>
      <Map id='NextSection' />
      <Counter />

      <SectionTwo id='SectionTwo'>
        <div className='box Our'>
          <h6>
            <span>Our</span> motto?
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            facilis? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Labore, nam!
          </p>
        </div>
        <div className='box what'>
          <h6>
            <span>What</span> are we doing?
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            facilis?
          </p>
        </div>
        <div className='box how'>
          <h6>
            <span>How</span> did it work?
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            facilis? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Labore, nam!
          </p>
        </div>
        <div className='box trust'>
          <h6>
            <span>Trust</span> us?
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            facilis? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Labore, nam!
          </p>
        </div>
        <div className='box help'>
          <h6>
            <span>We'll</span> shout for you
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            facilis? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Labore, nam!
          </p>
        </div>
        <div className='box just'>
          <h6>
            <span>Just</span> 5 minutes!
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            facilis?
          </p>
        </div>
        <div className='box just'>
          <h6>
            <span>Made</span> for Women
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            facilis?
          </p>
        </div>

        <div className='box just'>
          <h6>
            <span>Attach</span> your evidence!
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            facilis?
          </p>
        </div>
        <div className='box just'>
          <h6>
            <span>Contact</span> us!
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            facilis?
          </p>
        </div>
      </SectionTwo>
      <Footer />
    </Shadow>
  );
};

const Shadow = styled.div`
  background: #f2f2f2;
  min-height: 90vh;
  width: 100%;
`;

const SectionOne = styled.div`
  min-height: 90vh;
  background-image: url(${image});
  background-color: #eeede8;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .scroll {
    position: absolute;
    bottom: 15%;
    right: 2%;
  }
  h3 {
    position: absolute;
    right: 0;
    top: 5%;
  }
`;

const Heart = styled.div`
  position: absolute;
  right: 25%;
  top: 35%;
  transform: translate(-35%, 25%);

  .heart {
    height: 70px;
    width: 70px;
    background: #f20044;
    position: relative;
    transform: rotate(-45deg);
    box-shadow: -10px 10px 90px #f20044;
    animation: heart 0.6s linear infinite;
  }

  .heart::before {
    content: "";
    position: absolute;
    height: 70px;
    width: 70px;
    background: #f20044;
    top: -50%;
    border-radius: 50px;
    box-shadow: 10px -10px 90px #f20044;
  }
  .heart::after {
    content: "";
    position: absolute;
    height: 70px;
    width: 70px;
    background: #f20044;
    right: -50%;
    border-radius: 50px;
    box-shadow: 10px 10px 90px #f20044;
  }

  @keyframes heart {
    0% {
      transform: rotate(-45deg) scale(1.06);
    }
    80% {
      transform: rotate(-45deg) scale(1);
    }
    100% {
      transform: rotate(-45deg) scale(1);
    }
  }
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 0;
  right: 3%;
  .inactive {
    display: none;
  }
  a {
    color: var(--blue);
    text-decoration: none;
  }

  .arrow {
    text-align: center;
    margin: 8% 0;
  }
  .bounce {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

const SectionTwo = styled.div`
  min-height: 90vh;
  width: 90%;
  margin: auto;
  padding-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, auto));
  grid-gap: 2rem;
  grid-column-gap: 3rem;
  .box {
    min-height: 20vh;
    width: 28rem;
    background: white;
    border-left: 7px solid var(--blue);
    padding: 1rem 1rem 0rem 1rem;
    transition: all 0.5s ease-in-out;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    &:hover {
      border-left: 7px solid white;
      box-shadow: 0 8px 16px 0 rgba(43, 129, 238, 0.5);
    }
  }
  p {
    font-size: 0.9rem;
  }
  h6 {
    font-size: 1.2rem;
  }
`;

export default About;
