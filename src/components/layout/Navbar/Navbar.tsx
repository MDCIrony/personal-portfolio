import React, { useState } from "react";
import styled from "styled-components";
import BurgerButton from "./components/BurgerButton";
import HoveredLink from "../../common/HoveredLink";
import HoveredImg from "../../common/HoveredImg";
import { Outlet } from "react-router-dom";

function Navbar(): JSX.Element {
  const [clicked, setCliked] = useState(false);

  const handleClick = () => {
    //Cambia el estado de clicked solo si está en una resolución de mobile
    if (window.screen.width < 768) {
      setCliked(!clicked);
    }
  };

  return (
    <>
      <NavbarContainer>
        <div className="logoContainer">
          <HoveredImg
            img={process.env.PUBLIC_URL + "/images/hacker.png"}
            alt="logo"
            size="50px"
            href="https://www.mdcastillo.me"
          />
        </div>

        <div className={`links ${clicked ? "active" : ""}`.trimEnd()}>
          <HoveredLink
            link={"/"}
            onClick={handleClick}
            text={"HOME"}
            width="100px"
          />
          <HoveredLink
            link={"/projects"}
            onClick={handleClick}
            text={"PROJECTS"}
            width="100px"
          />
          <HoveredLink
            link={"/contact"}
            onClick={handleClick}
            text={"CONTACT"}
            width="100px"
          />
        </div>
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BackgroundMobileNav
          className={`initial ${clicked ? "active" : ""}`}
        ></BackgroundMobileNav>
      </NavbarContainer>
      <Outlet />
    </>
  );
}

export default Navbar;

// Styled components
const NavbarContainer = styled.nav`
  /*Estilo para el nav en desktop*/
  padding: 0.4rem;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  margin-top: 1rem;
  width: 100%;

  .logoContainer {
    margin-left: 50px;
  }

  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }

  /*Estilo del menú de links del navbar en mobile cuando están inactivos (fuera de pantalla)*/
  .links {
    position: fixed;
    top: -100%;
    left: -100%;
    right: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.6s ease;

    /*Estilo de los links del menu nav en desktop*/
    @media (min-width: 768px) {
      position: initial;
      margin-right: 50px;
      display: flex;

      a {
        margin-left: 2rem;
      }
    }
  }

  /*Estilo del menú de links del navbar en mobile cuando están activos*/
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
      text-align: center;
      width: 200px !important;
      margin-top: 1.5rem;
      color: white;
    }
  }

  /*Ocultar el button menu en desktop*/
  .burger {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BackgroundMobileNav = styled.div`
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
