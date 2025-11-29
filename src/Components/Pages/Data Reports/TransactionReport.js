import React, { Fragment, useEffect, useRef, useState } from 'react'
import Call from "../../assets/StaffDetails/call.png";
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FaCalendarCheck, FaRupeeSign } from 'react-icons/fa';
import { FetchAllCallRecodes, FetchAllCallRecodesSummary, FetchAllTransctionReport, FetchAllTransctionReportSummary } from '../../services/dataReport';
import toast from 'react-hot-toast';
import dayjs from 'dayjs';
import { MdOutlineKeyboardArrowLeft, MdOutlineTimer } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Spinner from '../../layout/spinner';
import nodatagif from "../../assets/StaffDetails/Animation - 1703588368832.gif";
import { HiPhoneIncoming } from 'react-icons/hi';
import { TbAlarmAverage, TbCreditCardPay, TbCreditCardRefund } from 'react-icons/tb';
import { RiSecurePaymentFill } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";

const Genderoption = ["credit", "debited"];
const Payment_StatusOption = ["Pending", "Success", "Failed", "User Dropped"];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const TransactionReport = () => {
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState("");
    const [selectedPaymentStatus, setselectedPaymentStatus] = useState("");
    const [from, setfrom] = useState("");
    const [to, setto] = useState("");
    const [page, setpage] = useState(1);
    const [limit, setlimit] = useState(10);
    const [totalPage, settotalPage] = useState("");
    const [Search, setSearch] = useState("");
    const [Credits, setCredits] = useState(0);
    const [Debited, setDebited] = useState(0);
    const [totalTranction, settotalTranction] = useState(0);

    const [transctionRecods, settransctionRecods] = useState([])
    const formRef = useRef(null);
    const toRef = useRef(null);

    const handleFrom = () => {
        formRef.current.showPicker();
    };

    const handleto = () => {
        toRef.current.showPicker();
    };


    const handleFetchTransctionReport = async () => {
        try {
            setLoading(true)
            const result = await FetchAllTransctionReport(Search, selected, selectedPaymentStatus, from, to, page, limit)

            if (result?.success) {
                setLoading(false)
                settotalPage(result?.data?.totalPages)
                settransctionRecods(result?.data?.records)
            } else {
                toast.error(result?.message)
            }
        } catch (error) {
            return console.log(error.message)
        }
    }
    const HnadleFetchAllTransctionReportSummary = async () => {
        try {
            const result = await FetchAllTransctionReportSummary(Search, selected, selectedPaymentStatus, from, to)

            if (result?.success) {
                setCredits(result?.data?.totalCredit)
                setDebited(result?.data?.totalDebit)
                settotalTranction(result?.data?.totalTransaction)
            } else {
                toast.error(result?.message)
            }
        } catch (error) {
            return console.log(error.message)
        }
    }


    useEffect(() => {
        if (!Search && !selected && !from && !to) {
            handleFetchTransctionReport();
            HnadleFetchAllTransctionReportSummary()
            return;
        }

        const handler = setTimeout(() => {
            handleFetchTransctionReport();
            HnadleFetchAllTransctionReportSummary()
        }, 500);

        return () => clearTimeout(handler);
    }, [page, limit, Search, selected, from, to]);



    const clearFilter = () => {
        setSelected("")
        setfrom("")
        setto("")
        setSearch("")
        setselectedPaymentStatus("")
    }

    const statusColors = {
        PENDING: "text-yellow",
        USER_DROPPED: "text-blue-500",
        FAILED: "text-red",
        SUCCESS: "text-green",
    };


    const statuspaColors = {
        debited: "text-red",
        credit: "text-green",
    };


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
                        value={Search}
                        onChange={(e) => setSearch(e.target.value)}
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
                                            <GrTransaction className="text-[20px] text-white" />
                                        </span>
                                        <span className="block truncate text-left">
                                            {selected || "Payment Type"}
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
                <div className="w-full relative">
                    <Listbox value={selectedPaymentStatus} onChange={setselectedPaymentStatus}>
                        {({ open }) => (
                            <>
                                <div className="relative">
                                    <Listbox.Button className="relative text-white/50 bg-darkBlack w-full h-[50px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50">
                                        <span className="absolute top-1/2 -translate-y-1/2 left-6">
                                            <RiSecurePaymentFill className="text-[20px] text-white" />
                                        </span>
                                        <span className="block truncate text-left">
                                            {selectedPaymentStatus || "Payment Status"}
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
                                            {selected === 'credit' && (
                                                Payment_StatusOption.map((option) => (
                                                    <Listbox.Option
                                                        key={option}
                                                        className={({ active }) =>
                                                            `${active ? "bg-darkBlack text-white" : "text-gray-900"}
                    relative select-none text-lg font-Popins cursor-pointer py-2 pl-8 pr-4`
                                                        }
                                                        value={option}
                                                    >
                                                        {({ selectedPaymentStatus }) => (
                                                            <span
                                                                className={`block truncate ${selectedPaymentStatus ? "font-semibold text-darkBlack" : "font-normal"
                                                                    }`}
                                                            >
                                                                {option}
                                                            </span>
                                                        )}
                                                    </Listbox.Option>
                                                ))
                                            )}
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
                {(Search || selected || from || to || selectedPaymentStatus) && (
                    <button
                        onClick={clearFilter}
                        className="bg-Sky text-white font-Popins font-normal md:w-[350px] w-full h-[40px] rounded"
                    >
                        Clear
                    </button>
                )}
            </div>
            <div className='grid grid-cols-4 gap-5 py-5'>
                <div className='w-full py-6 px-6 bg-darkBlack rounded-md'>
                    <h2 className='text-white font-Popins flex items-center gap-2 text-[20px]'>
                        <FaRupeeSign className='text-[20px]' />
                        Total Earnings
                    </h2>
                    <h3 className="text-[40px] text-yellow font-semibold">
                        {parseFloat(Debited).toFixed(2)}
                        <span className="text-lg text-Gray">rs</span>
                    </h3>
                </div>
                <div className='w-full py-6 px-6 bg-darkBlack rounded-md'>
                    <h2 className='text-white font-Popins flex items-center gap-2 text-[20px]'>
                        <TbCreditCardPay className='text-[22px]' />
                        Total Credit Amount
                    </h2>
                    <h3 className="text-[40px] text-yellow font-semibold">
                        {Credits}
                        <span className="text-lg text-Gray">rs</span>
                    </h3>
                </div>
                <div className='w-full py-6 px-6 bg-darkBlack rounded-md'>
                    <h2 className='text-white font-Popins flex items-center gap-2 text-[20px]'>
                        <TbCreditCardRefund className='text-[22px]' />
                        Total Debited Amount
                    </h2>
                    <h3 className="text-[40px] text-yellow font-semibold">
                        {parseFloat(Debited).toFixed(2)}
                        <span className="text-lg text-Gray">rs</span>
                    </h3>
                </div>
                <div className='w-full py-6 px-6 bg-darkBlack rounded-md'>
                    <h2 className='text-white font-Popins flex items-center gap-2 text-[20px]'>
                        <GrTransaction className="text-[20px] text-white" />
                        Total Transactions
                    </h2>
                    <h3 className="text-[40px] text-yellow font-semibold">
                        {totalTranction}
                    </h3>
                </div>
            </div>
            <div className="w-full overflow-x-auto">
                {!loading && transctionRecods.length === 0 ? (
                    <>
                        <div className="h-[63vh] flex items-center justify-center">
                            <div className="">
                                <div className="max-w-[318px] mx-auto flex items-center justify-center">
                                    <img src={nodatagif} alt="" className="object-contain" />
                                </div>
                                <h2 className="text-white text-[32px] font-semibold mt-10 text-center font-Popins">
                                    No transctions records to show right now!
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
                                        Amount
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-left  font-semibold text-white text-lg pl-[27px]"
                                    >
                                        Payment Id
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-left  font-semibold text-white text-lg pl-[27px]"
                                    >
                                        Payment Type
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-left  font-semibold text-white text-lg pl-[27px]"
                                    >
                                        Payment Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-left  font-semibold text-white text-lg pl-[27px]"
                                    >
                                        Payment Method
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-left  font-semibold text-white text-lg pl-[27px]"
                                    >
                                        Payment Time
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-left  font-semibold text-white text-lg rounded-tr-[20px]"
                                    >
                                        Curent Bellance
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&>*:nth-child(odd)]:bg-Blue [&>*:nth-child(even)]:bg-TableCell">
                                {transctionRecods.map((item, index) => (
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
                                        <td className="text-white text-base pl-[27px]">
                                            {item?.amount}
                                        </td>
                                        <td className="text-white text-base pl-[27px]">
                                            {item?.payment_id}
                                        </td>
                                        <td className={`${statuspaColors[item?.payment_type] || ''} text-base pl-[27px]`}>
                                            {item?.payment_type}
                                        </td>
                                        <td
                                            className={`${statusColors[item?.payment_status] || ''} text-base pl-[27px]`}
                                        >
                                            {item?.payment_status || "N/A"}
                                        </td>
                                        <td className="text-white text-base pl-[27px]">
                                            {item?.payment_details?.payment_group || 'N/A'}
                                        </td>
                                        <td className="text-white text-base pl-[27px]">
                                            {dayjs(item?.payment_details?.payment_time || item?.createdAt).format('DD-MM-YYYY hh:mm:ss A')}
                                        </td>
                                        <td className="text-white text-base pl-[27px]">
                                            {parseFloat(item?.curent_bellance).toFixed(2)}
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
                                    {(page - 1) * limit + 1}-{Math.min(page * limit, transctionRecods.length)}
                                </span>
                                {" "}
                                out of {" "}
                                <span className="font-semibold text-white">
                                    {transctionRecods.length}
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

export default TransactionReport
