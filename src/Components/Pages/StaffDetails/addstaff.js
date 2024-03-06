import React from "react";
import userselect from "../../assets/StaffDetails/useruelecticon.png";
import Usename from "../../assets/StaffDetails/username.png";
import Call from "../../assets/StaffDetails/call.png";
import Gender from "../../assets/StaffDetails/gender.png";
import Bio from "../../assets/StaffDetails/addBio.png";
import User from "../../assets/StaffDetails/user.png";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AddStaffDetail } from "../../services/staff";
import { toast } from "react-toastify";
import Spinner from "../../layout/spinner";

// select
const Genderoption = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
  { id: 3, name: "Other" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Addstaff = ({ setStaff }) => {
  const [selected, setSelected] = useState(Genderoption[0]);
  const [loading, setLoading] = useState(false);

  const [staffDetail, setStaffDetail] = useState({
    name: "",
    mobile_number: "",
    bio: "",
    user_name: "",
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
    formData.append("mobile_number", staffDetail.mobile_number);
    formData.append("gender", selected.name);
    formData.append("bio", staffDetail.bio);
    formData.append("user_name", staffDetail.user_name);
    formData.append("image", image.image);

    const result = await AddStaffDetail(formData);
    if (result?.status === 201) {
      toast.success(result?.message);
      setStaffDetail({
        image: "",
        name: "",
        mobile_number: "",
        bio: "",
        user_name: "",
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
              className={`${
                image.image_url
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
            <div className="w-full relative col-span-2">
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <div className="relative mt-2">
                      <Listbox.Button className="relative text-white/50 bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50">
                        <span className="absolute top-1/2 -translate-y-1/2 left-6">
                          <img src={Gender} alt="" />
                        </span>
                        <span className="block truncate text-left">
                          {selected.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronDownIcon
                            className={`h-6 w-6 text-white ${
                              open === true && "rotate-180"
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
                              key={person.id}
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
                                    {person.name}
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
            <div className="w-full relative col-span-2">
              <img
                src={Usename}
                alt=""
                className="absolute top-1/2 -translate-y-1/2 left-6"
              />
              <input
                type="text"
                value={staffDetail.user_name}
                onChange={handleStaffdata}
                name="user_name"
                className="text-white/50 bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
                placeholder="Username"
              />
            </div>
            <div className="w-full relative col-span-2 flex items-center justify-end">
              <button
                className="sm:w-[290px] w-full h-[60px] bg-Sky rounded-md text-white ml-auto"
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
