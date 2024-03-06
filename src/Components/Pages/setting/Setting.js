import React, { useEffect, useState } from "react";
import userselect from "../../assets/StaffDetails/useruelecticon.png";
import Usename from "../../assets/StaffDetails/username.png";
import Call from "../../assets/StaffDetails/call.png";
import User from "../../assets/StaffDetails/user.png";
import { GetOneAdmin, UpdateAdminDetail } from "../../services/auth";
import Spinner from "../../layout/spinner";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../utils/routing";

const Setting = () => {
  const navigate = useNavigate();

  const id = JSON.parse(window.localStorage.getItem("userDetail"))?._id;
  const [loading, setLoading] = useState(false);
  const [adminDetail, setAdminDetail] = useState({
    name: "",
    email: "",
    mobile_number: "",
  });

  const handleStaffdata = (e) => {
    setAdminDetail({ ...adminDetail, [e.target.name]: e.target.value });
  };

  const getAdminDetail = async () => {
    setLoading(true);
    const result = await GetOneAdmin(id);
    if (result.status === 200) {
      setAdminDetail({
        name: result.data.name,
        email: result.data.email,
        mobile_number: result.data.mobile_number,
      });
      setLoading(false);
    } else {
      setAdminDetail({
        name: "",
        email: "",
        mobile_number: "",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    getAdminDetail();
  }, []);

  const handelUpdatedetail = async () => {
    setLoading(true);
    const result = await UpdateAdminDetail(adminDetail, id);
    if (result?.status === 200) {
      setLoading(false);
      toast.success(result?.message);
      setAdminDetail({
        name: "",
        email: "",
        mobile_number: "",
      });
      navigate(Routing.Dashboard);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };
  return (
    <>
      {loading && <Spinner />}
      <div className="py-7 sm:px-9 px-2 bg-Background_gradint rounded-[20px] ">
        <div className="mt-16">
          <div className="flex justify-between flex-wrap gap-2">
            <div>
              <h2 className="text-white font-Popins text-[24px]">
                Update Admin Detail
              </h2>
              <p className="text-lightgray">
                Please fill below given details to update admin detail
              </p>
            </div>
          </div>
          <div className="mt-20">
            <div className="grid grid-cols-2 gap-5">
              <div className="w-full relative lg:col-span-1 col-span-2">
                <img
                  src={User}
                  alt=""
                  className="absolute top-1/2 -translate-y-1/2 left-6"
                />
                <input
                  type="text"
                  name="name"
                  value={adminDetail.name}
                  onChange={handleStaffdata}
                  className="text-white bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white"
                  placeholder="Name"
                />
              </div>
              <div className="w-full relative lg:col-span-1 col-span-2">
                <img
                  src={Call}
                  alt=""
                  className="absolute top-1/2 -translate-y-1/2 left-6"
                />
                <input
                  name="mobile_number"
                  type="number"
                  onChange={handleStaffdata}
                  value={adminDetail.mobile_number}
                  className="text-white bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white"
                  placeholder="Mobile Namber"
                />
              </div>
              <div className="w-full relative col-span-2">
                <img
                  src={Usename}
                  alt=""
                  className="absolute top-1/2 -translate-y-1/2 left-6"
                />
                <input
                  type="text"
                  name="email"
                  onChange={handleStaffdata}
                  value={adminDetail.email}
                  className="text-white bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white"
                  placeholder="email"
                />
              </div>
              <div className="w-full relative col-span-2 flex items-center justify-end">
                <button
                  onClick={handelUpdatedetail}
                  className="sm:w-[200px] w-full h-[60px] bg-Sky rounded-md text-white ml-auto text-xl"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
