import React from "react";
import img1 from "../img/carousel/1.jpg";
import img2 from "../img/carousel/2.jpg";
import img3 from "../img/carousel/3.jpg";
import img4 from "../img/carousel/4.jpg";
import img5 from "../img/carousel/5.jpg";
import img6 from "../img/carousel/6.jpg";
import img7 from "../img/carousel/7.jpg";
import img8 from "../img/carousel/8.jpg";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import styled from "styled-components";

const LandingPage = () => {
  return (
    <StyledCarousel>
      <Carousel pause={false} controls={false} indicators={false}>
        <Carousel.Item>
          <div className='gradient'>
            <img className='d-block w-100' src={img1} alt='First slide' />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button>Click Here</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='gradient'>
            <img className='d-block w-100' src={img2} alt='Second slide' />
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Click Here</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='gradient'>
            <img className='d-block w-100' src={img3} alt='Third slide' />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button>Click Here</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='gradient'>
            <img className='d-block w-100' src={img4} alt='Third slide' />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button>Click Here</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='gradient'>
            <img className='d-block w-100' src={img5} alt='Third slide' />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button>Click Here</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='gradient'>
            <img className='d-block w-100' src={img6} alt='Third slide' />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button>Click Here</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='gradient'>
            <img className='d-block w-100' src={img7} alt='Third slide' />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button>Click Here</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='gradient'>
            <img className='d-block w-100' src={img8} alt='Third slide' />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button>Click Here</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </StyledCarousel>
  );
};

const StyledCarousel = styled.div`
  img {
    height: 90vh;
    object-fit: cover;
    z-index: -1;
    display: block;
    width: auto;
    position: relative;
  }
  button {
    /* border: 3px solid white; */
    border: none;
    font-weight: 500;
    padding: 0.4rem 1.4rem;
    background: var(--blue);
    color: white;
  }
  .gradient {
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ); /* FF3.6+ */
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, rgba(0, 0, 0, 0.65)),
      color-stop(100%, rgba(0, 0, 0, 0))
    ); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ); /* Opera 11.10+ */
    background: -ms-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ); /* IE10+ */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ); /* W3C */
    filter: progid:DXgradientTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
  }
`;

export default LandingPage;
