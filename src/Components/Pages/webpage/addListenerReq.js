import React, { Fragment, useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import Call from "../../assets/StaffDetails/call.png";
import Gender from "../../assets/StaffDetails/gender.png";
import Bio from "../../assets/StaffDetails/addBio.png";
import User from "../../assets/StaffDetails/user.png";
import Age from "../../assets/StaffDetails/age.png";
import { RiLockPasswordFill } from "react-icons/ri";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { GetCharges, SentListenerReq } from "../../services/listener";
import { toast } from "react-toastify";

const Genderoption = ["Male", "Female", "Other"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AddListenerReq = ({ setLoading, setStatus1 }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [staffDetail, setStaffDetail] = useState({
    name: "",
    mobile_number: "",
    bio: "",
    email: "",
    language: "",
    age: "",
    password: "",
    Confrim_password: ""
  });
  const [charges, setCharges] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfrimPassword, setshowConfrimPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfrimPasswordVisibility = () => {
    setshowConfrimPassword(!showConfrimPassword);
  };


  const getCharges = async () => {
    setLoading(true);
    const result = await GetCharges();
    if (result?.status === 201) {
      setLoading(false);
      setCharges(result?.data);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharges();
  }, []);

  const handleStaffdata = (e) => {
    setStaffDetail({ ...staffDetail, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    const body = {
      name: staffDetail.name,
      mobile_number: staffDetail.mobile_number,
      country_code: '+91',
      bio: staffDetail.bio,
      email: staffDetail.email,
      language: staffDetail.language,
      age: staffDetail.age,
      password: staffDetail.password,
      Confrim_password: staffDetail.Confrim_password,
      gender: selected,
    };
    const result = await SentListenerReq(body);
    if (result?.status === 201) {
      toast.success(result?.message);
      setLoading(false);
      navigate("/");
    } else {
      toast.error(result?.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <img
        src={Logo}
        alt=""
        className="w-[100px] h-[100px] border border-white rounded-2xl p-2 mx-auto"
      />
      <h1 className="text-white mt-12 mb-5 text-2xl text-center">
        Listener Job Application
      </h1>
      <h2 className="text-white mt-4 text-xl text-center">
        Listener application is an invite-only process and you might or might
        not receive an invite code depending on your profile.
      </h2>
      <h3 className="text-white mt-4 text-lg text-center">
        Payment Details - Call: Rs {charges?.call || "-"}/minute
      </h3>
      <div className="mt-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="w-full relative lg:col-span-1 col-span-2">
            <img
              src={User}
              alt=""
              className="absolute top-1/2 -translate-y-1/2 left-6"
            />
            <input
              type="text"
              value={staffDetail.name}
              onChange={handleStaffdata}
              name="name"
              className="text-white/50 bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
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
              value={staffDetail.mobile_number}
              onChange={handleStaffdata}
              name="mobile_number"
              type="number"
              className="text-white/50 bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
              placeholder="Mobile Namber"
            />
          </div>
          <div className="w-full relative lg:col-span-1 col-span-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              className="absolute top-1/2 -translate-y-1/2 left-6 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            <input
              type="email"
              value={staffDetail.email}
              onChange={handleStaffdata}
              name="email"
              className="text-white/50 bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
              placeholder="Email"
            />
          </div>
          <div className="w-full relative lg:col-span-1 col-span-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              className="absolute top-1/2 -translate-y-1/2 left-6 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>
            <input
              type="text"
              value={staffDetail.language}
              onChange={handleStaffdata}
              name="language"
              className="text-white/50 bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
              placeholder="Language"
            />
          </div>
          <div className="w-full relative lg:col-span-1 col-span-2">
            <img
              src={Age}
              alt=""
              className="absolute top-1/2 -translate-y-1/2 left-6"
            />
            <input
              type="number"
              value={staffDetail.age}
              onChange={handleStaffdata}
              name="age"
              className="text-white/50 bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
              placeholder="Age"
            />
          </div>
          <div className="w-full relative lg:col-span-1 col-span-2">
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <div className="relative">
                    <Listbox.Button className="relative text-white/50 bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50">
                      <span className="absolute top-1/2 -translate-y-1/2 left-6">
                        <img src={Gender} alt="" />
                      </span>
                      <span className="block truncate text-left">
                        {selected || "Select Gender"}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronDownIcon
                          className={`h-6 w-6 text-white ${open === true && "rotate-180"
                            }`}
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {Genderoption.map((person) => (
                          <Listbox.Option
                            key={person}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "bg-darkBlack text-white"
                                  : "text-gray-900",
                                "relative select-none text-lg font-Popins cursor-pointer py-2 pl-8 pr-4"
                              )
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    " truncate flex items-center justify-between"
                                  )}
                                >
                                  {person}
                                  <input
                                    name="plan"
                                    type="radio"
                                    defaultChecked={selected}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                </span>
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
          {/* <div className="w-full relative lg:col-span-1 col-span-2">
            <RiLockPasswordFill className="absolute top-1/2 -translate-y-1/2 left-6 text-white text-lg" />
            <input
              type={showPassword ? "text" : "password"}
              value={staffDetail.password}
              onChange={handleStaffdata}
              name="password"
              className="text-white/50 bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
              placeholder="Password"
            />
            <button
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {showPassword ? <BsFillEyeSlashFill color="white" size={20} /> : <IoEyeSharp color="white" size={20} />}
            </button>
          </div>
          <div className="w-full relative lg:col-span-1 col-span-2">
            <RiLockPasswordFill className="absolute top-1/2 -translate-y-1/2 left-6 text-white text-lg" />
            <input
              type={showConfrimPassword ? "text" : "password"}
              value={staffDetail.Confrim_password}
              onChange={handleStaffdata}
              name="Confrim_password"
              className="text-white/50 bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
              placeholder="Confirm password"
            />
            <button
              onClick={toggleConfrimPasswordVisibility}
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {showConfrimPassword ? <BsFillEyeSlashFill color="white" size={20} /> : <IoEyeSharp color="white" size={20} />}
            </button>
          </div> */}
          <div className="w-full relative col-span-2">
            <img src={Bio} alt="" className="absolute top-[27px] left-6" />
            <textarea
              className="text-white/50 bg-darkBlack w-full h-[125px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50 pt-[27px]"
              placeholder="Add Bio"
              value={staffDetail.bio}
              onChange={handleStaffdata}
              name="bio"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <button
          onClick={handleSubmit}
          className="border-2 rounded-md mt-7 mx-auto w-[110px] h-[45px] text-green font-semibold font-Popins  border-green"
        >
          Submit
        </button>
        <button
          onClick={() => setStatus1(false)}
          className="border-2 rounded-md mt-2 mx-auto w-[90px] h-[30px] text-white/25 font-semibold font-Popins  border-white/25"
        >
          Cancle
        </button>
      </div>
    </div>
  );
};

export default AddListenerReq;
