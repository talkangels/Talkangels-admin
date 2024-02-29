import React from "react";

const Charges = ({ setCharge, adminDetail, charge, heandleCharges }) => {
  return (
    <>
      <div className="items-center justify-between mt-7">
        <h4 className="text-Sky text-[20px]">
          Current Charges
          <span class="text-white font-semibold text-[20px] leading-[27.6px] ml-3">
            ₹ {adminDetail.charges} Per min
          </span>
        </h4>
      </div>
      <div className="flex items-center mt-5 md:flex-nowrap flex-wrap md:justify-start justify-center">
        <div className="relative w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            class="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            ></path>
          </svg>
          <input
            type="number"
            name="Amount"
            value={charge}
            onChange={(e) => setCharge(e.target.value)}
            class="text-white/50 bg-Blue md:w-10/12 w-full h-[40px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
            placeholder="Enter Your New Charge"
          />
        </div>
        <button
          onClick={heandleCharges}
          className="bg-Sky text-white font-Popins font-normal md:mt-0 mt-4 md:min-w-[150px] md:w-auto w-full h-[40px] rounded"
        >
          Confirm
        </button>
      </div>
    </>
  );
};

export default Charges;
