import styled from "styled-components";

const StyledPage = styled.div`
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

export default StyledPage;
