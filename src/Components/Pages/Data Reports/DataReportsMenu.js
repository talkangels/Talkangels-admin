import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFileAlt, FaMoneyBillWave, FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Routing } from "../../../utils/routing";

const DataReportsMenu = ({ current, setSidebarOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <li>
      {/* Main Dropdown Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className={`
          ${current === "Data_Reports"
            ? "bg-Sky text-white font-semibold"
            : "text-white hover:text-white hover:bg-Sky font-normal"}
            group flex justify-between gap-x-3 rounded-md h-[82px] text-[22px]
            pl-[40px] pr-4 items-center leading-6 rounded-tr-full rounded-br-full
            max-w-[340px] font-league w-full
        `}
      >
        <div className="flex items-center gap-2">
          <FaFileAlt />
          Data Reports
        </div>
        {open ? (
          <MdKeyboardArrowUp className="text-[30px]" />
        ) : (
          <MdKeyboardArrowDown className="text-[30px]" />
        )}
      </button>

      {/* Dropdown Sublinks */}
      {open && (
        <ul className="ml-[60px] mt-2 flex flex-col gap-2">
          <li onClick={() => setSidebarOpen(false)}>
            <Link
              to={Routing.callingReport}
              className={`flex items-center gap-3  text-[18px] py-2 px-3 rounded-md text-white/90 ${current === Routing.callingReport ? 'bg-Sky' : 'hover:bg-Sky hover:text-white '}`}
            >
              <FaPhoneAlt className="text-[20px]" />
              Calling Reports
            </Link>
          </li>
          <li onClick={() => setSidebarOpen(false)}>
            <Link
              to={Routing.transctionReport}
              className={`flex items-center gap-3  text-[18px] py-2 px-3 rounded-md text-white/90 ${current === Routing.transctionReport ? 'bg-Sky' : 'hover:bg-Sky hover:text-white '}`}
            >
              <FaMoneyBillWave className="text-[20px]" />
              Transaction Reports
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default DataReportsMenu;
