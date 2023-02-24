import React from "react";
import styled from "styled-components";

interface IHoveredLink {
  link: string;
  text: string;
  width?: string;
  onClick?: () => void;
}

function HoveredLink(props: IHoveredLink): JSX.Element {
  return (
    <HoverButtonContainer>
      <a
        onClick={props.onClick}
        className="link"
        href={props.link}
        style={{ width: props.width ? props.width : "50px" }}
      >
        {props.text}
      </a>
    </HoverButtonContainer>
  );
}

export default HoveredLink;

const HoverButtonContainer = styled.div`
  a {
    display: inline-block;
    border: 4px solid #40798c;
    padding: 10px;
    background-color: #212121;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    z-index: 1;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    text-decoration: none;
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
