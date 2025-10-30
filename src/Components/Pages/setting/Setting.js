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
import { MdInstallMobile } from "react-icons/md";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Setting = () => {
  const navigate = useNavigate();

  const id = JSON.parse(window.localStorage.getItem("userDetail"))?._id;
  const [loading, setLoading] = useState(false);
  const [adminDetail, setAdminDetail] = useState({
    name: "",
    email: "",
    mobile_number: "",
    staff_charges: "",
    user_charges: "",
    revenue: "",
    App_version_force: "",
    App_Version_Name: "",
    App_Version_Code: ""
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
        staff_charges: result.data.staff_charges,
        user_charges: result.data.user_charges,
        revenue: result.data.revenue,
        App_version_force: result.data.App_version_force,
        App_Version_Name: result.data.App_Version_Name,
        App_Version_Code: result.data.App_Version_Code
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
      getAdminDetail();
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const handelUpdateForceInstall = async (Force_install) => {
    setLoading(true);
    const body = {
      App_version_force: !Force_install
    }

    console.log(body);
  
    const result = await UpdateAdminDetail(body, id);
    if (result?.status === 200) {
      setLoading(false);
      toast.success(result?.message);
      getAdminDetail();
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
              <div className="w-full relative lg:col-span-1 col-span-2">
                {
                  adminDetail.staff_charges &&
                  <label className="text-white">Staff Charges</label>
                }
                <div className="w-full relative">
                  <img
                    src={User}
                    alt=""
                    className="absolute top-1/2 -translate-y-1/2 left-6"
                  />
                  <input
                    name="staff_charges"
                    type="number"
                    onChange={handleStaffdata}
                    value={adminDetail.staff_charges}
                    className="text-white bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white"
                    placeholder="Staff Charges"
                  />
                </div>
              </div>
              <div className="w-full lg:col-span-1 col-span-2">
                {
                  adminDetail.user_charges &&
                  <label className="text-white">User Charges</label>
                }
                <div className="w-full relative">
                  <img
                    src={User}
                    alt=""
                    className="absolute top-1/2 -translate-y-1/2 left-6"
                  />
                  <input
                    name="user_charges"
                    type="number"
                    onChange={handleStaffdata}
                    value={adminDetail.user_charges}
                    className="text-white bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white"
                    placeholder="User Charges"
                  />
                </div>
              </div>
              <div className="col-span-2 grid grid-cols-11 gap-5">
                <div className="w-full relative col-span-5">
                  {
                    adminDetail.App_Version_Name &&
                    <label className="text-white">App Version Name</label>
                  }
                  <div className="w-full relative">
                    <MdInstallMobile className="absolute top-1/2 -translate-y-1/2 left-6 text-[25px] text-white" />
                    <input
                      name="App_Version_Name"
                      type="text"
                      onChange={handleStaffdata}
                      value={adminDetail.App_Version_Name}
                      className="text-white bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white"
                      placeholder="Staff Charges"
                    />
                  </div>
                </div>
                <div className="w-full relative col-span-5">
                  {
                    adminDetail.App_Version_Code &&
                    <label className="text-white">App Version Code</label>
                  }
                  <div className="w-full relative">
                    <MdInstallMobile className="absolute top-1/2 -translate-y-1/2 left-6 text-[25px] text-white" />
                    <input
                      name="App_Version_Code"
                      type="text"
                      onChange={handleStaffdata}
                      value={adminDetail.App_Version_Code}
                      className="text-white bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white"
                      placeholder="User Charges"
                    />
                  </div>
                </div>
                <div className="w-full relative ">
                  <label className="text-white text-center">Force Install</label>
                  <div className="w-full flex items-center justify-center h-[70px]">
                    <Switch
                      checked={adminDetail.App_version_force}
                      onChange={() => handelUpdateForceInstall(adminDetail.App_version_force)}
                      className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:border-none focus-visible:outline-none focus:ring-0"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute h-full w-full rounded-md"
                      />
                      <span
                        aria-hidden="true"
                        className={classNames(
                          adminDetail.App_version_force
                            ? "bg-lightgreen"
                            : "bg-[#36394E]",
                          "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"
                        )}
                      />
                      <span
                        aria-hidden="true"
                        className={classNames(
                          adminDetail.App_version_force
                            ? "translate-x-5 bg-green"
                            : "translate-x-0 bg-[#798593]",
                          "pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full shadow ring-0 transition-transform duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full flex-wrap col-span-2 p-5">
                <div className="flex items-center">
                  <div className="bg-[#2A2949] min-h-10 min-w-10 rounded-lg flex items-center justify-center">
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
                      {adminDetail.revenue?.revenue_earnings || "00"}
                    </h4>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#2A2949] min-h-10 min-w-10 rounded-lg flex items-center justify-center">
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
                      {adminDetail.revenue?.total_pending_money || "00"}
                    </h4>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#2A2949] min-h-10 min-w-10 rounded-lg flex items-center justify-center">
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
                      {adminDetail.revenue?.total_money_withdraws || "00"}
                    </h4>
                  </div>
                </div>
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
