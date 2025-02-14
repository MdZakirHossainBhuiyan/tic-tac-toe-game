import React, { useEffect, useState } from "react";
import { icons } from "../utils/icons";
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
  matchDuration,
  isRunning,
  setIsRunning,
}) => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState();
  const [status, setStatus] = useState(null);
  const [currentMove, setCurrentMove] = useState(0);

  const [time1, setTime1] = useState(matchDuration);
  const [time2, setTime2] = useState(matchDuration);

  const currentSquares = history[currentMove];

  const icon1 = icons.find((icon) => icon.title === selectedIcon1);
  const icon2 = icons.find((icon) => icon.title === selectedIcon2);

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
          setStatus={setStatus}
          matchDuration={matchDuration}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          time1={time1}
          setTime1={setTime1}
          time2={time2}
          setTime2={setTime2}
        />
        <div className="w-full flex items-start justify-center gap-[50px] mt-[70px]">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
            handleCloseGame={handleCloseGame}
            jumpTo={jumpTo}
            tossWinner={tossWinner}
            status={status}
            setStatus={setStatus}
            selectedColor1={selectedColor1}
            selectedColor2={selectedColor2}
            selectedIcon1={selectedIcon1}
            selectedIcon2={selectedIcon2}
            setIsRunning={setIsRunning}
            setTime1={setTime1}
            setTime2={setTime2}
            matchDuration={matchDuration}
          />

          {status && (
            <div>
              <h3 className="text-white">Winner:</h3>
              <div
                className={`w-[100px] h-[100px] rounded-lg flex items-center justify-center text-white ${
                  status === "X" ? selectedColor1 : selectedColor2
                }`}
              >
                {status === "X" ? (
                  <icon1.icon className="text-[70px]" />
                ) : (
                  <icon2.icon className="text-[70px]" />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-[30%] h-[100vh] bg-[#52b788] pt-[50px] px-[30px]">
        <div className="text-[24px] font-bold text-white border-b border-[#FFD700] pb-2 mb-5">
          <h3>Move History:</h3>
        </div>
        {!status ? (
          <p className="text-white">After match you can explore history</p>
        ) : (
          <History history={history} jumpTo={jumpTo} />
        )}
      </div>
    </div>
  );
};

export default Game;
