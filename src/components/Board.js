import React from "react";
import Square from "./Square";
import { BoardContainer, WinningLine } from "./StyledComponents";

function Board({ squares, onClick, winningLine }) {
  return (
    <BoardContainer>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
      {winningLine && <WinningLine positions={winningLine} />}
    </BoardContainer>
  );
}

export default Board;
