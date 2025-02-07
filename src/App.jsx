import { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { GiFox, GiHorseHead, GiLion, GiTigerHead } from "react-icons/gi";
import { LuBird } from "react-icons/lu";
import { TbVs } from "react-icons/tb";
import Game from "./Components/Game";
import Home from "./Components/Home";

function App() {
  const [isStartGame, setIsStartGame] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");
  const [tossWinner, setTossWinner] = useState("");

  const handleStartGame = () => setIsStartGame(true);
  const handleCloseGame = () => setIsStartGame(false);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  const handleToss = () => {
    const randomValue = Math.floor(Math.random() * 9);

    if (randomValue % 2 === 0) {
      setTossWinner(player1);
    } else {
      setTossWinner(player2);
    }
  };
  // console.log("tossWinner ", tossWinner);

  return (
    <div className="bg-[#203A43] w-full h-[100vh] flex items-start justify-center p-[72px] relative">
      {isStartGame ? (
        <Game handleCloseGame={handleCloseGame} />
      ) : (
        <Home handleOpenModal={handleOpenModal} />
      )}

      {isOpenModal && (
        <div className="absolute top-0 w-full h-[100vh] bg-transparent flex items-center justify-center">
          <div className="w-[500px] bg-[#edede9] shadow-2xs rounded-xl p-10">
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
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#fb6f92] border-2 border-[#7209b7]"></button>
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#fb8500]"></button>
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#0096c7]"></button>
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#fcbf49]"></button>
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#06d6a0]"></button>
                </div>

                <p>Icon:</p>
                <div className="flex items-center gap-2 mt-1 mb-8">
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#fb6f92] flex items-center justify-center text-white border-2 border-[#7209b7]">
                    <LuBird />
                  </button>
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#fb8500] flex items-center justify-center text-white">
                    <GiLion />
                  </button>
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#0096c7] flex items-center justify-center text-white">
                    <GiTigerHead />
                  </button>
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#fcbf49] flex items-center justify-center text-white">
                    <GiFox />
                  </button>
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#06d6a0] flex items-center justify-center text-white">
                    <GiHorseHead />
                  </button>
                </div>

                <p>Level:</p>
                <div className="flex items-center gap-2 mt-1">
                  <button className="bg-[#ad2831] text-white px-3 py-1 rounded-sm border-2 border-[#7209b7]">
                    20s
                  </button>
                  <button className="bg-[#800e13] text-white px-3 py-1 rounded-sm">
                    15s
                  </button>
                  <button className="bg-[#640d14] text-white px-3 py-1 rounded-sm">
                    10s
                  </button>
                </div>
              </div>
              <div className="w-[1px] h-[140px] bg-[#203A43]"></div>
              <div>
                <p>Color:</p>
                <div className="flex items-center gap-2 mt-1 mb-3">
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#fb6f92]"></button>
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#fb8500] border-2 border-[#7209b7]"></button>
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#0096c7]"></button>
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#fcbf49]"></button>
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#06d6a0]"></button>
                </div>

                <p>Icon:</p>
                <div className="flex items-center gap-2 mt-1 mb-3">
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#fb6f92] flex items-center justify-center text-white">
                    <LuBird />
                  </button>
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#fb8500] flex items-center justify-center text-white border-2 border-[#7209b7]">
                    <GiLion />
                  </button>
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#0096c7] flex items-center justify-center text-white">
                    <GiTigerHead />
                  </button>
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#fcbf49] flex items-center justify-center text-white">
                    <GiFox />
                  </button>
                  <button className="w-[30px] h-[30px] rounded-sm bg-[#06d6a0] flex items-center justify-center text-white">
                    <GiHorseHead />
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-end mt-5">
              <button
                onClick={() => {
                  handleStartGame(), handleCloseModal();
                }}
                className="px-4 py-2 bg-[#ffa5ab] rounded-md cursor-pointer"
              >
                Start Playing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
