import React from "react";
import styled from "styled-components";
import { IImage } from "../../constants/types";

export default function ImgContainer(props: IImage): React.ReactElement {
  return (
    <StyledImgContainer className="container d-flex align-items-center justify-content-center">
      <div className="card-box">
        <div className="background">
          <img
            src={process.env.PUBLIC_URL + props.src}
            alt={props.alt}
            className="img-fluid"
          />
        </div>
      </div>
    </StyledImgContainer>
  );
}

const StyledImgContainer = styled.div`
  .card-box {
    height: min-content;
    transition: all 0.3s;
    position: relative;
    border-radius: 0.5rem 2rem;
    box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.5);
  }

  .card-box:hover {
    transform: scale(1.03);
  }

  .background {
    transition: all 0.3s;
    background: linear-gradient(
      90.21deg,
      rgba(170, 54, 124, 0.5) -5.91%,
      rgba(74, 47, 189, 0.5) 111.58%
    );
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 0.3rem 3rem;
    width: 100%;
    overflow: hidden;
  }

  .container {
    display: grid;
    border-radius: 0.5rem 2rem;
    height: 20rem;
  }

  img {
    width: 20rem;
  }
`;
