import React from "react";
import { FaRobot } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";
import DisplayRandomInfo from "./DisplayRandomInfo";

const Home = ({ handleOpenModal, handleOpenAIModal }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-[72px]">
      <div className="w-full flex flex-col items-center justify-center">
        <h1
          className="text-[24px] text-[#FFD700] font-extrabold"
          style={{
            textShadow: "0px 0px 10px rgba(0, 225, 255, 0.8)",
          }}
        >
          Ultimate Tic Tac Toe Challenge!
        </h1>
        <h3
          className="text-[16px] text-white font-bold mt-[10px]"
          style={{
            textShadow: "0px 0px 10px rgba(0, 225, 255, 0.8)",
          }}
        >
          Play. Compete. Win!
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center gap-5">
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center justify-center gap-5 bg-[#E3F2FD] rounded-full px-8 py-2 font-bold shadow-lg text-[#0F2027] cursor-pointer scale-100 hover:scale-105 transition-all duration-300"
        >
          <GiCrossedSwords className="text-2xl text-blue-500" />
          Rivalry Mode
        </button>
        <button
          onClick={() => handleOpenAIModal()}
          className="flex items-center justify-center gap-5 bg-[#E3F2FD] rounded-full px-8 py-2 font-bold shadow-lg text-[#0F2027] cursor-pointer scale-100 hover:scale-105 transition-all duration-300"
        >
          <FaRobot className="text-2xl text-blue-500" />
          Bot Clash
        </button>
      </div>

      <DisplayRandomInfo />
    </div>
  );
};

export default Home;
