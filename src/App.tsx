import React from "react";
import styled from "styled-components";
import Background from "./components/layout/Background/Background";
import Navbar from "./components/layout/Navbar/Navbar";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <StyledApp>
        <h1 className="text">Miguel Díaz Portfolio {`<en construcción...>`}</h1>
        <div className="background">
          <Background />
        </div>
      </StyledApp>
    </>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120vh;

  .text {
    font-size: 2rem;
    font-weight: 400;
    color: white;
  }
  .background {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

export default App;
