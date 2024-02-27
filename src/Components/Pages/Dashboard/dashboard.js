import React, { useEffect, useState } from "react";
import ClockIcon from "../../assets/dashboard/clock.png";
import use_image from "../../assets/dashboard/user_image.png";
import {
  ChangeCharges,
  GetMostRatedList,
  SendNotificationUser,
  UpdateWithdrawRequestStatus,
  allWithdrawRequest,
} from "../../services/dashboard";
import dayjs from "dayjs";
import Spinner from "../../layout/spinner";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GetOneAdmin } from "../../services/auth";
import nodatagif from "../../assets/StaffDetails/Animation - 1703588368832.gif";

const Dashboard = () => {
  const navigate = useNavigate();

  const [Withdraw, setWithdraw] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mostRated, setMostRated] = useState([]);
  const [adminDetail, setAdminDetail] = useState({});

  const [charge, setCharge] = useState("");
  const [showCharge, setShowCharge] = useState(false);

  const getWithdraws = async () => {
    setLoading(true);
    const result = await allWithdrawRequest();
    if (result?.status === 200) {
      setWithdraw(result.data);
      setLoading(false);
    } else {
      setLoading(false);
      setWithdraw([]);
    }
  };

  const getMostRatedStaff = async () => {
    setLoading(true);
    const result = await GetMostRatedList();
    if (result.status === 200) {
      setMostRated(result.data);
      setLoading(false);
    } else {
      setMostRated([]);
      setLoading(false);
    }
  };

  const getAdminDetail = async () => {
    setLoading(true);
    const id = JSON.parse(window.localStorage.getItem("userDetail"))?._id;
    const result = await GetOneAdmin(id);
    if (result.status === 200) {
      setAdminDetail(result.data);
      setLoading(false);
    } else {
      setAdminDetail({});
      setLoading(false);
    }
  };
  useEffect(() => {
    getWithdraws();
    getMostRatedStaff();
    getAdminDetail();
  }, []);

  const [selectedList, setSelectedList] = useState({
    requestId: "",
    status: "",
  });

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

  const Staffpersonal = (id) => {
    navigate(`/staffdetail/${id}`);
  };

  const heandleCharges = async () => {
    setLoading(true);
    const body = {
      newCharges: charge,
    };

    const result = await ChangeCharges(body);
    if (result.status === 200) {
      toast.success(result.message);
      setLoading(false);
      setShowCharge(!showCharge);
      getAdminDetail();
      setCharge("");
    } else {
      toast.error(result.message);
      setLoading(false);
    }
  };

  const HeandleSendNotification = async () => {
    setLoading(true);
    const body = {
      title: "Hello",
      body: "Heloo this is test Notification",
      userIds: "",
      angel_id: "",
    };
    const result = await SendNotificationUser(body);
    if (result.status === 200) {
      toast.success(result.message);
      setLoading(false);
    } else {
      toast.error(result.message);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:gap-x-5 gap-y-5 xl:gap-y-0">
        <div className="col-span-2">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="w-full bg-darkBlack h-[227px] rounded-3xl shadow-dashboardBox revenue relative overflow-hidden pl-6 pr-4 pt-4">
              <div className="flex justify-between flex-wrap">
                <div className="relative z-10">
                  <p className="font-league uppercase text-Sky mb-2">Total </p>
                  <h2 className="text-3xl font-semibold text-white">Revenue</h2>
                  <div className="flex items-center gap-x-5 gap-y-0 flex-wrap">
                    <h3 className="text-[50px] text-yellow font-semibold flex items-baseline gap-x-1">
                      67 <span className="text-lg text-Gray">Hr</span>
                    </h3>
                    <h3 className="text-[50px] text-yellow font-semibold flex items-baseline gap-x-1">
                      46 <span className="text-lg text-Gray">Min</span>
                    </h3>
                  </div>
                </div>
                <div className="h-12 w-12 bg-darkBlue rounded-2xl shadow-Iconshadow flex items-center justify-center">
                  <img src={ClockIcon} alt="ClockIcon" />
                </div>
              </div>
            </div>
            <div className="w-full bg-darkBlack h-[227px] rounded-3xl minutes relative overflow-hidden pl-6 pr-4 pt-4 shadow-dashboardBox">
              <div className="flex justify-between flex-wrap">
                <div className="relative z-10">
                  <p className="font-league uppercase text-Sky mb-2">Total </p>
                  <h2 className="text-3xl font-semibold text-white">Minutes</h2>
                  <div className="flex items-center gap-x-5 gap-y-0 flex-wrap">
                    <h3 className="text-[50px] text-yellow font-semibold flex items-baseline gap-x-1">
                      67 <span className="text-lg text-Gray">Hr</span>
                    </h3>
                    <h3 className="text-[50px] text-yellow font-semibold flex items-baseline gap-x-1">
                      46 <span className="text-lg text-Gray">Min</span>
                    </h3>
                  </div>
                </div>
                <div className="h-12 w-12 bg-darkBlue rounded-2xl shadow-Iconshadow flex items-center justify-center">
                  <img src={ClockIcon} alt="ClockIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-darkBlack mt-5 rounded-2xl py-8 lg:px-8 px-4">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-white text-[30px] leading-[28px]">
                Most Rated
              </h2>
              <button
                onClick={() => getMostRatedStaff()}
                className="h-12 w-12 bg-darkBlue rounded-2xl shadow-Iconshadow flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#FFF"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-4 mt-7">
              {mostRated?.length > 0 &&
                mostRated.map((item, index) => (
                  <>
                    <div
                      className="bg-Blue rounded-xl py-3 px-4 flex items-center justify-center"
                      key={index}
                    >
                      <div className="w-full flex items-center justify-between flex-wrap">
                        <div className="flex items-center">
                          <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                            <img src={use_image} alt="" className="w-full" />
                          </div>
                          <h2 className="text-white text-[16px] font-Popins ml-4">
                            {item.staff_name}
                          </h2>
                        </div>
                        <div className="flex items-center justify-between md:w-1/2 w-full">
                          <div className="flex items-center">
                            <h2 className="text-Sky text-[16px] font-Popins md:ml-4">
                              Rating
                            </h2>
                            <h2 className="text-white text-[16px] font-Popins md:ml-4 ml-2">
                              {item.rating}
                            </h2>
                          </div>
                          <button
                            onClick={() => Staffpersonal(item._id)}
                            className="bg-Sky text-white font-Popins font-normal w-[144px] h-[40px] rounded"
                          >
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
          <div className="w-full bg-darkBlack mt-5 rounded-2xl p-8 min-h-[123px] grid grid-cols-1 items-center">
            <div className="flex items-center gap-4 md:flex-nowrap flex-wrap">
              <button
                onClick={() => setShowCharge(!showCharge)}
                className="bg-Sky text-white font-Popins font-normal md:w-[150px] w-full h-[40px] rounded"
              >
                Change Charges
              </button>
              <button
                onClick={HeandleSendNotification}
                className="bg-Sky text-white font-Popins font-normal md:w-[150px] w-full h-[40px] rounded"
              >
                Send Notification
              </button>
            </div>

            <div className="flex items-center mt-5 md:flex-nowrap flex-wrap md:justify-start justify-center">
              <div className="w-full">
                <div className="grid grid-cols-1 items-center">
                  <label
                    htmlFor="title"
                    className="font-Popins capitalize mr-2 text-white mb-2 w-10"
                  >
                    title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    class="text-white/50 bg-Blue  w-full h-[40px] rounded-md focus:outline-none pl-[10px] placeholder:text-white/50"
                    placeholder="Enter Your New Charge"
                  />
                </div>
                <div className="grid grid-cols-1 items-center mt-7">
                  <label
                    htmlFor="body"
                    className="font-Popins capitalize mr-2 text-white mb-2 w-10"
                  >
                    Body
                  </label>
                  <textarea
                    name="body"
                    id="body"
                    class="text-white/50 bg-Blue  w-full h-[40px] rounded-md focus:outline-none pl-[10px] placeholder:text-white/50"
                    placeholder="Enter Your New Charge"
                  ></textarea>
                </div>
              </div>
            </div>
            {showCharge && (
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
            )}
          </div>
        </div>
        <div className="w-full bg-darkBlack rounded-3xl p-4 xl:col-span-1 lg:col-span-2 min-h-[815px] overflow-auto">
          <div className="w-full flex items-center justify-between">
            <h4 className="text-Sky text-[20px]">
              Transaction&nbsp;
              <span className="text-white font-semibold text-[30px] leading-[27.6px]">
                History
              </span>
            </h4>
            <button
              onClick={() => getWithdraws()}
              className="h-12 w-12 bg-darkBlue rounded-2xl shadow-Iconshadow flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#FFF"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-6">
            {!loading && Withdraw.length === 0 && (
              <div className="h-[63vh] flex items-center justify-center">
                <div className="">
                  <div className="max-w-[318px] mx-auto flex items-center justify-center">
                    <img src={nodatagif} alt="" className="object-contain" />
                  </div>
                  <h2 className="text-white text-[32px] font-semibold mt-10 text-center font-Popins">
                    No Data right now!
                  </h2>
                </div>
              </div>
            )}
            {Withdraw?.length > 0 &&
              Withdraw.filter((item) => item.request_status === "pending").map(
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
                                <option
                                  value="pending"
                                  className="bg-Sky text-white"
                                >
                                  Pendding
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
                              {selectedList.requestId === withdraw._id &&
                                selectedList.status !== "pending" && (
                                  <button
                                    onClick={handleUpdateStatus}
                                    className="bg-Sky text-white font-Popins font-normal md:max-w-[144px] w-full h-[40px] rounded ml-auto md:mt-0 mt-3"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
