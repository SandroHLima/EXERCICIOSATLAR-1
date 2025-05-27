import React from "react";
import { SquareButton } from "./StyledComponents";

function Square({ value, onClick }) {
  return <SquareButton onClick={onClick}>{value}</SquareButton>;
}

export default Square;
