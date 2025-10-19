import React from "react";
import Video from "./Video";

const HomeHeroButton = () => {
  return (
    <div className="font-[font2] pt-5 text-center bd">
      <div className="text-[8vw] uppercase leading-[6vw]  flex justify-center items-center">
        The spark
      </div>
      <div className="text-[8vw] uppercase leading-[7vw] flex gap-6 justify-center items-center  ">
        who{" "}
        <div
          className="h-[7.5vw] w-[16vw] rounded-full overflow-hidden mb-9"
          loop
        >
          <Video />
        </div>
      </div>
      <div className="text-[8vw] uppercase leading-[6vw]  flex justify-center items-center">
        Generates
      </div>
      <div className="text-[8vw] uppercase  flex justify-center items-center">
        the creativity
      </div>
    </div>
  );
};

export default HomeHeroButton;
