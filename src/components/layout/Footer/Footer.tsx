import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { TbBrandLinkedin } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
import FooterIcon from "./components/FooterIcon";

const footerIcons = [
  {
    id: 1,
    href: "https://github.com/MDCIrony",
    alt: "Enlace al repositorio Github de Miguel Díaz Castillo, web developer",
    icon: <AiFillGithub />,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/migueldiaz2023",
    alt: "Enlace al perfil de Linkedin de Miguel Díaz Castillo, web developer",
    icon: <TbBrandLinkedin />,
  },
  {
    id: 3,
    href: "https://mnf.red/miguel-castillo/timeline",
    alt: "Enlace al CV de Miguel Díaz Castillo, web developer",
    icon: <HiOutlineDocumentText />,
  },
];

export default function Footer(): React.ReactElement {
  return (
    <FooterContainer>
      <p className="text">© 2023 - Made by MDCastillo</p>
      <div className="iconsContainer">
        {footerIcons.map((icon) => (
          <FooterIcon
            key={icon.id}
            href={icon.href}
            alt={icon.alt}
            icon={icon.icon}
          />
        ))}
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  position: bottom;
  padding: 0.5rem;
  width: 100%;
  background-color: #cfe0c3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000814;
  font-size: 0.8rem;

  .iconsContainer {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
  }

  .text {
    margin-bottom: 0 !important;
  }
`;
