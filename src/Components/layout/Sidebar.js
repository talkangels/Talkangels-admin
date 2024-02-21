import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import Logo from "../assets/Group 1.png";
import Dashboard from "../assets/dashboard/dashboard.png";
import StaffDetails from "../assets/dashboard/staffDetails.png";
import FeedbackList from "../assets/dashboard/feedbackList.png";
import UserDetails from "../assets/dashboard/userDetails.png";
import Settings from "../assets/dashboard/settings.png";
import Wallet from "../assets/dashboard/wallet.png";
import Logout from "../assets/dashboard/logOut.png";
import TransactionHistorys from "../assets/dashboard/Vector.png";
import { Link, useNavigate } from "react-router-dom";
import { Routing } from "../../utils/routing";
const navigation = [
  {
    name: "Dashboard",
    href: Routing.Dashboard,
    icon: Dashboard,
  },
  {
    name: "Staff Details",
    href: Routing.StaffDetails,
    icon: StaffDetails,
  },
  {
    name: "Feedback List",
    href: Routing.FeedbackList,
    icon: FeedbackList,
  },
  {
    name: "User Details",
    href: Routing.UserDetails,
    icon: UserDetails,
  },
  {
    name: "Recharges",
    href: Routing.Recharge,
    icon: Wallet,
  },
  {
    name: "Report a Problem",
    href: Routing.ReportAndProblem,
    icon: FeedbackList,
  },
  {
    name: "WithdrawRequest",
    href: Routing.TransactionHistory,
    icon: TransactionHistorys,
  },
  { name: "Settings", href: Routing.Settings, icon: Settings },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ setSidebarOpen, sidebarOpen }) => {
  const current = window.location.pathname;

  const navigate = useNavigate();

  const heandleLogOut = () => {
    localStorage.clear();
    navigate(Routing.Login);
  };

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-sidbar_gradint pb-4">
                  <div className="flex grow flex-col overflow-y-auto  pb-4">
                    <div
                      className="flex shrink-0 items-center pl-8 pt-8 pb-14 cursor-pointer"
                      onClick={() => navigate(Routing.Dashboard)}
                    >
                      <img
                        className="h-[61px] w-auto"
                        src={Logo}
                        alt="Your Company"
                      />
                      <h2 className="text-2xl font-Allerta text-white ml-4">
                        Talk AngELS
                      </h2>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul className="flex flex-1 flex-col gap-y-7 justify-between">
                        <li className="overflow-hidden">
                          <ul className="space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  className={classNames(
                                    item.href === current
                                      ? "bg-Sky text-white font-semibold"
                                      : "text-white hover:text-white hover:bg-Sky font-normal",
                                    "group flex gap-x-3 rounded-md h-[82px] text-[22px] pl-[40px] items-center leading-6  rounded-tr-full rounded-br-full max-w-[340px] font-league"
                                  )}
                                >
                                  <img src={item.icon} alt="" />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <Link
                            onClick={heandleLogOut}
                            className={
                              "group flex gap-x-3 rounded-md h-[82px] text-[22px] pl-[40px] items-center leading-6 font-normal rounded-tr-full rounded-br-full max-w-[340px] font-league text-white hover:text-white hover:bg-Sky"
                            }
                          >
                            <img src={Logout} alt="" />
                            Log Out
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[393px] lg:flex-col">
        <div className="flex grow flex-col overflow-y-auto bg-sidbar_gradint pb-4">
          <div
            className="flex shrink-0 items-center pl-8 pt-8 pb-14 cursor-pointer"
            onClick={() => navigate(Routing.Dashboard)}
          >
            <img className="h-[61px] w-auto" src={Logo} alt="Your Company" />
            <h2 className="text-2xl font-Allerta text-white ml-4">
              Talk AngELS
            </h2>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7 justify-between">
              <li className="overflow-hidden">
                <ul className="space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={classNames(
                          item.href === current
                            ? "bg-Sky text-white font-semibold"
                            : "text-white hover:text-white hover:bg-Sky font-normal",
                          "group flex gap-x-3 rounded-md h-[82px] text-[22px] pl-[40px] items-center leading-6  rounded-tr-full rounded-br-full max-w-[340px] font-league"
                        )}
                      >
                        <img src={item.icon} alt="" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link
                  onClick={heandleLogOut}
                  className={
                    "group flex gap-x-3 rounded-md h-[82px] text-[22px] pl-[40px] items-center leading-6 font-normal rounded-tr-full rounded-br-full max-w-[340px] font-league text-white hover:text-white hover:bg-Sky"
                  }
                >
                  <img src={Logout} alt="" />
                  Log Out
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
