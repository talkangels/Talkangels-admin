import React from "react";
import userselect from "../../assets/StaffDetails/useruelecticon.png";
import Call from "../../assets/StaffDetails/call.png";
import Gender from "../../assets/StaffDetails/gender.png";
import Bio from "../../assets/StaffDetails/addBio.png";
import User from "../../assets/StaffDetails/user.png";
import Age from "../../assets/StaffDetails/age.png";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AddStaffDetail } from "../../services/staff";
import { toast } from "react-toastify";
import Spinner from "../../layout/spinner";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

// select
const Genderoption = ["Male", "Female", "Other"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Addstaff = ({ setStaff, dataForm }) => {
  const [selected, setSelected] = useState(dataForm?.gender || "");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfrimPassword, setshowConfrimPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfrimPasswordVisibility = () => {
    setshowConfrimPassword(!showConfrimPassword);
  };

  const [staffDetail, setStaffDetail] = useState({
    name: dataForm.name || "",
    country_code: dataForm.country_code || "",
    mobile_number: dataForm.mobile_number || "",
    bio: dataForm.bio || "",
    email: dataForm.email || "",
    language: dataForm.language || "",
    age: dataForm.age || "",
    password: dataForm.password || "",
    Confrim_password: dataForm.Confrim_password || "",
    request_status: dataForm.request_status || "",
  });
  const [image, SetImage] = useState({
    image: null,
    image_url: "",
  });

  function processImage(event) {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    SetImage({ image: imageFile, image_url: imageUrl });
  }


  const handleStaffdata = (e) => {
    setStaffDetail({ ...staffDetail, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("name", staffDetail.name);
    formData.append("country_code", staffDetail.country_code || '+91');
    formData.append("mobile_number", staffDetail.mobile_number);
    formData.append("gender", selected);
    formData.append("bio", staffDetail.bio);
    formData.append("email", staffDetail.email);
    formData.append("language", staffDetail.language);
    formData.append("age", staffDetail.age);
    formData.append("image", image.image);
    formData.append("password", staffDetail.password);
    formData.append("Confrim_password", staffDetail.Confrim_password);
    formData.append("request_status", staffDetail.request_status || 'admin');

    const result = await AddStaffDetail(formData);
    if (result?.status === 201) {
      toast.success(result?.message);
      setStaffDetail({
        image: "",
        name: "",
        mobile_number: "",
        bio: "",
        email: "",
        age: "",
        language: "",
        password: "",
        Confrim_password: ""
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
              Add New Staff
            </h2>
            <p className="text-lightgray">
              Please fill below given details to add new staff
            </p>
          </div>

          <button className="h-[138px] w-[138px] bg-darkBlack rounded-full flex items-center justify-center relative">
            <img
              src={image.image_url ? image.image_url : userselect}
              alt=""
              className={`${image.image_url
                ? "h-[138px] w-[138px] bg-darkBlack rounded-full flex items-center justify-center relative"
                : null
                }`}
            />
            <input
              type="file"
              accept="image/*"
              onChange={processImage}
              className="h-[138px] w-[138px] rounded-full opacity-0 absolute top-0 left-0 cursor-pointer"
            />
          </button>
        </div>
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
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
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
                disabled={staffDetail.request_status === 'listner'}
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
                disabled={staffDetail.request_status === 'listner'}
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
            <div className="w-full relative col-span-2 flex items-center justify-end">
              <button
                className="sm:w-[200px] text-xl w-full h-[60px] bg-Sky rounded-md text-white ml-auto"
                onClick={() => handleSubmit()}
              >
                Create a Staff
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addstaff;
