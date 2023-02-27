import React from "react";
import Card from "./Card";
import { cardsInfo } from "../../../../constants/info";

export default function Cards(): React.ReactElement {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        {cardsInfo.map((card) => (
          <div className="col-md-4 col-sm-6" key={card.id}>
            <Card title={card.title} description={card.description} />
          </div>
        ))}
      </div>
    </div>
  );
}
