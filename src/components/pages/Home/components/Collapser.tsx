import React from "react";
import { Outlet } from "react-router-dom";
import CollapserButton from "../../../common/CollapserButton";
import "animate.css";

const collapserButtonsInfo = [
  {
    id: 1,
    textButton: "Tecnologías Backend",
    to: "/",
  },
  {
    id: 2,
    textButton: "Tecnologías Frontend",
    to: "/frontend-info",
  },
  {
    id: 3,
    textButton: "Tecnologías de BBDD",
    to: "/database-info",
  },
];

export default function Collapser(): React.ReactElement {
  return (
    <>
      <div className="btn-group d-flex align-items-center justify-content-center">
        {collapserButtonsInfo.map((collapserButtonInfo) => (
          <div className="col-4">
            <CollapserButton
              key={collapserButtonInfo.id}
              to={collapserButtonInfo.to}
              textButton={collapserButtonInfo.textButton}
            />
          </div>
        ))}
      </div>
      <div className="row d-flex justify-content-center bg-dark-none">
        <Outlet />
      </div>
    </>
  );
}
