import React from "react";
import HoveredImg from "../../../common/HoveredImg";
import { IconContext } from "react-icons";
import { IFooterIcon } from "../../../../constants/types";

export default function FooterIcon(props: IFooterIcon): React.ReactElement {
  return (
    <>
      <HoveredImg href={props.href} alt={props.alt}>
        <IconContext.Provider value={{ color: "white", size: "20px" }}>
          <div>{props.icon}</div>
        </IconContext.Provider>
      </HoveredImg>
    </>
  );
}
