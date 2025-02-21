import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { VscDebugRestart } from "react-icons/vsc";
import { calculateWinner } from "../utils/calculateWinner";
import Square from "./Square";

const Board = ({
  xIsNext,
  squares,
  onPlay,
  handleCloseGame,
  jumpTo,
  tossWinner,
  setStatus,
  status,
  selectedColor1,
  selectedColor2,
  selectedIcon1,
  selectedIcon2,
  setIsRunning,
  setTime1,
  setTime2,
  matchDuration,
  history,
}) => {
  const winner = calculateWinner(squares);

  useEffect(() => {
    if (winner) {
      setStatus(winner);
      return;
    }

    if (!winner && history?.length === 10) {
      setStatus("draw");
    }
  }, [winner, history?.length]);

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
    <div className="">
      <div className={`flex ${status ? "pointer-events-none" : ""}`}>
        <Square
          value={squares[0]}
          onSquareClick={() => handleValue(0)}
          selectedColor1={selectedColor1}
          selectedColor2={selectedColor2}
          selectedIcon1={selectedIcon1}
          selectedIcon2={selectedIcon2}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleValue(1)}
          selectedColor1={selectedColor1}
          selectedColor2={selectedColor2}
          selectedIcon1={selectedIcon1}
          selectedIcon2={selectedIcon2}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleValue(2)}
          selectedColor1={selectedColor1}
          selectedColor2={selectedColor2}
          selectedIcon1={selectedIcon1}
          selectedIcon2={selectedIcon2}
        />
      </div>
      <div className={`flex ${status ? "pointer-events-none" : ""}`}>
        <Square
          value={squares[3]}
          onSquareClick={() => handleValue(3)}
          selectedColor1={selectedColor1}
          selectedColor2={selectedColor2}
          selectedIcon1={selectedIcon1}
          selectedIcon2={selectedIcon2}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleValue(4)}
          selectedColor1={selectedColor1}
          selectedColor2={selectedColor2}
          selectedIcon1={selectedIcon1}
          selectedIcon2={selectedIcon2}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleValue(5)}
          selectedColor1={selectedColor1}
          selectedColor2={selectedColor2}
          selectedIcon1={selectedIcon1}
          selectedIcon2={selectedIcon2}
        />
      </div>
      <div className={`flex ${status ? "pointer-events-none" : ""}`}>
        <Square
          value={squares[6]}
          onSquareClick={() => handleValue(6)}
          selectedColor1={selectedColor1}
          selectedColor2={selectedColor2}
          selectedIcon1={selectedIcon1}
          selectedIcon2={selectedIcon2}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleValue(7)}
          selectedColor1={selectedColor1}
          selectedColor2={selectedColor2}
          selectedIcon1={selectedIcon1}
          selectedIcon2={selectedIcon2}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleValue(8)}
          selectedColor1={selectedColor1}
          selectedColor2={selectedColor2}
          selectedIcon1={selectedIcon1}
          selectedIcon2={selectedIcon2}
        />
      </div>

      <div className="flex items-center gap-5 mt-[24px]">
        <button
          onClick={() => handleCloseGame()}
          className="flex items-center justify-center gap-2 text-white text-[14px] border border-white rounded-lg cursor-pointer px-3 py-1"
        >
          <IoIosArrowBack />
          Back
        </button>
        {status && (
          <button
            onClick={() => {
              setStatus(null);
              jumpTo(0);
              setIsRunning(true);
              setTime1(matchDuration);
              setTime2(matchDuration);
            }}
            className="flex items-center justify-center gap-2 text-white text-[14px] border border-white rounded-lg cursor-pointer px-3 py-1"
          >
            <VscDebugRestart />
            Play Again
          </button>
        )}
      </div>
    </div>
  );
};

export default Board;
