import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { TbBrandLinkedin } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
import FooterIcon from "./components/FooterIcon";

export default function Footer(): React.ReactElement {
  return (
    <FooterContainer>
      <p>© 2023 - Made by MDCastillo</p>
      <div className="iconsContainer">
        <FooterIcon
          href="https://github.com/MDCIrony"
          alt="Github Logo"
          icon={<AiFillGithub />}
        />
        <FooterIcon
          href="https://www.linkedin.com/in/migueldiaz2023"
          alt="Linkedin Logo"
          icon={<TbBrandLinkedin />}
        />
        <FooterIcon
          href="https://mnf.red/miguel-castillo/timeline"
          alt="CV Logo"
          icon={<HiOutlineDocumentText />}
        />
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding: 0.5rem;
  width: 100%;
  background-color: #cfe0c3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000814;
  font-size: 0.8rem;

  .iconsContainer {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
  }
`;
