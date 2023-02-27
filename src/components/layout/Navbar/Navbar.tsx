import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BurgerButton from "./components/BurgerButton";
import HoveredLink from "../../common/HoveredLink";
import HoveredImg from "../../common/HoveredImg";
import { Outlet } from "react-router-dom";

const navbarLinks = [
  {
    id: 1,
    text: "HOME",
    link: "/",
  },
  {
    id: 2,
    text: "PROJECTS",
    link: "/projects",
  },
  {
    id: 3,
    text: "CONTACT",
    link: "/contact",
  },
  {
    id: 4,
    text: "SERVICES",
    link: "/services",
  },
];

function Navbar(): JSX.Element {
  const [clicked, setCliked] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  //Esto es para que el navbar cambie de color cuando se hace scroll
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      setIsSolid(scrollPosition > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Cambia el estado de clicked solo si está en una resolución de mobile
  const handleClick = () => {
    if (window.screen.width < 768) {
      setCliked(!clicked);
    }
  };

  return (
    <>
      <NavbarContainer>
        <div className={`contenedor ${isSolid ? "solid-navbar" : ""}`}>
          <div className="logoContainer">
            <HoveredImg
              img={process.env.PUBLIC_URL + "/images/hacker.png"}
              alt="logo"
              size="40px"
              href="https://www.mdcastillo.me"
            />
          </div>

          <div className={`links ${clicked ? "active" : ""}`.trimEnd()}>
            {navbarLinks.map((link) => (
              <HoveredLink
                key={link.id}
                link={link.link}
                onClick={handleClick}
                text={link.text}
                width="100px"
              />
            ))}
          </div>
          <div className="burger">
            <BurgerButton clicked={clicked} handleClick={handleClick} />
          </div>
          <BackgroundMobileNav
            className={`initial ${clicked ? "active" : ""}`}
          ></BackgroundMobileNav>
        </div>
      </NavbarContainer>
      <Outlet />
    </>
  );
}

export default Navbar;

// Styled components
const NavbarContainer = styled.nav`
  /*Estilo para el nav en desktop*/
  width: 100% !important;
  background-color: transparent;
  z-index: 100;
  position: fixed;

  .contenedor {
    padding-top: 1rem;
    display: flex;
    align-items: center;    
    justify-content: space-between;
  }

  .solid-navbar {
    background-color: rgba(33, 33, 33, 1);
  }

  .logoContainer {
    margin-left: 30px;
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
      display: flex;
      margin-right: 30px;

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
