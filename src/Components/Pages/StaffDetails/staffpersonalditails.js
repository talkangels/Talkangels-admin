import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Routing } from "../../../utils/routing";
import { PhoneIcon } from "@heroicons/react/20/solid";
import Username from "../../assets/StaffDetails/username.png";
import Age from "../../assets/StaffDetails/age.png";
import Gender from "../../assets/StaffDetails/gender.png";
import Language from "../../assets/StaffDetails/language.png";
import Bio from "../../assets/StaffDetails/addBio.png";
import User from "../../assets/StaffDetails/Ellipse 46.png";
import { DeleteStaff, SingleStaff } from "../../services/staff";
import Spinner from "../../layout/spinner";
import { toast } from "react-toastify";

const Staffpersonalditails = () => {
  const navigate = useNavigate();
  const staffid = useParams();

  const heandleNavigate = () => {
    navigate(Routing.StaffDetails, { state: { tab: 1 } });
  };

  const [staffDetail, setStaffList] = useState([]);
  console.log("🚀 ~ Staffpersonalditails ~ staffDetail:", staffDetail);
  const [loading, setLoading] = useState(false);

  const getSingleStaff = async () => {
    setLoading(true);
    const result = await SingleStaff(staffid.id);
    if (result?.status === 200) {
      setLoading(false);
      setStaffList(result?.data);
    } else {
      setStaffList([]);
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleStaff();
  }, []);

  const heandleDelete = async () => {
    setLoading(true);
    const result = await DeleteStaff(staffid.id);
    if (result?.status === 200) {
      setLoading(false);
      toast.success(result.message);
      heandleNavigate();
    } else {
      setLoading(false);
      toast.error(result.message);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="py-[32px] bg-Background_gradint rounded-[20px] lg:pl-11 md:pr-16 px-4">
        <div className="w-full flex justify-between items-center border-b border-[#FFFFFF12]">
          <div className="flex items-start pb-5">
            <ArrowLeftIcon
              className="w-5 text-white cursor-pointer"
              onClick={heandleNavigate}
            />
            <p className="text-Gray font-league font-light text-base ml-3 select-none hidden xs:block">
              Dashboard/StaffDetails/ListofStaff/More
            </p>
          </div>
          <div className="flex items-start pb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              class="w-6 h-6 cursor-pointer"
              onClick={heandleDelete}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </div>
        <div className="pt-12">
          <h3 className="text-white font-semibold text-4xl">
            {staffDetail.name}
          </h3>
          <div className="flex items-start mt-7 xl:flex-nowrap flex-wrap xl:flex-row gap-y-6 flex-col-reverse justify-between">
            <div className="flex flex-col sm:grid xl:grid-cols-2 grid-cols-1 xl:gap-x-[110px] gap-y-8 w-[80%]">
              <div className="flex items-center">
                <div className="bg-[#2A2949] min-h-10 min-w-10 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lightgray text-[17px]">Mobile No.</h4>
                  <h4 className="text-white text-[22px]">
                    {staffDetail.mobile_number}
                  </h4>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#2A2949] min-h-10 min-w-10 rounded-lg flex items-center justify-center">
                  <img src={Username} alt="Username" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lightgray text-[17px]">Username</h4>
                  <h4 className="text-white text-[22px]">
                    {staffDetail.user_name}
                  </h4>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#2A2949] min-h-10 min-w-10 rounded-lg flex items-center justify-center">
                  <img src={Age} alt="Username" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lightgray text-[17px]">Age</h4>
                  <h4 className="text-white text-[22px]">
                    {staffDetail.Age} Years old
                  </h4>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#2A2949] min-h-10 min-w-10 rounded-lg flex items-center justify-center">
                  <img src={Gender} alt="Username" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lightgray text-[17px]">Gender</h4>
                  <h4 className="text-white text-[22px]">
                    {staffDetail.gender}
                  </h4>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#2A2949] min-h-10 min-w-10 rounded-lg flex items-center justify-center">
                  <img src={Language} alt="Username" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lightgray text-[17px]">Language</h4>
                  <h4 className="text-white text-[22px]">
                    {staffDetail.Language || "English"}
                  </h4>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#2A2949] min-h-10 min-w-10 rounded-lg flex items-center justify-center">
                  {/* <img src={Language} alt="Username" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#fff"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lightgray text-[17px] capitalize">
                    current earnings
                  </h4>
                  <h4 className="text-white text-[22px]">
                    {staffDetail?.earnings?.current_earnings || "00"}
                  </h4>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#2A2949] min-h-10 min-w-10 rounded-lg flex items-center justify-center">
                  <img src={Bio} alt="Username" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lightgray text-[17px]">Bio</h4>
                  <h4 className="text-white text-[22px]">{staffDetail.bio}</h4>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#2A2949] min-h-10 min-w-10 rounded-lg flex items-center justify-center">
                  {/* <img src={Language} alt="Username" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#fff"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lightgray text-[17px] capitalize">
                    total money withdraws
                  </h4>
                  <h4 className="text-white text-[22px]">
                    {staffDetail?.earnings?.total_money_withdraws || "00"}
                  </h4>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#2A2949] min-h-10 min-w-10 rounded-lg flex items-center justify-center">
                  {/* <img src={Language} alt="Username" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#fff"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lightgray text-[17px]">
                    Customer Rating{" "}
                    <span className="text-green">
                      ({staffDetail?.total_rating?.toFixed(2)})
                    </span>
                  </h4>
                  <h4 className="text-white text-[22px]">
                    {staffDetail?.listing?.total_minutes} Listening Hours
                    <span className="w-full block">
                      {staffDetail?.reviews?.length}+ Reviews
                    </span>
                  </h4>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#2A2949] min-h-10 min-w-10 rounded-lg flex items-center justify-center">
                  {/* <img src={Language} alt="Username" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#fff"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lightgray text-[17px] capitalize">
                    total pending money
                  </h4>
                  <h4 className="text-white text-[22px]">
                    {staffDetail?.earnings?.total_pending_money || "00"}
                  </h4>
                </div>
              </div>
            </div>
            <div className="min-w-[255px] min-h-[255px] rounded-full">
              <img
                src={staffDetail.image ? staffDetail.image : User}
                alt=""
                className="rounded-full w-[255px] h-[255px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staffpersonalditails;
