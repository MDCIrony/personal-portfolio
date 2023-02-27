import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

interface ICard {
  title: string;
  description: string;
}

export default function Card(props: ICard): React.ReactElement {
  return (
    <CardContainer className="card text-center bg-dark">
      <img src={process.env.PUBLIC_URL + "/images/hacker.png"} alt="some" />
      <div className="card-body text-light">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.description}</p>
        <a href="#!" className="btn btn-outline-secondary rounded-0 dark">
          Go to this project
        </a>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  margin-bottom: 1rem !important;
  .card-body {
    padding: 2rem 0 !important;
  }

  .card-text {
    padding: 0.3rem 1rem;
    font-size: 1rem;
  }
  :hover {
    box-shadow: 0 0 10px 5px white;
  }
`;
