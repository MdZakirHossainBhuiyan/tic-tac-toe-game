import React, { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import { TbVs } from "react-icons/tb";
import { color } from "../utils/color";
import { icons } from "../utils/icons";

const GameSettingCardAI = ({
  handleCloseAIModal,
  player,
  setPlayer,
  tossWinner,
  handleTossAI,
  selectedColor1,
  setSelectedColor1,
  selectedIcon1,
  setSelectedIcon1,
  matchDuration,
  setMatchDuration,
  setIsRunning,
  handleStartGame,
  level,
  setLevel,
}) => {
  const [warning, setWarning] = useState(false);

  const handlePlayStart = () => {
    setWarning(false);
    if (!tossWinner) {
      setWarning(true);
      return;
    }

    handleStartGame();
    setIsRunning(true);
    handleCloseAIModal();
  };

  return (
    <div className="absolute top-0 w-full h-[100vh] bg-transparent flex items-center justify-center">
      <div className="w-[500px] bg-[#edede9] shadow-2xs rounded-xl p-10 relative">
        <div className="absolute top-[8px] right-[8px]">
          <button
            onClick={() => handleCloseAIModal()}
            className="rounded-full p-2 bg-transparent hover:bg-red-300 hover:text-white cursor-pointer"
          >
            <HiMiniXMark />
          </button>
        </div>

        <div className="w-full flex flex-col items-center border-b border-[#203A43] pb-3">
          <div className="flex items-center gap-3">
            <label className="w-[120px]">Your Name:</label>
            <input
              type="text"
              name="firstPlayerName"
              className="border-none bg-[#e3d5ca] rounded-md outline-none px-3 py-1"
              onChange={(e) => setPlayer(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-3 w-full flex items-center justify-center gap-5">
          <span>{player}</span>
          <TbVs />
          <span>Bot</span>
        </div>

        <div className="w-full flex items-center justify-center my-5">
          {tossWinner ? (
            <div className="flex items-center gap-3">
              <FaHandPointRight className="text-orange-400" />
              <span>{tossWinner} will play first</span>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center">
              <button
                onClick={handleTossAI}
                className="bg-[#ffb3c6] px-3 py-1 rounded-md shadow-2xl cursor-pointer font-bold"
              >
                Toss
              </button>
              {warning && (
                <p className="text-red-400 text-center">You miss the toss!</p>
              )}
            </div>
          )}
        </div>

        <div className="w-full flex items-start mb-3">
          <div className="w-[50%]">
            <p>Color:</p>
            <div className="flex items-center gap-2 mt-1">
              {color?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => setSelectedColor1(item?.code)}
                  className={`w-[30px] h-[30px] rounded-sm ${
                    item?.code
                  } border-2 ${
                    item?.code === selectedColor1
                      ? "border-[#7209b7]"
                      : "border-none"
                  } cursor-pointer`}
                ></button>
              ))}
            </div>
          </div>

          <div className="w-[50%]">
            <p>Icon:</p>
            <div className="flex items-center gap-2 mt-1">
              {icons?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => setSelectedIcon1(item?.title)}
                  className={`w-[30px] h-[30px] rounded-sm ${selectedColor1} flex items-center justify-center text-white border-2 ${
                    item?.title === selectedIcon1
                      ? "border-[#7209b7]"
                      : "border-none"
                  } cursor-pointer`}
                >
                  <item.icon />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex items-start mb-3">
          <div className="w-[50%]">
            <p>Duration:</p>
            <div className="flex items-center gap-2 mt-1">
              <button
                onClick={() => setMatchDuration(20)}
                className={`bg-[#ad2831] text-white px-3 py-1 rounded-sm border-2 ${
                  matchDuration === 20 ? "border-[#7209b7]" : "border-none"
                } cursor-pointer`}
              >
                20s
              </button>
              <button
                onClick={() => setMatchDuration(15)}
                className={`bg-[#ad2831] text-white px-3 py-1 rounded-sm border-2 ${
                  matchDuration === 15 ? "border-[#7209b7]" : "border-none"
                } cursor-pointer`}
              >
                15s
              </button>
              <button
                onClick={() => setMatchDuration(10)}
                className={`bg-[#ad2831] text-white px-3 py-1 rounded-sm border-2 ${
                  matchDuration === 10 ? "border-[#7209b7]" : "border-none"
                } cursor-pointer`}
              >
                10s
              </button>
            </div>
          </div>
          <div className="w-[50%]">
            <p>Level:</p>
            <div className="flex items-center gap-2 mt-1">
              <button
                onClick={() => setLevel("easy")}
                className={`bg-[#ad2831] text-white px-3 py-1 rounded-sm border-2 ${
                  level === "easy" ? "border-[#7209b7]" : "border-none"
                } cursor-pointer`}
              >
                Easy
              </button>
              <button
                onClick={() => setLevel("medium")}
                className={`bg-[#ad2831] text-white px-3 py-1 rounded-sm border-2 ${
                  level === "medium" ? "border-[#7209b7]" : "border-none"
                } cursor-pointer`}
              >
                Medium
              </button>
              <button
                onClick={() => setLevel("hard")}
                className={`bg-[#ad2831] text-white px-3 py-1 rounded-sm border-2 ${
                  level === "hard" ? "border-[#7209b7]" : "border-none"
                } cursor-pointer`}
              >
                Hard
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-end mt-10">
          <button
            onClick={handlePlayStart}
            className="px-4 py-2 bg-[#ffa5ab] rounded-md cursor-pointer font-semibold"
          >
            Start Playing
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameSettingCardAI;
