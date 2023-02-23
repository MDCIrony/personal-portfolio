import React from "react";
import styled from "styled-components";

interface IHoverLink {
  link: string;
  text: string;
  onClick?: () => void;
}

function HoverLink(props: IHoverLink): JSX.Element {
  return (
    <HoverButtonContainer>
      <a onClick={props.onClick} className="link" href={props.link}>
        {props.text}
      </a>
    </HoverButtonContainer>
  );
}

export default HoverLink;

const HoverButtonContainer = styled.div`
  link {
    color: white;
    text-decoration: none;
    font-size: 25px;
    border: none;
    background: none;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
  }

  link::before {
    margin-left: auto;
  }

  link::after,
  link::before {
    content: "";
    width: 0%;
    height: 2px;
    background: #f44336;
    display: block;
    transition: 0.5s;
  }

  link:hover::after,
  link:hover::before {
    width: 100%;
  }
`;
