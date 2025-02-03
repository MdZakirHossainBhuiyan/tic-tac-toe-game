import React from "react";
import { calculateWinner } from "../utils/calculateWinner";
import Square from "./Square";

const Board = ({ xIsNext, squares, onPlay }) => {
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  const handleValue = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares?.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  };
  return (
    <>
      <div>
        <p>{status}</p>
      </div>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleValue(0)} />
        <Square value={squares[1]} onSquareClick={() => handleValue(1)} />
        <Square value={squares[2]} onSquareClick={() => handleValue(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleValue(3)} />
        <Square value={squares[4]} onSquareClick={() => handleValue(4)} />
        <Square value={squares[5]} onSquareClick={() => handleValue(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleValue(6)} />
        <Square value={squares[7]} onSquareClick={() => handleValue(7)} />
        <Square value={squares[8]} onSquareClick={() => handleValue(8)} />
      </div>
    </>
  );
};

export default Board;
