import React, { useState } from "react";
import Board from "./components/Board";
import { Container, Button, Status } from "./components/StyledComponents";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return { winner: null, line: null };
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const { winner, line } = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : squares.every((square) => square !== null)
    ? "Draw!"
    : `Next player: ${xIsNext ? "X" : "O"}`;

  const handleClick = (i) => {
    if (winner || squares[i]) return;
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <Container>
      <h1>Tic-Tac-Toe</h1>
      <Status>{status}</Status>
      <Board
        squares={squares}
        onClick={handleClick}
        winningLine={winner ? line : null}
      />
      <Button onClick={resetGame}>Reset Game</Button>
    </Container>
  );
}

export default App;
