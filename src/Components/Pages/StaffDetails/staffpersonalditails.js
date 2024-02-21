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
              <div className="flex items-center col-span-2">
                <div className="bg-[#2A2949] min-h-10 min-w-10 rounded-lg flex items-center justify-center">
                  <img src={Language} alt="Username" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lightgray text-[17px]">Language</h4>
                  <h4 className="text-white text-[22px]">
                    {staffDetail.Language}
                  </h4>
                </div>
              </div>
              <div className="flex items-start col-span-2">
                <div className="bg-[#2A2949] min-h-10 min-w-10 rounded-lg flex items-center justify-center">
                  <img src={Bio} alt="Username" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lightgray text-[17px]">Bio</h4>
                  <h4 className="text-white text-[22px]">{staffDetail.bio}</h4>
                </div>
              </div>
              <div className="flex items-center col-span-2">
                <div className="bg-[#2A2949] min-h-10 min-w-10 rounded-lg flex items-center justify-center">
                  <img src={Language} alt="Username" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lightgray text-[17px]">
                    Customer Rating{" "}
                    <span className="text-green">
                      ({staffDetail?.total_rating?.toFixed(2)})
                    </span>
                  </h4>
                  <h4 className="text-white text-[22px]">
                    {staffDetail?.listing?.total_minutes} Listing Hours
                    <span className="w-full block">
                      {staffDetail?.reviews?.length}+ Reviews
                    </span>
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
