import React, { useState } from "react";
import img1 from "../img/carousel/1.jpg";
import img2 from "../img/carousel/2.jpg";
import img3 from "../img/carousel/3.jpg";
import img4 from "../img/carousel/4.jpg";
import img5 from "../img/carousel/5.jpg";
import img6 from "../img/carousel/6.jpg";
import img7 from "../img/carousel/7.jpg";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import FormPage from "./Pages/FormPage";
import { Helmet } from "react-helmet";

const LandingPage = () => {
  const [modal, setModal] = useState(false);

  const onclickHandler = () => {
    setModal(true);
  };

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        {/* Meta edge */}
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        {/* Meta description */}
        <meta
          name="description"
          content="Women who have faced any Sexual/Financial/Physical abuse, they can post their happenings on our website without revealing any personal data. Once the details are verified, the post will be published on the website. Furthermore, the action would be taken by the Govt for justice."
        />
        {/*  Keywords */}
        <meta
          name="keywords"
          content="women, Sexual abuse, Financial abuse, Physical abuse, post abuse, without revealing any personal data, the action would be taken by the Govt for justice, Sexual assault,Threatening, Child Sexual Abuse, Marital rape,Incest sexual intrusion between family members,Sexual Exploitaion By Professionals,Body shaming,Threats to publish nude photo's,Stalking,Pornographic images to threaten,Forcing to take part in pornography,Following or Tracking,Threatening to commit suicide,Forcing into prostitution,Sexual touching,Cyberstalking,Trolling,Insulting,Hidden Cameras,Touching in any way you doesn't want,Forcing into sexual acts,Slapping, Beating, Punching, Kicking, Burning, Stabbing,keeping you imprisoned,Sexual Violence Within Prisons,Same Gender Assault,Gang Rape,Destroying immigration papers,Not letting you to see your friends or family,"
        />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <title>Save women - saveoursouls.co.in</title>
      </Helmet>
      <StyledCarousel>
        <Carousel
          interval={10000}
          pause={false}
          controls={false}
          indicators={false}
        >
          <Carousel.Item>
            <div className="gradient">
              <img className="d-block w-100" src={img3} alt="women enjoying" />
            </div>
            <Carousel.Caption>
              <h3>No worries!</h3>
              <p>
                Do not bury your worries in silence anymore, Gather your
                strength and pull up your confidence, We are there for you.
              </p>
              <button onClick={onclickHandler}>Tell Us</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="gradient">
              <img className="d-block w-100" src={img2} alt="women crying" />
            </div>
            <Carousel.Caption>
              <h3>Your appearance is your choice</h3>
              <p>
                They have no right to criticize your looks, you are the goddess
                from heaven, you have to raise your head and we will carry your
                pride.
              </p>
              <button onClick={onclickHandler}>Tell Us</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="gradient">
              <img className="d-block w-100" src={img1} alt="women fighting" />
            </div>
            <Carousel.Caption>
              <h3>Threat alert!</h3>
              <p>
                We know you are afraid, we know that you are tired, we even know
                you are enduring it, no more tolerance to violence we'll cut it
                off.
              </p>
              <button onClick={onclickHandler}>Tell Us</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="gradient">
              <img className="d-block w-100" src={img4} alt="women abusing" />
            </div>
            <Carousel.Caption>
              <h3>Brave enough to fight</h3>
              <p>
                Outraging her modesty is a sin restrain from her with your dirty
                behaviour! approaching her with the bad intention? we won't let
                you do that!
              </p>
              <button onClick={onclickHandler}>Tell Us</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="gradient">
              <img className="d-block w-100" src={img5} alt="women playing" />
            </div>
            <Carousel.Caption>
              <h3>Your words would be acknowledged</h3>
              <p>
                We'll listen to your words, those words you cannot say loud to
                the world we'll bring them out.
              </p>
              <button onClick={onclickHandler}>Tell Us</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="gradient">
              <img className="d-block w-100" src={img6} alt="women dancing" />
            </div>
            <Carousel.Caption>
              <h3>We understand you</h3>
              <p>
                To the world, we make aware that women's harassment is an
                offence what happened to you should not repeat.
              </p>
              <button onClick={onclickHandler}>Tell Us</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="gradient">
              <img className="d-block w-100" src={img7} alt="women trolling" />
            </div>
            <Carousel.Caption>
              <h3>You deserved to fly freely </h3>
              <p>
                You are not a bird of a cage, cutting your wings is like killing
                your dreams, make your dreams come true with us.
              </p>
              <button onClick={onclickHandler}>Tell Us</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </StyledCarousel>
      {modal && <FormPage setModal={setModal} />}
    </>
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
    border: none;
    border-radius: 10px 0px 10px 0px;
    font-weight: 400;
    padding: 0.3rem 1.5rem;
    background: var(--blue);
    color: white;
    font-size: 0.9rem;
  }

  /* Gradient for carousel */
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

  @media screen and (max-width: 620px) {
    /* For iphone X */
    /* padding: 10px; */
    /*padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right); */

    padding-bottom: calc(1rem + env(safe-area-inset-bottom));
    /* padding-bottom: env(safe-area-inset-bottom);
    padding-top: env(safe-area-inset-top); */
  }
`;

export default LandingPage;
