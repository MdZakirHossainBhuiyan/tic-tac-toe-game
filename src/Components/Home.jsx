import React from "react";
import { GoDeviceDesktop } from "react-icons/go";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { PiGameControllerThin } from "react-icons/pi";
import { TbTicTac } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";

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

      <div className="w-full flex items-center justify-between gap-[100px] mt-[72px]">
        <div className="w-full grid grid-cols-4 gap-[24px]">
          <div className="">
            <div className="flex items-center gap-[8px] text-[#FFD700]">
              <MdOutlineHistoryToggleOff />
              <span className="">Ancient Origins:</span>
            </div>
            <p className="text-gray-300 text-[14px] pl-[22px] mt-[8px] leading-4 text-justify">
              Tic Tac Toe dates back to Ancient Egypt and the Roman Empire,
              where similar grid-based games were played on stone tablets.
            </p>
          </div>

          <div className="">
            <div className="flex items-center gap-[8px] text-[#FFD700]">
              <TfiWorld />
              <span className="">Different Names Worldwide:</span>
            </div>
            <p className="text-gray-300 text-[14px] pl-[22px] mt-[8px] leading-4 text-justify">
              In Britain, it's called "Noughts and Crosses," while in some parts
              of the world, it's known as "X and O."
            </p>
          </div>
          <div className="">
            <div className="flex items-center gap-[8px] text-[#FFD700]">
              {/* <PiGameControllerThin /> */}
              <GoDeviceDesktop />
              <span className="">First Video Game Version:</span>
            </div>
            <p className="text-gray-300 text-[14px] pl-[22px] mt-[8px] leading-4 text-justify">
              The first computer version of Tic Tac Toe was created in 1952 by
              A.S. Douglas as part of his PhD thesis on human-computer
              interaction.
            </p>
          </div>
          <div className="">
            <div className="flex items-center gap-[8px] text-[#FFD700]">
              <TbTicTac />
              <span className="">Oldest Tic Tac Toe Board:</span>
            </div>
            <p className="text-gray-300 text-[14px] pl-[22px] mt-[8px] leading-4 text-justify">
              The earliest known Tic Tac Toe board was found in the ruins of the
              Roman Empire, carved into stone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
