import React from "react";
import { IconContext } from "react-icons";
import styled from "styled-components";

interface ILogoTech {
  icon: React.ReactElement;
  color: string;
  size: string;
}

export default function LogoTech(props: ILogoTech): React.ReactElement {
  return (
    <HoveredImgContainer>
      <IconContext.Provider value={{ color: props.color, size: props.size }}>
        <div className="mx-4">{props.icon}</div>
      </IconContext.Provider>
    </HoveredImgContainer>
  );
}

const HoveredImgContainer = styled.div`
  div {
    display: inline-block;
    padding: 10px;
    background-color: #212121;
    color: #cfe0c3;
    z-index: 1;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
  }

  div::before {
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

  div:hover::before {
    -webkit-transform: translateY(0) translateX(0);
    -ms-transform: translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
  }

  div:hover::after {
    -webkit-transform: translateY(100%) translateX(100%);
    -ms-transform: translateY(100%) translateX(100%);
    transform: translateY(100%) translateX(100%);
  }
`;
