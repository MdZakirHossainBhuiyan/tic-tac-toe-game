import React from "react";
import { icons } from "../utils/icons";

const Square = ({
  value,
  onSquareClick,
  selectedColor1,
  selectedColor2,
  selectedIcon1,
  selectedIcon2,
}) => {
  const icon1 = icons?.find((icon) => icon.title === selectedIcon1);
  const icon2 = icons?.find((icon) => icon.title === selectedIcon2);

  return (
    <>
      <button
        onClick={onSquareClick}
        className={`${!value && "bg-[white]"} ${
          value === "X" ? selectedColor1 : selectedColor2
        } h-[30px] w-[30px] m-[5px] text-[16px] rounded-[4px] cursor-pointer flex items-center justify-center text-white`}
      >
        {value ? value === "X" ? <icon1.icon /> : <icon2.icon /> : ""}
      </button>
    </>
  );
};

export default Square;
