import React from "react";

const History = ({ history, jumpTo }) => {
  const moves = history?.map((squares, move) => {
    let description;

    if (move > 0) {
      description = `Go to the move #${move}`;
    } else {
      description = `Go to start the game`;
    }

    return (
      <li key={move}>
        <button
          className="cursor-pointer bg-[white] border-0"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return <div>{moves}</div>;
};

export default History;
