import React from "react";
import {
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { Menu } from "@headlessui/react";
import { HaderName } from "../../utils/helper";

const Header = ({ setSidebarOpen }) => {
  const location = window.location.pathname.replace(/^\/+/g, "");

  return (
    <>
      <div className="sticky top-0 z-40 flex h-[89px] shrink-0 items-center gap-x-4 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
        </button>
        <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />
        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-between items-center">
          <h2 className="text-white uppercase sm:text-[30px] text-xl">
            {HaderName(location)}
          </h2>
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <div
              className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
              aria-hidden="true"
            />
            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="-m-1.5 flex items-center p-1.5 cursor-default">
                <span className="sr-only">Open user menu</span>
                <div className="h-12 w-12 rounded-full bg-gray-50 overflow-hidden">
                </div>
                <span className="hidden lg:flex lg:items-center">
                  <span
                    className="ml-4 text-lg font-semibold leading-6 text-white"
                    aria-hidden="true"
                  >
                    {
                      JSON.parse(window.localStorage.getItem("userDetail"))
                        ?.name
                    }
                    <span className="block text-left text-Gray text-[13px]">
                      Admin
                    </span>
                  </span>
                </span>
              </Menu.Button>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
