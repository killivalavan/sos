import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import sign from "../img/female-sign.png";

const Header = () => {
  return (
    <StyledNav>
      <div id='logo'>
        <Link to='/'>
          <img src={logo} alt='' />
          SOS
        </Link>
      </div>
      <ul>
        <li>
          <a href='#'>write us</a>
        </li>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  flex-wrap: wrap;
  font-weight: 600;

  ul {
    display: flex;
    flex: 1 1 10rem;
    justify-content: space-between;
    margin-bottom: 0;
    align-items: center;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  #logo {
    display: flex;
    align-items: center;
    flex: 4 1 10rem;
    font-size: 2rem;
    width: 2rem;
    img {
      width: 2rem;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 920px) {
    display: fixed;
  }
`;

export default Header;
