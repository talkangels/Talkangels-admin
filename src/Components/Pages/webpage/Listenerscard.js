import React from "react";
import { Tickmark } from "./Shape";

const Listenerscard = ({ img }) => {
  return (
    <div className="bg-[#232243] rounded-xl flex items-center justify-center pt-[65px] px-[40px] pb-[47px]">
      <div>
        <div className="relative listener z-20 flex items-center justify-center">
          <div className="w-[217px] h-[217px] rounded-full overflow-hidden">
            <img src={img} alt="" className="object-cover" />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-center gap-2">
            <h4 className="text-[#E4D056] text-[32px] font-bold text-center">
              Hazel Kaur
            </h4>
            <Tickmark />
          </div>
          <p className="text-[#D9D9D9]/50 text-center text-base">
            F-30 Yrs • 5 yrs of Experience
          </p>
          <div className="mt-5">
            <p className="text-white text-justify text-lg font-normal">
              Product Discovery is vital when you want to conduct thorough
              target market research and user testing to minimize risk to your
              product investment. Product Discovery is vital when you want to
              conduct thorough target market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listenerscard;
