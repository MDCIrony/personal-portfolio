import React from "react";
import Cards from "./components/Cards";
import styled from "styled-components";

export default function Projects(): React.ReactElement {
  return (
    <StyledContainer>
      <Cards />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  padding-top: 6rem;
  padding-bottom: 2rem;
  height: 100%;
  @media (max-width: 768px) {
    padding-top: 8rem;
  }
`;
