import React from "react";
import { Link, useLocation } from "react-router-dom";

interface ICollapserButton {
  textButton: string;
  to: string;
}

export default function CollapserButton(
  props: ICollapserButton
): React.ReactElement {
  let location = useLocation();
  return (
    <Link
      to={location.pathname === props.to ? "/" : props.to}
      className={
        `btn col-12 btn-outline-light rounded-0 py-2 px-3` +
        (props.to === location.pathname ? " active" : "")
      }
      type="button"
    >
      {props.textButton}
    </Link>
  );
}
