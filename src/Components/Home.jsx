import React from "react";
import { PiGameControllerThin } from "react-icons/pi";
import DisplayRandomInfo from "./DisplayRandomInfo";

const Home = ({ handleStartGame }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
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

      <div>
        <button
          onClick={() => handleStartGame()}
          className="flex items-center justify-center gap-5 bg-[#E3F2FD] rounded-full px-8 py-2 font-bold shadow-lg text-[#0F2027] cursor-pointer scale-100 hover:scale-105 transition-all duration-300"
        >
          <PiGameControllerThin />
          Play Now
        </button>
      </div>

      <DisplayRandomInfo />
    </div>
  );
};

export default Home;
