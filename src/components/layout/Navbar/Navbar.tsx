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
        <h2>
          Navbar <span>Responsive</span>
        </h2>
        <div className={`links ${clicked ? "active" : ""}`.trimEnd()}>
          <a onClick={handleClick} href="/">
            Home
          </a>
          <a onClick={handleClick} href="/">
            About
          </a>
          <a onClick={handleClick} href="/">
            Projects
          </a>
          <a onClick={handleClick} href="/">
            Contact
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
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

  .links {
    position: absolute;
    top: -50%;
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
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
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
  position: absolute;
  background-color: #222;
  top: -100%;
  left: -100%;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
