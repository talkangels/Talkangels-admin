import React from "react";
import { Disclosure } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../assets/Webpagelogo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Routing } from "../../../utils/routing";
import Apk from "../../assets/apk/Talkangels.apk";

const Header = () => {
  const navigate = useNavigate();
  const Router = [
    {
      Name: "Home",
      link: Routing.Initial,
    },
    {
      Name: "Listeners",
      link: Routing.Listeners,
    },
    {
      Name: "Blog",
      link: Routing.Blog,
    },
    {
      Name: "FAQs",
      link: Routing.Faq,
    },
  ];
  return (
    <div>
      <Disclosure as="nav" className="bg-transparent">
        {({ open }) => (
          <>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-24 items-center justify-between">
                <div className="flex items-center justify-between w-full">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-auto"
                      src={Logo}
                      alt="Logo"
                      onClick={() => navigate("/")}
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 items-center">
                      {Router.map((routing, i) => (
                        <>
                          <Link
                            key={i}
                            to={routing.link}
                            className="text-lg text-white font-league font-light"
                          >
                            {routing.Name}
                          </Link>
                        </>
                      ))}
                      <a
                        href={Apk}
                        className="border rounded-full w-[100px] h-[40px] text-white flex items-center justify-center"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pb-3 pt-2">
                {Router.map((routing, i) => (
                  <>
                    <Disclosure.Button
                      as="a"
                      href={routing.link}
                      className="block text-lg text-white font-league font-light mt-3"
                    >
                      {routing.Name}
                    </Disclosure.Button>
                  </>
                ))}
                <Link
                  to="https://drive.google.com/drive/folders/1qNcOt1_XvBbBvmOSH1eTr0DZxljcGm4S"
                  target="_blank"
                  className="border rounded-lg w-full h-[40px] text-white flex items-center justify-center"
                >
                  Download
                </Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Header;
