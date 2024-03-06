import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  UpdateWithdrawRequestStatus,
  allWithdrawRequest,
} from "../../services/dashboard";
import Spinner from "../../layout/spinner";
import nodatagif from "../../assets/StaffDetails/Animation - 1703588368832.gif";

const TransactionHistory = () => {
  const [Withdraw, setWithdraw] = useState({
    pending: [],
    accept: [],
    reject: [],
  });
  const [loading, setLoading] = useState(false);
  const [selectedList, setSelectedList] = useState({
    requestId: "",
    status: "",
  });
  const getWithdraws = async () => {
    setLoading(true);
    const result = await allWithdrawRequest();
    if (result?.status === 200) {
      const pending = [];
      const accept = [];
      const reject = [];
      for (var j in result.data) {
        if (result.data[j].request_status === "pending") {
          pending.push(result.data[j]);
        } else if (result.data[j].request_status === "accept") {
          accept.push(result.data[j]);
        } else if (result.data[j].request_status === "reject") {
          reject.push(result.data[j]);
        }
      }
      setWithdraw({
        pending: pending,
        accept: accept,
        reject: reject,
      });
      setLoading(false);
    } else {
      setLoading(false);
      setWithdraw([]);
    }
  };
  const handleUpdateStatus = async () => {
    if (selectedList.status === "pending") {
      return toast.error("select only accept or reject");
    }
    setLoading(true);
    const result = await UpdateWithdrawRequestStatus(selectedList);
    if (result.status === 200) {
      setLoading(false);
      getWithdraws();
      toast.success(result.mmessage);
      setSelectedList({
        requestId: "",
        status: "",
      });
    } else {
      setLoading(false);
      toast.error(result.mmessage);
      setSelectedList({
        requestId: "",
        status: "",
      });
    }
  };
  useEffect(() => {
    getWithdraws();
  }, []);
  return (
    <>
      {loading && <Spinner />}
      <div className="mt-16 w-full overflow-x-auto">
        {!loading && Withdraw.length === 0 ? (
          <>
            <div className="h-[63vh] flex items-center justify-center">
              <div className="">
                <div className="max-w-[318px] mx-auto flex items-center justify-center">
                  <img src={nodatagif} alt="" className="object-contain" />
                </div>
                <h2 className="text-white text-[32px] font-semibold mt-10 text-center font-Popins">
                  No Transection History to show right now!
                </h2>
              </div>
            </div>
          </>
        ) : (
          <>
            <table className="min-w-[1000px] w-full ">
              <thead className="bg-darkBlue sticky top-0 z-10 ">
                <tr className="h-[60px]">
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg rounded-tl-[20px] pl-[23px]"
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Staff Name
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Staff Number
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Request Amount
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg "
                  >
                    Requested date
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  ></th>
                </tr>
              </thead>
              <tbody className="[&>*:nth-child(odd)]:bg-Blue [&>*:nth-child(even)]:bg-TableCell">
                {Withdraw.pending.length > 0 &&
                  Withdraw.pending.toReversed().map((withdraw, i) => (
                    <tr className="h-[50px]" key={i}>
                      <>
                        <td className="text-white text-base pl-[27px]">
                          {i + 1}
                        </td>
                        <td className="text-white text-base pl-[27px]">
                          {withdraw.staff_name}
                        </td>
                        <td className="text-white text-base pl-[27px]">
                          {withdraw.staff_number}
                        </td>
                        <td className="text-white text-base pl-[27px]">
                          {withdraw.request_amount}
                        </td>
                        <td className="text-white text-base">
                          {dayjs(withdraw.date).format("DD/MM/YYYY")}
                        </td>
                        <td className="text-white text-base">
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
                            <option
                              value="pending"
                              className="bg-Sky text-white"
                            >
                              Pending
                            </option>
                            <option
                              value="accept"
                              className="bg-Sky text-white"
                            >
                              Accept
                            </option>
                            <option
                              value="reject"
                              className="bg-Sky text-white"
                            >
                              Reject
                            </option>
                          </select>
                        </td>
                        <td className="text-white text-base pl-[27px]">
                          {selectedList.requestId === withdraw._id &&
                            selectedList.status !== "pending" && (
                              <button
                                onClick={handleUpdateStatus}
                                className="bg-Sky text-white font-Popins font-normal md:max-w-[144px] w-full h-[40px] rounded ml-auto md:mt-0 mt-3"
                              >
                                {selectedList.status}
                              </button>
                            )}
                        </td>
                      </>
                    </tr>
                  ))}
                {Withdraw.accept.length > 0 &&
                  Withdraw.accept.toReversed().map((withdraw, i) => (
                    <tr className="h-[50px]" key={i}>
                      <>
                        <td className="text-white text-base pl-[27px]">
                          {Withdraw.pending.length + i + 1}
                        </td>
                        <td className="text-white text-base pl-[27px]">
                          {withdraw.staff_name}
                        </td>
                        <td className="text-white text-base pl-[27px]">
                          {withdraw.staff_number}
                        </td>
                        <td className="text-white text-base pl-[27px]">
                          {withdraw.request_amount}
                        </td>
                        <td className="text-white text-base">
                          {dayjs(withdraw.date).format("DD/MM/YYYY")}
                        </td>
                        <td
                          className="text-white text-base pl-[27px]"
                          colSpan={2}
                        >
                          <p className="bg-transparent text-green font-Popins font-normal  w-full h-[40px] rounded ml-auto md:mt-0 mt-3">
                            {withdraw.request_status}
                          </p>
                        </td>
                      </>
                    </tr>
                  ))}
                {Withdraw.reject.length > 0 &&
                  Withdraw.reject.toReversed().map((withdraw, i) => (
                    <tr className="h-[50px]" key={i}>
                      <>
                        <td className="text-white text-base pl-[27px]">
                          {Withdraw.pending.length +
                            Withdraw.accept.length +
                            i +
                            1}
                        </td>
                        <td className="text-white text-base pl-[27px]">
                          {withdraw.staff_name}
                        </td>
                        <td className="text-white text-base pl-[27px]">
                          {withdraw.staff_number}
                        </td>
                        <td className="text-white text-base pl-[27px]">
                          {withdraw.request_amount}
                        </td>
                        <td className="text-white text-base">
                          {dayjs(withdraw.date).format("DD/MM/YYYY")}
                        </td>
                        <td
                          className="text-white text-base pl-[27px]"
                          colSpan={2}
                        >
                          <p className="bg-transparent text-red font-Popins font-normal  w-full h-[40px] rounded ml-auto md:mt-0 mt-3">
                            {withdraw.request_status}
                          </p>
                        </td>
                      </>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};

export default TransactionHistory;
