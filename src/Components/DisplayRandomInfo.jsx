import React, { useEffect, useState } from "react";
import { infoData } from "../utils/infoData.js";

const DisplayRandomInfo = () => {
  const [selectedIndex, setSelectedIndex] = useState(
    Math.floor(Math.random() * infoData?.length)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex(Math.floor(Math.random() * infoData?.length));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const selectedData = infoData[selectedIndex];

  return (
    <div className="w-full flex items-center justify-between gap-[100px] mt-[72px]">
      <div className="w-full flex items-center justify-center">
        <div className="w-[300px] flex items-center gap-[20px]">
          <div className="text-[#FFD700]">
            {selectedData && <selectedData.icon className="text-[30px]" />}
          </div>
          <div>
            <h3 className="text-[#FFD700]">
              {selectedData?.title}
              {selectedData?.title && ":"}
            </h3>
            <p className="text-gray-300 text-[14px] mt-[8px] leading-4 text-justify">
              {selectedData?.info}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayRandomInfo;
