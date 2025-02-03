import React, { useState } from "react";
import Board from "./Board";
import History from "./History";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory?.length - 1);
  };

  const jumpTo = (move) => {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  };

  return (
    <div className="flex gap-[100px]">
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        <History history={history} jumpTo={jumpTo} />
      </div>
    </div>
  );
};

export default Game;
