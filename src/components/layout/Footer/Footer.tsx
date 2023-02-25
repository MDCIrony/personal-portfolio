import React from "react";
import styled from "styled-components";

export default function Footer(): React.ReactElement {
  return (
    <FooterContainer>
      <p>© 2023 - Made by MDCastillo</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
`;
