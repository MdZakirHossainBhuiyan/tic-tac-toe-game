import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import { TbVs } from "react-icons/tb";
import { color } from "../utils/color";
import { icons } from "../utils/icons";

const GameSettingsCard = ({
  setPlayer1,
  setPlayer2,
  player1,
  player2,
  tossWinner,
  handleToss,
  handleStartGame,
  handleCloseModal,
  selectedColor1,
  selectedColor2,
  setSelectedColor1,
  setSelectedColor2,
  selectedIcon1,
  selectedIcon2,
  setSelectedIcon1,
  setSelectedIcon2,
  matchDuration,
  setMatchDuration,
  setIsRunning,
}) => {
  const handlePlayStart = () => {
    handleStartGame();
    setIsRunning(true);
    handleCloseModal();
  };

  return (
    <div className="absolute top-0 w-full h-[100vh] bg-transparent flex items-center justify-center">
      <div className="w-[500px] bg-[#edede9] shadow-2xs rounded-xl p-10 relative">
        <div className="absolute top-[8px] right-[8px]">
          <button
            onClick={() => handleCloseModal()}
            className="rounded-full p-2 bg-transparent hover:bg-red-300 hover:text-white cursor-pointer"
          >
            <HiMiniXMark />
          </button>
        </div>
        <div className="w-full flex flex-col items-center border-b border-[#203A43] pb-3">
          <div className="flex items-center gap-3">
            <label className="w-[120px]">
              1<sup>st</sup> Player Name:
            </label>
            <input
              type="text"
              name="firstPlayerName"
              className="border-none bg-[#e3d5ca] rounded-md outline-none px-3 py-1"
              onChange={(e) => setPlayer1(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3 mt-1">
            <label className="w-[120px]">
              2<sup>nd</sup> Player Name:
            </label>
            <input
              type="text"
              name="firstPlayerName"
              className="border-none bg-[#e3d5ca] rounded-md outline-none px-3 py-1"
              onChange={(e) => setPlayer2(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-3 w-full flex items-center justify-center gap-5">
          <span>{player1}</span>
          <TbVs />
          <span>{player2}</span>
        </div>

        <div className="w-full flex items-center justify-center my-5">
          {tossWinner ? (
            <div className="flex items-center gap-3">
              <FaHandPointRight className="text-orange-400" />
              <span>{tossWinner} will play first</span>
            </div>
          ) : (
            <button
              onClick={handleToss}
              className="bg-[#ffb3c6] px-3 py-1 rounded-md shadow-2xl cursor-pointer font-bold"
            >
              Toss
            </button>
          )}
        </div>

        <div className="w-full flex items-start justify-between">
          <div className="">
            <p>Color:</p>
            <div className="flex items-center gap-2 mt-1 mb-3">
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
                  disabled={item?.code === selectedColor2}
                ></button>
              ))}
            </div>

            <p>Icon:</p>
            <div className="flex items-center gap-2 mt-1 mb-8">
              {icons?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => setSelectedIcon1(item?.title)}
                  className={`w-[30px] h-[30px] rounded-sm ${selectedColor1} flex items-center justify-center text-white border-2 ${
                    item?.title === selectedIcon1
                      ? "border-[#7209b7]"
                      : "border-none"
                  } cursor-pointer`}
                  disabled={item?.title === selectedIcon2}
                >
                  <item.icon />
                </button>
              ))}
            </div>

            <p>Level:</p>
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
          <div className="w-[1px] h-[140px] bg-[#203A43]"></div>
          <div>
            <p>Color:</p>
            <div className="flex items-center gap-2 mt-1 mb-3">
              {color?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => setSelectedColor2(item?.code)}
                  className={`w-[30px] h-[30px] rounded-sm ${
                    item?.code
                  } border-2 ${
                    item?.code === selectedColor2
                      ? "border-[#7209b7]"
                      : "border-none"
                  } cursor-pointer`}
                  disabled={item?.code === selectedColor1}
                ></button>
              ))}
            </div>

            <p>Icon:</p>
            <div className="flex items-center gap-2 mt-1 mb-3">
              {icons?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => setSelectedIcon2(item?.title)}
                  className={`w-[30px] h-[30px] rounded-sm ${selectedColor2} flex items-center justify-center text-white border-2 ${
                    item?.title === selectedIcon2
                      ? "border-[#7209b7]"
                      : "border-none"
                  } cursor-pointer`}
                  disabled={item?.title === selectedIcon1}
                >
                  <item.icon />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-end mt-5">
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

export default GameSettingsCard;
