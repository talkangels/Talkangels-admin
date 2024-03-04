import dayjs from "dayjs";
import React from "react";

const TransactionDashboard = ({
  Withdraw,
  setSelectedList,
  handleUpdateStatus,
  selectedList,
}) => {
  return (
    <>
      {Withdraw.filter((item) => item.request_status === "pending").map(
        (withdraw, i) => (
          <>
            <div
              className="bg-Blue rounded-xl py-3 flex items-center justify-center"
              key={i}
            >
              <div className="w-full flex items-center justify-between">
                <div className="xl:grid xl:grid-cols-2  items-center px-4 gap-1 gap-y-4 w-full">
                  <div>
                    <h2 className="text-white text-[16px] font-Popins ">
                      {withdraw.staff_name}
                    </h2>
                  </div>
                  <div className="text-right">
                    <h2 className="text-white text-[16px] font-Popins ">
                      {withdraw.staff_number}
                    </h2>
                  </div>
                  <div>
                    <h2 className="text-Sky text-[16px] font-Popins ">
                      Request Amount
                    </h2>
                    <h2 className="text-white text-[16px] font-Popins ">
                      {withdraw.request_amount}
                    </h2>
                  </div>
                  <h2 className="text-white text-[16px] font-Popins text-right">
                    {dayjs(withdraw.date).format("DD/MM/YYYY")}
                  </h2>
                  <div className="xl:col-span-2 ">
                    <div className="md:grid grid-cols-2 items-center justify-between w-full flex-wrap gap-y-3">
                      <select
                        name=""
                        id=""
                        className=" w-full h-[40px] rounded-lg bg-darkBlack text-white focus-visible:outline-none px-1"
                        defaultValue={withdraw.request_status}
                        onChange={(e) =>
                          setSelectedList({
                            requestId: withdraw._id,
                            status: e.target.value,
                          })
                        }
                      >
                        <option value="pending" className="bg-Sky text-white">
                          Pendding
                        </option>
                        <option value="accept" className="bg-Sky text-white">
                          Accept
                        </option>
                        <option value="reject" className="bg-Sky text-white">
                          Reject
                        </option>
                      </select>
                      {selectedList.requestId === withdraw._id &&
                        selectedList.status !== "pending" && (
                          <button
                            onClick={handleUpdateStatus}
                            className={`${
                              selectedList.requestId === withdraw._id &&
                              selectedList.status === "accept"
                                ? "bg-green"
                                : "bg-red"
                            } text-white font-Popins font-normal md:max-w-[144px] w-full h-[40px] rounded ml-auto md:mt-0 mt-3`}
                          >
                            {selectedList.status}
                          </button>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};

export default TransactionDashboard;
