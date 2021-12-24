import React, { useState } from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import sign from "../img/female-sign.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const onClickHandler = () => {
    setOpen(!open);
  };

  //Scroll Fix
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <StyledNav>
      <div onClick={onClickHandler} id='logo'>
        <Link to='/'>
          <img src={logo} alt='' />
          SOS
        </Link>
        {!open && (
          <svg
            onClick={onClickHandler}
            xmlns='http://www.w3.org/2000/svg'
            className='hamburger'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        )}
        {open && (
          <svg
            onClick={onClickHandler}
            className={`close ${open ? "active" : ""}`}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        )}
      </div>
      <ul
        onClick={onClickHandler}
        className={`nav-links ${open ? "active" : ""}`}
      >
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
  color: var(--blue);
  svg {
    width: 3rem;
    color: var(--blue);
    float: right;
    display: none;
  }
  .nav-links {
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
    justify-content: space-between;
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
    .nav-links {
      z-index: 1;
      background-color: white;
      position: fixed;
      width: 100%;
      left: 0;
      top: 10vh;
      height: 100vh;
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: repeat(3, 60px);
      justify-items: center;
      padding-top: 2rem;
      transform: translateX(100%);
      transition: 0.5s ease-in;
      li {
        margin: 0.7rem 0rem;
      }
    }
    .hamburger {
      display: block;
    }
    .close.active {
      display: block;
    }

    .nav-links.active {
      transform: translateX(0%);
    }
  }
`;

export default Header;
