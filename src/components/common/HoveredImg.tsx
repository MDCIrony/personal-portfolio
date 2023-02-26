import React from "react";
import styled from "styled-components";
import { IHoveredImg } from "../../constants/types";
import { Link } from "react-router-dom";

function HoveredImg(props: IHoveredImg): React.ReactElement {
  return (
    <HoveredImgContainer>
      {props.children ? (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      ) : (
        <Link to={props.href}>
          <img
            src={props.img ? props.img : "https://via.placeholder.com/150"}
            alt={props.alt}
            width={props.size}
            height={props.size}
          />
        </Link>
      )}
    </HoveredImgContainer>
  );
}

export default HoveredImg;

const HoveredImgContainer = styled.div`
  a {
    display: inline-block;
    padding: 10px;
    background-color: #212121;
    color: #cfe0c3;
    z-index: 1;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
  }

  a::before {
    content: "";
    z-index: -1;
    -webkit-transform: translateY(-100%) translateX(-100%);
    -ms-transform: translateY(-100%) translateX(-100%);
    transform: translateY(-100%) translateX(-100%);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    background-color: #40798c;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }

  a:hover::before {
    -webkit-transform: translateY(0) translateX(0);
    -ms-transform: translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
  }

  a:hover::after {
    -webkit-transform: translateY(100%) translateX(100%);
    -ms-transform: translateY(100%) translateX(100%);
    transform: translateY(100%) translateX(100%);
  }
`;
