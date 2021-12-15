import React from "react";
import styled from "styled-components";

const AboutCard = () => {
  return (
    <FlipCard>
      <div class='flip-card'>
        <div class='flip-card-inner'>
          <div class='flip-card-front'>
            <h2>What we doing?</h2>
          </div>
          <div class='flip-card-back'>
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </FlipCard>
  );
};

const FlipCard = styled.div`
  .flip-card {
    background-color: transparent;
    width: 100%;
    height: 100%;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front {
    margin-top: 8rem;
  }

  .flip-card-back {
    margin-top: 5rem;
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: transparent;
    color: black;
  }

  .flip-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
  }
`;
export default AboutCard;
