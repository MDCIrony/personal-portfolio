import styled from "styled-components";
import TopHome from "./components/TopHome";
import Collapser from "./components/Collapser";
import { BsArrowDownCircle } from "react-icons/bs";

export default function Home(): React.ReactElement {
  return (
    <StyledHome className="container">
      <TopHome />
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <h1 className="col-8 text-white text-center">
            ¿Deseas saber en qué tecnologías o servicios puedo ayudarte?
          </h1>
          <h1 className="text-white text-center py-3">
            <BsArrowDownCircle />
          </h1>
        </div>
        <Collapser />
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.section`
  padding-top: 7rem !important;
  padding-bottom: 5rem !important;
  height: 100% !important;
`;
