import { CiTrophy } from "react-icons/ci";
import { FaRunning } from "react-icons/fa";
import { GiSpaceShuttle } from "react-icons/gi";
import { GoDeviceDesktop } from "react-icons/go";
import { MdModelTraining, MdOutlineHistoryToggleOff } from "react-icons/md";
import { PiMathOperationsBold } from "react-icons/pi";
import { TbTicTac } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";

export const infoData = [
  {
    id: 1,
    title: "Ancient Origins",
    info: "Tic Tac Toe dates back to Ancient Egypt and the Roman Empire, where similar grid-based games were played on stone tablets.",
    icon: MdOutlineHistoryToggleOff,
  },
  {
    id: 2,
    title: "Different Names Worldwide",
    info: "In Britain, it's called 'Noughts and Crosses,' while in some parts of the world, it's known as 'X and O.'",
    icon: TfiWorld,
  },
  {
    id: 3,
    title: "First Video Game Version",
    info: "The first computer version of Tic Tac Toe was created in 1952 by A.S. Douglas as part of his PhD thesis on human-computer interaction.",
    icon: GoDeviceDesktop,
  },
  {
    id: 4,
    title: "Oldest Tic Tac Toe Board",
    info: "The earliest known Tic Tac Toe board was found in the ruins of the Roman Empire, carved into stone.",
    icon: TbTicTac,
  },
  {
    id: 5,
    title: "Unbeatable AI",
    info: "If both players play perfectly, the game always ends in a draw. That’s why AI bots can be almost impossible to beat!",
    icon: CiTrophy,
  },
  {
    id: 6,
    title: "Quickest Win Possible",
    info: "The fastest possible win happens in five moves if the opponent makes mistakes.",
    icon: FaRunning,
  },
  {
    id: 7,
    title: "Mathematical Possibilities",
    info: "There are 255,168 possible Tic Tac Toe games, but only 138 winning strategies.",
    icon: PiMathOperationsBold,
  },
  {
    id: 8,
    title: "Used to Train AI",
    info: "Tic Tac Toe is often used in AI and machine learning studies because of its simple yet strategic gameplay.",
    icon: MdModelTraining,
  },
  {
    id: 9,
    title: "Played in Space",
    info: "Astronauts on the Apollo missions played Tic Tac Toe onboard their spacecraft to pass the time.",
    icon: GiSpaceShuttle,
  },
];
