import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";

const History = ({ history, jumpTo }) => {
  const moves = history?.map((squares, move) => {
    let description;

    if (move > 0) {
      description = `Go to the move #${move}`;
    } else {
      description = `Go to start the game`;
    }

    return (
      <div key={move} className="flex flex-col items-start">
        <button
          className={`flex items-center gap-3 cursor-pointer text-white border-0 ${
            move === 0 ? "mt-0" : "mt-2"
          }`}
          onClick={() => jumpTo(move)}
        >
          <FaRegHandPointRight className="text-[#FFD700]" />
          {description}
        </button>
      </div>
    );
  });

  return <div>{moves}</div>;
};

export default History;
