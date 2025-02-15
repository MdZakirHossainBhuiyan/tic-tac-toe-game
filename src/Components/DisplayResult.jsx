import React from "react";
import { icons } from "../utils/icons";

const DisplayResult = ({
  status,
  selectedColor1,
  selectedColor2,
  selectedIcon1,
  selectedIcon2,
}) => {
  const icon1 = icons.find((icon) => icon.title === selectedIcon1);
  const icon2 = icons.find((icon) => icon.title === selectedIcon2);

  return (
    <div>
      {status === "X" ||
        (status === "O" && (
          <div>
            <h3 className="text-white">Winner:</h3>
            <div
              className={`w-[100px] h-[100px] rounded-lg flex items-center justify-center text-white ${
                status === "X" ? selectedColor1 : selectedColor2
              }`}
            >
              {status === "X" ? (
                <icon1.icon className="text-[70px]" />
              ) : (
                <icon2.icon className="text-[70px]" />
              )}
            </div>
          </div>
        ))}

      {status === "draw" && (
        <div>
          {/* <h3 className="text-white">Match is Draw</h3> */}
          <div
            className={`w-[100px] h-[100px] rounded-lg flex items-center justify-center text-red-600 bg-red-200 uppercase font-extrabold`}
          >
            draw
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayResult;
