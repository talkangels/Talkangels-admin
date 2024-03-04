import React, { useEffect } from "react";
import Bio from "../../assets/StaffDetails/addBio.png";
import User from "../../assets/StaffDetails/user.png";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Gender from "../../assets/StaffDetails/gender.png";
import { GetAllStaffList } from "../../services/staff";
import { GetAllUser } from "../../services/user";
import { SendNotificationUser } from "../../services/dashboard";
import { toast } from "react-toastify";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SendNotification = ({ setLoading, setShowNotification }) => {
  const Typeoption = [
    { id: "1", name: "Message", select: 0 },
    { id: "2", name: "Offer", select: 0 },
    { id: "3", name: "Other", select: 0 },
  ];
  const [staffList, setStaffList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedAngel, setSelectedAngel] = useState("");

  const [bodyData, setBodyData] = useState({
    title: "",
    body: "",
  });

  const getStaff = async () => {
    const body = {
      page_no: "",
      items_per_page: "",
      search_text: "",
    };
    const result = await GetAllStaffList(body);
    if (result?.status === 200) {
      const StaffList = [];
      for (var j in result.data) {
        StaffList.push({
          id: result.data[j]._id,
          name: result.data[j].name,
          select: 0,
        });
      }
      setStaffList(StaffList);
    } else {
      setStaffList([]);
    }
  };

  const getUsers = async () => {
    const body = {
      page_no: "",
      items_per_page: "",
      search_text: "",
    };
    const result = await GetAllUser(body);
    const UserList = [];
    if (result?.status === 200) {
      for (var j in result.data) {
        UserList.push({
          id: result.data[j]._id,
          name: result.data[j].name,
          select: false,
        });
      }
      setUserList(UserList);
    } else {
      setUserList([]);
    }
  };

  useEffect(() => {
    getStaff();
    getUsers();
  }, []);

  const handelChangeUser = (e, id) => {
    const checked = e.target.checked;
    if (e) {
      setUserList(
        userList.map((item, index) =>
          item.id === id
            ? {
                ...item,
                select: checked,
              }
            : item
        )
      );
    }
  };

  const HeandleSendNotification = async () => {
    setLoading(true);
    const body = {
      title: bodyData.title,
      body: bodyData.body,
      userIds: userList
        .filter((person) => person.select)
        .map((person) => person.id),
      angel_id: selectedAngel?.id ? selectedAngel?.id : "",
      type: selectedType?.name ? selectedType?.name : "",
    };
    const result = await SendNotificationUser(body);
    if (result.status === 200) {
      toast.success(result.message);
      setLoading(false);
      setBodyData({
        title: "",
        body: "",
      });
      setSelectedAngel("");
      setSelectedType("");
      getStaff();
      getUsers();
    } else {
      toast.error(result.message);
      setLoading(false);
    }
  };

  const clearField = () => {
    getUsers();
    setBodyData({
      title: "",
      body: "",
    });
    setSelectedAngel("");
    setSelectedType("");
    getStaff();
  };

  return (
    <div className="flex items-center mt-10 md:flex-nowrap flex-wrap md:justify-start justify-center">
      <div className="w-full">
        <div className="w-full relative lg:col-span-1 grid grid-cols-2 border-2 border-white rounded-md">
          <img
            src={User}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 left-6"
          />
          <input
            value={bodyData.title}
            onChange={(e) =>
              setBodyData({ ...bodyData, title: e.target.value })
            }
            type="text"
            name="title"
            className="text-white/50 bg-darkBlack w-full h-[50px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
            placeholder="Enter Title"
          />
        </div>
        <div className="w-full relative col-span-2 border-2 border-white mt-5 rounded-md">
          <img src={Bio} alt="" className="absolute top-[15px] left-6" />
          <textarea
            value={bodyData.body}
            onChange={(e) => setBodyData({ ...bodyData, body: e.target.value })}
            className="text-white/50 bg-darkBlack w-full h-[80px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50 pt-[15px]"
            placeholder="Enter Body"
            name="bio"
          ></textarea>
        </div>
        <div className="w-full flex md:flex-nowrap flex-wrap justify-between items-center mt-5 gap-5">
          <div className="w-full border-2 border-white rounded-md">
            <Listbox value={selectedAngel} onChange={setSelectedAngel}>
              {({ open }) => (
                <>
                  <div className="relative">
                    <Listbox.Button className="relative w-full text-white/50 bg-darkBlack h-[50px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50">
                      <span className="absolute top-1/2 -translate-y-1/2 left-6">
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
                      </span>
                      <span className="block truncate text-left">
                        {selectedAngel.name
                          ? selectedAngel.name
                          : "Select Angel"}
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
                        {staffList.map((person) => (
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
                                <label
                                  htmlFor={person.id}
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    " truncate flex items-center justify-between"
                                  )}
                                >
                                  {person.name}
                                  <input
                                    id={person.id}
                                    name="plan"
                                    type="radio"
                                    defaultChecked={selected}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                </label>
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
          <div className="w-full border-2 border-white rounded-md">
            <Listbox>
              {({ open }) => (
                <>
                  <div className="relative">
                    <Listbox.Button className="relative w-full text-white/50 bg-darkBlack h-[50px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50">
                      <span className="absolute top-1/2 -translate-y-1/2 left-6">
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
                      </span>
                      <span className="block truncate text-left">
                        {userList
                          .filter((person) => person.select)
                          .map((person) => person.name)
                          .join(", ") || "Select User"}
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
                      leaveTo="opacity-100"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {userList.map((person) => (
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
                            <label
                              htmlFor={person.id}
                              className={classNames(
                                person.select ? "font-semibold" : "font-normal",
                                " truncate flex items-center justify-between"
                              )}
                            >
                              {person.name}
                              <input
                                name="plan"
                                type="checkbox"
                                checked={person.select}
                                id={person.id}
                                onChange={(e) => handelChangeUser(e, person.id)}
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </label>
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
          <div className="w-full border-2 border-white rounded-md">
            <Listbox value={selectedType} onChange={setSelectedType}>
              {({ open }) => (
                <>
                  <div className="relative">
                    <Listbox.Button className="relative w-full text-white/50 bg-darkBlack h-[50px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50">
                      <span className="absolute top-1/2 -translate-y-1/2 left-6">
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
                      </span>
                      <span className="block truncate text-left">
                        {selectedType.name ? selectedType.name : "Select Type"}
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
                        {Typeoption.map((person) => (
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
                                <label
                                  htmlFor={person.id}
                                  className={classNames(
                                    selectedType?.id === person.id
                                      ? "font-semibold"
                                      : "font-normal",
                                    " truncate flex items-center justify-between"
                                  )}
                                >
                                  {person.name}
                                  <input
                                    id={person.id}
                                    name="plan"
                                    type="radio"
                                    defaultChecked={
                                      selectedType?.id === person.id
                                    }
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                </label>
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
        </div>
        <div className="w-full flex items-center justify-between mt-5">
          <button
            onClick={clearField}
            className="bg-Blue text-red font-Popins font-normal md:w-[100px] w-full h-[40px] rounded"
          >
            Clear
          </button>
          <button
            onClick={HeandleSendNotification}
            className="bg-Sky text-white font-Popins font-normal md:w-[150px] w-full h-[40px] rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendNotification;
