import React, { useState } from "react";
import styled from "styled-components";
import BurgerButton from "./components/BurgerButton";

function Navbar(): JSX.Element {
  const [clicked, setCliked] = useState(false);

  const handleClick = () => {
    //Cambia el estado de clicked
    setCliked(!clicked);
  };

  return (
    <>
      <NavbarContainer>
        <a className="logo" href="https://mdcastillo.me">
          <img src={process.env.PUBLIC_URL + "/images/hacker.png"} alt="logo" />
        </a>
        <div className={`links ${clicked ? "active" : ""}`.trimEnd()}>
          <a onClick={handleClick} href="/home">
            HOME
          </a>
          <a onClick={handleClick} href="/about">
            ABOUT
          </a>
          <a onClick={handleClick} href="/projects">
            PROJECTS
          </a>
          <a onClick={handleClick} href="/contact">
            CONTACT
          </a>
        </div>
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BackgroundDiv
          className={`initial ${clicked ? "active" : ""}`}
        ></BackgroundDiv>
      </NavbarContainer>
    </>
  );
}

export default Navbar;

// Styled components
const NavbarContainer = styled.nav`
  padding: 0.4rem;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  margin-top: 1rem;
  width: 100%;

  .logo {
    display: inline-block;
    margin-left: 2rem;
    padding: 10px;
    background-color: #212121;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    z-index: 1;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
  }

  .logo::before {
    content: "";
    z-index: -1;
    -webkit-transform: translateY(-100%) translateX(-100%);
    -ms-transform: translateY(-100%) translateX(-100%);
    transform: translateY(-100%) translateX(-100%);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    background-color: #40798c;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }

  .logo:hover::before {
    -webkit-transform: translateY(0) translateX(0);
    -ms-transform: translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
  }

  .logo:hover::after {
    -webkit-transform: translateY(100%) translateX(100%);
    -ms-transform: translateY(100%) translateX(100%);
    transform: translateY(100%) translateX(100%);
  }

  img {
    width: 3rem;
  }

  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }

  a {
    color: white;
    text-decoration: none;
    padding-right: 2rem;
  }

  .links {
    position: fixed;
    top: -100%;
    left: -100%;
    right: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.6s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      display: flex;

      a {
        display: inline-block;
        border: 4px solid #40798c;
        margin-right: 2rem;
        padding: 10px;
        background-color: #212121;
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
        z-index: 1;
        overflow: hidden;
        position: relative;
        border-radius: 4px;
      }

      a::before {
        content: "";
        z-index: -1;
        -webkit-transform: translateY(-100%) translateX(-100%);
        -ms-transform: translateY(-100%) translateX(-100%);
        transform: translateY(-100%) translateX(-100%);
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        background-color: #40798c;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
      }

      a:hover::before {
        -webkit-transform: translateY(0) translateX(0);
        -ms-transform: translateY(0) translateX(0);
        transform: translateY(0) translateX(0);
      }

      a:hover::after {
        -webkit-transform: translateY(100%) translateX(100%);
        -ms-transform: translateY(100%) translateX(100%);
        transform: translateY(100%) translateX(100%);
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1.5rem;
      color: white;
    }
  }

  .burger {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BackgroundDiv = styled.div`
  position: fixed;
  background-color: #222;
  top: -200%;
  left: -200%;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    position: fixed;
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
