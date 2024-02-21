import React, { useState } from "react";
import Listofrecharge from "./Listofrecharge";
import AddRecharges from "./addrecharge";

const Recharges = () => {
  const [staff, setStaff] = useState(0);
  return (
    <>
      <div className="py-7 sm:px-9 px-2 bg-Background_gradint rounded-[20px] ">
        <div className="flex items-center justify-between gap-5">
          <button
            className={`w-1/2 h-[55px] rounded-full text-lg font-semibold flex items-center justify-center ${
              staff === 0
                ? "bg-Sky text-white"
                : "bg-transparent border-[#88888E] border-[0.5px] text-[#88888E]"
            }`}
            onClick={() => setStaff(0)}
          >
            Add Recharge
          </button>
          <button
            className={`w-1/2 h-[55px] rounded-full text-white text-lg font-semibold flex items-center justify-center ${
              staff === 1
                ? "bg-Sky text-white"
                : "bg-transparent border-[#88888E] border-[0.5px] text-[#88888E]"
            }`}
            onClick={() => setStaff(1)}
          >
            List of Recharge
          </button>
        </div>
        {staff === 0 ? (
          <AddRecharges setStaff={setStaff} />
        ) : (
          <Listofrecharge setStaff={setStaff} />
        )}
      </div>
    </>
  );
};

export default Recharges;
