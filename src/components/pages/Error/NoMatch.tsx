import React from "react";
import StyledPage from "../../../constants/StyledComponents";

export default function NoMatch(): React.ReactElement {
  return (
    <StyledPage>
      <h1 className="text">La página que buscas no existe.</h1>
    </StyledPage>
  );
}
