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
    <HoveredImgContainer className="py-1">
      <IconContext.Provider value={{ color: props.color, size: props.size }}>
        <div className="image">{props.icon}</div>
      </IconContext.Provider>
    </HoveredImgContainer>
  );
}

const HoveredImgContainer = styled.div`
  .image {
    display: inline-block;
  }
  div {
    padding: 10px;
    background-color: #212121;
    color: #cfe0c3;
    z-index: 1;
    overflow: hidden;
    border-radius: 50%;
  }
`;
