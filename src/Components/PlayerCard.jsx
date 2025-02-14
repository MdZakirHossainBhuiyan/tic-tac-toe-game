import React, { useEffect, useState } from "react";
import { icons } from "../utils/icons";

const PlayerCard = ({
  player1,
  player2,
  selectedColor1,
  selectedColor2,
  selectedIcon1,
  selectedIcon2,
  xIsNext,
  status,
  setStatus,
  matchDuration,
  isRunning,
  setIsRunning,
  time1,
  setTime1,
  time2,
  setTime2,
}) => {
  // const [time1, setTime1] = useState(matchDuration);
  // const [time2, setTime2] = useState(matchDuration);
  const [activePlayer, setActivePlayer] = useState(1);

  const icon1 = icons.find((icon) => icon.title === selectedIcon1);
  const icon2 = icons.find((icon) => icon.title === selectedIcon2);

  useEffect(() => {
    if (status) {
      setTime1(0);
      setTime2(0);
      setIsRunning(false);
      return;
    }

    if (time1 === 0 && time2 > 0) {
      setStatus("O");
      setIsRunning(false);
      return;
    }

    if (time2 === 0 && time1 > 0) {
      setStatus("X");
      setIsRunning(false);
      return;
    }

    let timer;
    if (isRunning) {
      if (activePlayer === 1 && time1 > 0) {
        timer = setInterval(() => {
          setTime1((prevTime) => Math.max(prevTime - 1, 0));
        }, 1000);
      } else if (activePlayer === 2 && time2 > 0) {
        timer = setInterval(() => {
          setTime2((prevTime) => Math.max(prevTime - 1, 0));
        }, 1000);
      }
    }

    return () => clearInterval(timer);
  }, [activePlayer, isRunning, time1, time2, status]);

  useEffect(() => {
    if (xIsNext) {
      setActivePlayer(1);
    } else {
      setActivePlayer(2);
    }
  }, [xIsNext]);

  return (
    <div className="w-full h-[70px] rounded-lg bg-[#669bbc] flex items-center justify-between px-10">
      <div className="flex items-center gap-5">
        <div
          className={`w-[50px] h-[50px] rounded-full ${selectedColor1} flex items-center justify-center text-white`}
        >
          <icon1.icon className="text-[25px]" />
        </div>
        <div>
          <h2 className="text-white font-bold">{player1}</h2>
          <div className="border border-[#FFD700] rounded-sm px-3 py-[1px] text-[12px] text-white">
            {time1}
          </div>
        </div>
      </div>
      <div>
        {status ? (
          <div className="text-white flex items-center gap-2">
            Winner:{" "}
            <div
              className={`${
                status === "X" ? selectedColor1 : selectedColor2
              } w-[20px] h-[20px] rounded-full flex items-center justify-center`}
            >
              {status === "X" ? (
                <icon1.icon className="text-[10px]" />
              ) : (
                <icon2.icon className="text-[10px]" />
              )}
            </div>
          </div>
        ) : (
          <div className="text-white flex items-center gap-2">
            Next Player:{" "}
            <div
              className={`${
                xIsNext ? selectedColor1 : selectedColor2
              } w-[20px] h-[20px] rounded-full flex items-center justify-center`}
            >
              {xIsNext ? (
                <icon1.icon className="text-[10px]" />
              ) : (
                <icon2.icon className="text-[10px]" />
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex flex-col items-center justify-end">
          <h2 className="text-white font-bold">{player2}</h2>
          <div className="border border-[#FFD700] rounded-sm px-3 py-[1px] text-[12px] text-white">
            {time2}
          </div>
        </div>
        <div
          className={`w-[50px] h-[50px] rounded-full ${selectedColor2} flex items-center justify-center text-white`}
        >
          <icon2.icon className="text-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
