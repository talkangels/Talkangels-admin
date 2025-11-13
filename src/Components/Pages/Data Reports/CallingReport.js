import React, { Fragment, useEffect, useRef, useState } from 'react'
import Call from "../../assets/StaffDetails/call.png";
import { Listbox, Transition } from '@headlessui/react';
import Gender from "../../assets/StaffDetails/gender.png";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaCalendarCheck } from 'react-icons/fa';
import { FetchAllCallRecodes } from '../../services/dataReport';
import toast from 'react-hot-toast';
import dayjs from 'dayjs';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Spinner from '../../layout/spinner';
import nodatagif from "../../assets/StaffDetails/Animation - 1703588368832.gif";

const Genderoption = ["reject", "calling", "incoming"];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CallingReport = () => {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(10);
  const [totalPage, settotalPage] = useState("");
  const [mobile_number, setmobile_number] = useState("");
  const [CallingRecods, setCallingRecods] = useState([])
  const formRef = useRef(null);
  const toRef = useRef(null);

  const handleFrom = () => {
    formRef.current.showPicker();
  };

  const handleto = () => {
    toRef.current.showPicker();
  };


  const handleFetchCallRecods = async () => {
    try {
      setLoading(true)
      const result = await FetchAllCallRecodes(page, limit, mobile_number, selected, from, to)

      if (result?.success) {
        setLoading(false)
        settotalPage(result?.data?.totalPages)
        setCallingRecods(result?.data?.records)
      } else {
        toast.error(result?.message)
      }
    } catch (error) {
      return console.log(error.message)
    }
  }

  useEffect(() => {
    if (!mobile_number && !selected && !from && !to) {
      handleFetchCallRecods();
      return;
    }

    const handler = setTimeout(() => {
      handleFetchCallRecods();
    }, 500);

    return () => clearTimeout(handler);
  }, [page, limit, mobile_number, selected, from, to]);



  const clearFilter = () => {
    setSelected("")
    setfrom("")
    setto("")
    setmobile_number("")
  }

  return (
    <>
      {loading && <Spinner />}
      <div className='flex flex-wrap lg:flex-nowrap items-center gap-5 py-5'>
        <div className="w-full relative">
          <img
            src={Call}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 left-6"
          />
          <input
            name="mobile_number"
            type="number"
            value={mobile_number}
            onChange={(e) => setmobile_number(e.target.value)}
            className="text-white/50 bg-darkBlack w-full h-[50px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
            placeholder="Mobile Namber"
          />
        </div>
        <div className="w-full relative">
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <div className="relative">
                  <Listbox.Button className="relative text-white/50 bg-darkBlack w-full h-[50px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50">
                    <span className="absolute top-1/2 -translate-y-1/2 left-6">
                      <BiSolidPhoneCall className="text-[20px] text-white" />
                    </span>
                    <span className="block truncate text-left">
                      {selected || "Call Type"}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronDownIcon
                        className={`h-6 w-6 text-white transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
                    <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {Genderoption.map((option) => (
                        <Listbox.Option
                          key={option}
                          className={({ active }) =>
                            `${active ? "bg-darkBlack text-white" : "text-gray-900"}
                    relative select-none text-lg font-Popins cursor-pointer py-2 pl-8 pr-4`
                          }
                          value={option}
                        >
                          {({ selected }) => (
                            <span
                              className={`block truncate ${selected ? "font-semibold text-darkBlack" : "font-normal"
                                }`}
                            >
                              {option}
                            </span>
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
        <div className="w-[1000px] bg-darkBlack flex items-center justify-between rounded-md px-5">
          <input
            type="date"
            ref={formRef}
            value={from}
            onChange={(e) => setfrom(e.target.value)}
            placeholder="dd-mm-yyyy"
            className="text-white/50 bg-transparent h-[50px] focus:outline-none placeholder:text-white/50"
          />

          <FaCalendarCheck onClick={handleFrom} className="text-white text-[20px]" />
        </div>
        <div className="w-[1000px] bg-darkBlack flex items-center justify-between rounded-md px-5">
          <input
            type="date"
            ref={toRef}
            value={to}
            onChange={(e) => setto(e.target.value)}
            placeholder="dd-mm-yyyy"
            className="text-white/50 bg-transparent h-[50px]  focus:outline-none placeholder:text-white/50"
          />

          <FaCalendarCheck onClick={handleto} className="text-white text-[20px]" />
        </div>
        {(mobile_number || selected || from || to) && (
          <button
            onClick={clearFilter}
            className="bg-Sky text-white font-Popins font-normal md:w-[350px] w-full h-[40px] rounded"
          >
            Clear
          </button>
        )}
      </div>
      <div className="w-full overflow-x-auto">
        {!loading && CallingRecods.length === 0 ? (
          <>
            <div className="h-[63vh] flex items-center justify-center">
              <div className="">
                <div className="max-w-[318px] mx-auto flex items-center justify-center">
                  <img src={nodatagif} alt="" className="object-contain" />
                </div>
                <h2 className="text-white text-[32px] font-semibold mt-10 text-center font-Popins">
                  No calling records to show right now!
                </h2>
              </div>
            </div>
          </>
        ) : (
          <>
            <table className="min-w-[1000px] w-full">
              <thead className="bg-darkBlue sticky top-0 z-10 ">
                <tr className="h-[60px]">
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg rounded-tl-[20px] pl-[27px]"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Staff
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Duration
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Call Type
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg rounded-tr-[20px]"
                  >
                    Revenue ₹
                  </th>
                </tr>
              </thead>
              <tbody className="[&>*:nth-child(odd)]:bg-Blue [&>*:nth-child(even)]:bg-TableCell">
                {CallingRecods.map((item, index) => (
                  <tr key={index} className="h-[50px]">
                    <td className="text-white text-base pl-[27px] py-3">
                      <div className='flex items-center gap-2'>
                        <img
                          src={item?.user?.image}
                          alt={item?.user?.id}
                          className="w-[50px] h-[50px] rounded-full overflow-hidden object-cover"
                        />
                        <span>
                          <h2>{item?.user?.name}</h2>
                          <h2>{item?.user?.country_code} {item?.user?.mobile_number}</h2>
                        </span>
                      </div>
                    </td>
                    <td className="text-white text-base pl-[27px] py-3 ">
                      <div className='flex items-center gap-2'>
                        <img
                          src={item?.staff?.image}
                          alt={item?.staff?.id}
                          className="w-[50px] h-[50px] rounded-full overflow-hidden object-cover"
                        />
                        <span>
                          <h2>{item?.staff?.name}</h2>
                          <h2>{item?.staff?.country_code} {item?.staff?.mobile_number}</h2>
                        </span>
                      </div>
                    </td>
                    <td className="text-white text-base pl-[27px]">
                      {dayjs(item?.call_date).format('DD-MM-YYYY')}
                    </td>
                    <td className="text-white text-base pl-[27px]">
                      {item?.call_time}
                    </td>
                    <td className="text-white text-base pl-[27px]">
                      {item?.call_duration}
                    </td>
                    <td className="text-white text-base pl-[27px]">
                      {item?.call_type}
                    </td>
                    <td className="text-white text-base pl-[27px]">
                      {item?.revenue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='bg-darkBlue min-w-[1000px] w-full h-[60px] rounded-b-[20px] flex items-center justify-between px-[27px]'>
              {/* Left side — showing range info */}
              <p className="text-lg text-gray-300">
                Showing{" "}
                <span className="font-semibold text-white">
                  {(page - 1) * limit + 1}-{Math.min(page * limit, CallingRecods.length)}
                </span>
                {" "}
                out of {" "}
                <span className="font-semibold text-white">
                  {CallingRecods.length}
                </span>{" "}
                results
              </p>

              {/* Right side — controls */}
              <div className="flex items-center gap-4">
                {/* Rows per page */}
                <div className="flex items-center gap-2">
                  <span className="text-lg text-gray-300">Rows per page</span>
                  <select
                    value={limit}
                    onChange={(e) => {
                      setlimit(Number(e.target.value));
                      setpage(1);
                    }}
                    className="bg-darkBlack text-white text-lg rounded-md px-2 py-1 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-Blue"
                  >
                    {[10, 20, 50].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Pagination buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setpage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className={`px-2 py-1 rounded-md ${page === 1
                      ? "text-gray-500 cursor-not-allowed"
                      : "text-white hover:text-Blue"
                      }`}
                  >
                    <MdOutlineKeyboardArrowLeft className='text-[25px]' />
                  </button>

                  {Array.from({ length: totalPage }, (_, i) => i + 1)
                    .slice(
                      Math.max(0, page - 3),
                      Math.min(totalPage, page + 2)
                    )
                    .map((num) => (
                      <button
                        key={num}
                        onClick={() => setpage(num)}
                        className={`px-3 py-1 rounded-md text-sm ${num === page
                          ? "bg-Blue text-white font-semibold"
                          : " text-gray-200 hover:bg-gray-600"
                          }`}
                      >
                        {num}
                      </button>
                    ))}

                  <button
                    onClick={() => setpage((prev) => Math.min(prev + 1, totalPage))}
                    disabled={page === totalPage}
                    className={`px-2 py-1 rounded-md ${page === totalPage
                      ? "text-gray-500 cursor-not-allowed"
                      : "text-white hover:text-Blue"
                      }`}
                  >
                    <MdOutlineKeyboardArrowRight className='text-[25px]' />
                  </button>
                </div>
              </div>

            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CallingReport
