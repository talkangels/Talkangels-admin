import React from "react";
import { Tickmark } from "./Shape";

const Listenerscard = ({ img, name, Year, Experience, content }) => {
  return (
    <div className="bg-[#232243] rounded-xl flex items-center justify-center pt-[65px] px-[40px] pb-[47px]">
      <div>
        <div className="relative listener z-20 flex items-center justify-center">
          <div className="w-[217px] h-[217px] rounded-full overflow-hidden">
            <img src={img} alt="" className="object-cover h-full w-full" />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-center gap-2">
            <h4 className="text-[#E4D056] text-[32px] font-bold text-center">
              {name}
            </h4>
            <Tickmark />
          </div>
          <p className="text-[#D9D9D9]/50 text-center text-base">
            F-{Year} Yrs • {Experience} yrs of Experience
          </p>
          <div className="mt-5">
            <p className="text-white text-justify text-lg font-normal max-w-[300px] text-ellipsis max-h-[170px] overflow-hidden">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listenerscard;
