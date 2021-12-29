import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import styled from "styled-components";
import image from "../../img/back.jpg";
import back3 from "../../img/back3.jpg";
import AboutCard from "../AboutCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import Counter from "../Counter";
import Map from "../Map";
import { useHistory } from "react-router-dom";

const About = () => {
  // To hide scrolldown icon
  const { hash } = useLocation();

  //Scroll Fix
  const { location } = useHistory();
  if (location.pathname === "/about") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  return (
    <Shadow>
      <Container>
        <SectionOne id='SectionOne'>
          <div className='title'>
            <h4>
              <FontAwesomeIcon className='icon' icon={faQuoteLeft} />
              When it comes to abuse, you believe there’s no way out. There is
              always help. There is always a way out{" "}
              <FontAwesomeIcon className='icon' icon={faQuoteRight} />
            </h4>
          </div>
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

        <NextSection>
          <Map id='NextSection' />
          <Counter />
        </NextSection>

        <SectionTwo id='SectionTwo'>
          <div className='box Our'>
            <h6>
              <span>Our</span> motto?
              <div className='line'></div>
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              facilis? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Labore, nam!
            </p>
          </div>
          <div className='box what'>
            <h6>
              <span>What</span> we do?
              <div className='line'></div>
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              facilis?
            </p>
          </div>
          <div className='box how'>
            <h6>
              <span>How</span> did it work?
              <div className='line'></div>
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
              <div className='line'></div>
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
              <div className='line'></div>
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
              <div className='line'></div>
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              facilis?
            </p>
          </div>
          <div className='box just'>
            <h6>
              <span>Made</span> for Women
              <div className='line'></div>
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              facilis?
            </p>
          </div>

          <div className='box just'>
            <h6>
              <span>Attach</span> your evidence!
              <div className='line'></div>
            </h6>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              facilis?
            </p>
          </div>
          <div className='box just'>
            <h6>
              <span>Contact</span> us!
              <div className='line'></div>
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              facilis?
            </p>
          </div>
        </SectionTwo>
        <Footer />
      </Container>
    </Shadow>
  );
};

const Shadow = styled.div`
  background: #f2f2f2;
  min-height: 90vh;
  width: 100%;
`;
const Container = styled.div`
  height: 90vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;
  @media screen and (max-width: 866px) {
    scroll-snap-type: none;
    overflow-y: none;
  }
`;

const SectionOne = styled.div`
  scroll-snap-align: start;
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
  .title {
    color: white;
    min-height: 90vh;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f0f0f0;
    display: none;
    h4 {
    }
    .icon {
      margin: 0rem 0.9rem;
    }
  }
  @media screen and (max-width: 866px) {
    background-image: linear-gradient(
        180deg,
        rgba(80, 101, 117, 0.14056960674894958) 0%,
        rgba(21, 26, 43, 0.3590570017069328) 0%,
        rgba(21, 30, 61, 0.4038749288778011) 100%
      ),
      url(${back3});
    .title {
      display: flex;
    }
  }
`;
const NextSection = styled.div`
  scroll-snap-align: start;
  min-height: 80vh;
`;

const SectionTwo = styled.div`
  scroll-snap-align: start;
  min-height: 70vh;
  width: 90%;
  margin: auto;
  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, auto));
  grid-gap: 2rem;
  justify-items: center;
  .box {
    height: 23vh;
    width: 100%;
    background: white;
    border-left: 7px solid white;
    padding: 1rem 1rem 0rem 1rem;
    transition: all 0.5s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
    &:hover {
      box-shadow: rgba(43, 129, 238, 0.5) 0px 3px 8px;
      border-left: 7px solid var(--blue);
    }
  }
  p {
    font-size: 0.9rem;
    color: #696969;
  }
  h6 {
    font-size: 1.2rem;
  }
  .box.Our {
    border-left: 7px solid var(--blue);
  }
  @media screen and (max-width: 468px) {
    grid-template-columns: none;
    .box {
      height: 25vh;
      width: 20rem;
    }
  }
`;

const Heart = styled.div`
  position: absolute;
  right: 25%;
  top: 35%;
  transform: translate(25%, 35%);

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
  @media screen and (max-width: 866px) {
    display: none;
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

export default About;
