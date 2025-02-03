import React from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <>
      <button
        onClick={onSquareClick}
        className="bg-[white] border border-[gray] h-[30px] w-[30px] m-[5px] text-[16px] rounded-[4px] cursor-pointer"
      >
        {value}
      </button>
    </>
  );
};

export default Square;
