import React, { useEffect, useState } from "react";
import Board from "./Board";
import History from "./History";
import PlayerCard from "./PlayerCard";

const Game = ({
  player1,
  player2,
  selectedColor1,
  selectedColor2,
  selectedIcon1,
  selectedIcon2,
  handleCloseGame,
  tossWinner,
}) => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState();
  const [status, setStatus] = useState(null);
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

  useEffect(() => {
    if (tossWinner === player1) {
      setXIsNext(true);
    } else {
      setXIsNext(false);
    }
  }, [tossWinner]);

  return (
    <div className="w-full flex items-start">
      <div className="w-[70%] p-[20px]">
        <PlayerCard
          player1={player1}
          player2={player2}
          selectedColor1={selectedColor1}
          selectedColor2={selectedColor2}
          selectedIcon1={selectedIcon1}
          selectedIcon2={selectedIcon2}
          xIsNext={xIsNext}
          status={status}
        />
        <div className="w-full flex items-start justify-center mt-[50px]">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
            handleCloseGame={handleCloseGame}
            jumpTo={jumpTo}
            tossWinner={tossWinner}
            setStatus={setStatus}
            selectedColor1={selectedColor1}
            selectedColor2={selectedColor2}
            selectedIcon1={selectedIcon1}
            selectedIcon2={selectedIcon2}
          />
        </div>
      </div>
      <div className="w-[30%] h-[100vh] bg-[#52b788] pt-[50px] px-[30px]">
        <div className="text-[24px] font-bold text-white border-b border-[#FFD700] pb-2 mb-5">
          <h3>Move History:</h3>
        </div>
        <History history={history} jumpTo={jumpTo} />
      </div>
    </div>
  );
};

export default Game;
