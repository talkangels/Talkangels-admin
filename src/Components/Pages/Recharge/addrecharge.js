import React from "react";

import { useState } from "react";
import { AddRecharge } from "../../services/recharge";
import { toast } from "react-toastify";
import Spinner from "../../layout/spinner";

const AddRecharges = ({ setStaff }) => {
  const [loading, setLoading] = useState(false);

  const [staffDetail, setStaffDetail] = useState({
    Amount: "",
    Discounted_amout: "",
    Description: "",
  });

  const handleStaffdata = (e) => {
    setStaffDetail({ ...staffDetail, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    setLoading(true);
    const body = {
      amount: staffDetail.Amount,
      discount_amount: staffDetail.Discounted_amout,
      description: staffDetail.Description,
    };

    const result = await AddRecharge(body);
    if (result?.status === 201) {
      toast.success(result?.message);
      setStaffDetail({
        Amount: "",
        Discounted_amout: "",
        Description: "",
        user_name: "",
      });
      setStaff(1);
      setLoading(false);
    } else {
      toast.error(result?.message);
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <Spinner />}
      <div className="mt-16">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <h2 className="text-white font-Popins text-[24px]">
              Add New Recharge
            </h2>
          </div>
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="w-full relative lg:col-span-1 col-span-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <input
                type="text"
                value={staffDetail.Amount}
                onChange={handleStaffdata}
                name="Amount"
                className="text-white/50 bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
                placeholder="Amount"
              />
            </div>
            <div className="w-full relative lg:col-span-1 col-span-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>

              <input
                value={staffDetail.Discounted_amout}
                onChange={handleStaffdata}
                name="Discounted_amout"
                type="number"
                className="text-white/50 bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
                placeholder="Discounted amout"
              />
            </div>
            <div className="w-full relative lg:col-span-2 col-span-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>

              <textarea
                type="text"
                value={staffDetail.Description}
                onChange={handleStaffdata}
                name="Description"
                className="text-white/50 pt-6 bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
                placeholder="Description"
              ></textarea>
            </div>
            <div className="w-full relative col-span-2 flex items-center justify-end">
              <button
                className="sm:w-[290px] w-full h-[60px] bg-Sky rounded-md text-white ml-auto"
                onClick={() => handleSubmit()}
              >
                Add Recharge
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRecharges;
