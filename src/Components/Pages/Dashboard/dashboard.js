import React, { useEffect, useState } from "react";
import ClockIcon from "../../assets/dashboard/clock.png";
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
import SendNotification from "./sendNotification";
import Charges from "./charges";
import TransactionDashboard from "./transactionHistory";

const Dashboard = () => {
  const navigate = useNavigate();

  const [Withdraw, setWithdraw] = useState([]);
  console.log("🚀 ~ Dashboard ~ Withdraw:", Withdraw);
  const [loading, setLoading] = useState(false);
  const [mostRated, setMostRated] = useState([]);
  const [adminDetail, setAdminDetail] = useState({});

  const [charge, setCharge] = useState("");
  const [showCharge, setShowCharge] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

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
                            <img
                              src={
                                item.image
                                  ? item.image
                                  : "https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"
                              }
                              alt=""
                              className="w-full"
                            />
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
                onClick={() => {
                  setShowCharge(true);
                  setShowNotification(false);
                }}
                className={`${
                  showCharge ? "bg-red" : "bg-Sky"
                } text-white font-Popins font-normal md:w-[150px] w-full h-[40px] rounded`}
              >
                Change Charges 
              </button>
              <button
                onClick={() => {
                  setShowNotification(!showNotification);
                  setShowCharge(false);
                }}
                className={`${
                  showNotification ? "bg-red" : "bg-Sky"
                } text-white font-Popins font-normal md:w-[150px] w-full h-[40px] rounded`}
              >
                Send Notification
              </button>
            </div>

            {showNotification && (
              <SendNotification
                setLoading={setLoading}
                setShowNotification={setShowNotification}
              />
            )}

            {showCharge && (
              <Charges
                setCharge={setCharge}
                adminDetail={adminDetail}
                charge={charge}
                heandleCharges={heandleCharges}
              />
            )}
          </div>
        </div>
        <div className="w-full bg-darkBlack rounded-3xl p-4 xl:col-span-1 lg:col-span-2 h-fit overflow-auto">
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
            {!loading &&
              Withdraw.filter((item) => item.request_status === "pending")
                .length === 0 && (
                <div className="h-[65vh] flex items-center justify-center">
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
            {Withdraw?.length > 0 && (
              <TransactionDashboard
                Withdraw={Withdraw}
                setSelectedList={setSelectedList}
                handleUpdateStatus={handleUpdateStatus}
                selectedList={selectedList}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
