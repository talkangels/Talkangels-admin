import { Switch } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import nodatagif from "../../assets/StaffDetails/Animation - 1703588368832.gif";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../../layout/spinner";
import {
  DeleteListener,
  GetAllListenerRequst,
  UpdateListenerRequstStatus,
} from "../../services/listener";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../utils/routing";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Genderoption = [
  {
    id: "",
    name: "Status",
  },
  {
    id: 1,
    name: "Accept",
  },
  {
    id: 0,
    name: "Pendding",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Listeners = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(Genderoption[0]);
  const [listenerList, setListenerList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getListeners = async () => {
    setLoading(true);
    const body = {
      status: selected.id,
    };
    const result = await GetAllListenerRequst(body);
    if (result?.status === 200) {
      setListenerList(result?.data);
      setLoading(false);
    } else {
      setListenerList([]);
      setLoading(false);
    }
  };
  useEffect(() => {
    getListeners();
  }, [selected]);

  const handleSwitchChange = async (index) => {
    if (index) {
      setLoading(true);
      const body = {
        id: index._id,
        data: { status: index?.status === 1 ? 0 : 1 },
      };
      const result = await UpdateListenerRequstStatus(body);
      if (result?.status === 200) {
        setLoading(false);
        getListeners();
        toast.success(result?.message);
      } else {
        setLoading(false);
        toast.error(result?.message);
      }
    }
  };

  const heandleDelete = async (id) => {
    setLoading(true);
    const result = await DeleteListener(id);
    if (result?.status === 200) {
      setLoading(false);
      toast.success(result.message);
      getListeners();
    } else {
      setLoading(false);
      toast.error(result.message);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="mt-16 w-full overflow-x-auto">
        {!loading && listenerList.length === 0 ? (
          <>
            <div className="h-[63vh] flex items-center justify-center">
              <div className="">
                <div className="max-w-[318px] mx-auto flex items-center justify-center">
                  <img src={nodatagif} alt="" className="object-contain" />
                </div>
                <h2 className="text-white text-[32px] font-semibold mt-10 text-center font-Popins">
                  No Listener to show right now!
                </h2>
              </div>
            </div>
          </>
        ) : (
          <>
            <table className="min-w-[1000px] w-full min-h-[200px]">
              <thead className="bg-darkBlue sticky top-0 z-10 ">
                <tr className="h-[60px]">
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg rounded-tl-[20px] pl-[23px]"
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Mobile No.
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Language
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Gender
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Age
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg px-[27px]"
                  >
                    <Listbox value={selected} onChange={setSelected}>
                      {({ open }) => (
                        <>
                          <div className="relative">
                            <Listbox.Button className="relative text-white/50 bg-darkBlack w-full h-[40px] rounded-md focus:outline-none pl-[20px] placeholder:text-white/50">
                              <span className="block truncate text-left text-sm">
                                {selected.name || "Status"}
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
                                        "relative select-none text-sm font-Popins cursor-pointer py-2 pl-3 pr-4"
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
                  </th>
                </tr>
              </thead>
              <tbody className="[&>*:nth-child(odd)]:bg-Blue [&>*:nth-child(even)]:bg-TableCell">
                {listenerList.map((user, i) => (
                  <tr className="h-[50px]" key={i}>
                    <>
                      <td className="text-white text-base pl-[27px]">
                        {i + 1}.
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {user.name}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {user?.country_code + " " + user?.mobile_number}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {user.email}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {user.language}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {user.gender}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {user.age}
                      </td>
                      {user?.status === 0 && (
                        <td className="text-white text-base text-center">
                          <Switch
                            checked={user?.status === 1}
                            onChange={() => handleSwitchChange(user)}
                            className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:border-none focus-visible:outline-none focus:ring-0"
                          >
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute h-full w-full rounded-md"
                            />
                            <span
                              aria-hidden="true"
                              className={classNames(
                                user?.status === 1
                                  ? "bg-lightgreen"
                                  : "bg-[#36394E]",
                                "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"
                              )}
                            />
                            <span
                              aria-hidden="true"
                              className={classNames(
                                user?.status === 1
                                  ? "translate-x-5 bg-green"
                                  : "translate-x-0 bg-[#798593]",
                                "pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full shadow ring-0 transition-transform duration-200 ease-in-out"
                              )}
                            />
                          </Switch>
                        </td>
                      )}
                      {user?.status === 1 && (
                        <td>
                          <div className="flex items-center justify-between px-10 text-[#5686de] text-base">
                            <p
                              onClick={() =>
                                navigate(Routing.StaffDetails, {
                                  state: {
                                    data: user,
                                  },
                                })
                              }
                              className="cursor-pointer"
                            >
                              Add
                            </p>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="red"
                              className="w-5 h-5 cursor-pointer"
                              onClick={() => heandleDelete(user?._id)}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </div>
                        </td>
                      )}
                    </>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};

export default Listeners;
