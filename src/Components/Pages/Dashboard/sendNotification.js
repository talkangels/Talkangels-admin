import React, { useEffect } from "react";
import Bio from "../../assets/StaffDetails/addBio.png";
import User from "../../assets/StaffDetails/user.png";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Gender from "../../assets/StaffDetails/gender.png";
import { GetAllStaffList } from "../../services/staff";
import { GetAllUser } from "../../services/user";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SendNotification = () => {
  const Typeoption = [
    { id: 1, name: "Message" },
    { id: 2, name: "Offer" },
    { id: 3, name: "Other" },
  ];
  const [staffList, setStaffList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedAngel, setSelectedAngel] = useState("");
  const [selectedUser, setSelectedUser] = useState([]);

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

  const [selectedUsers, setSelectedUsers] = useState([]);

  const toggleUserSelection = (user) => {
    setSelectedUsers((prevSelectedUsers) => {
      if (prevSelectedUsers?.includes(user)) {
        return prevSelectedUsers.filter(
          (selectedUser) => selectedUser !== user
        );
      } else {
        return [...prevSelectedUsers, user];
      }
    });
  };

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

  return (
    <div className="flex items-center mt-5 md:flex-nowrap flex-wrap md:justify-start justify-center">
      <div className="w-full">
        <div className="w-full relative lg:col-span-1 grid grid-cols-2 border-2 border-white rounded-md">
          <img
            src={User}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 left-6"
          />
          <input
            type="text"
            name="name"
            className="text-white/50 bg-darkBlack w-full h-[50px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
            placeholder="Enter Title"
          />
        </div>
        <div className="w-full relative col-span-2 border-2 border-white mt-5 rounded-md">
          <img src={Bio} alt="" className="absolute top-[15px] left-6" />
          <textarea
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
                        <img src={Gender} alt="" />
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
                            {({ selectedAngel, active }) => (
                              <>
                                <span
                                  className={classNames(
                                    selectedAngel
                                      ? "font-semibold"
                                      : "font-normal",
                                    " truncate flex items-center justify-between"
                                  )}
                                >
                                  {person.name}
                                  <input
                                    name="plan"
                                    type="radio"
                                    defaultChecked={selectedAngel}
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
          <div className="w-full border-2 border-white rounded-md">
            <Listbox>
              {({ open }) => (
                <>
                  <div className="relative">
                    <Listbox.Button className="relative w-full text-white/50 bg-darkBlack h-[50px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50">
                      <span className="absolute top-1/2 -translate-y-1/2 left-6">
                        <img src={Gender} alt="" />
                      </span>
                      <span className="block truncate text-left">
                        {userList
                          .filter((person) => person.select)
                          .map((person) => person.name)
                          .join(", ") || "Select Type"}
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
                        <img src={Gender} alt="" />
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
                            {({ selectedType, active }) => (
                              <>
                                <span
                                  className={classNames(
                                    selectedType
                                      ? "font-semibold"
                                      : "font-normal",
                                    " truncate flex items-center justify-between"
                                  )}
                                >
                                  {person.name}
                                  <input
                                    name="plan"
                                    type="radio"
                                    defaultChecked={selectedType}
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
        </div>
        <div className="w-full flex items-center justify-end mt-5">
          <button className="bg-Sky text-white font-Popins font-normal md:w-[150px] w-full h-[40px] rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendNotification;
