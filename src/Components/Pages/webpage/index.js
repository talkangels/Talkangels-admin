import React from "react";
import Logo from "../../assets/Webpagelogo.png";
import { Arrow_Right, DoorShape, Heart } from "./Shape";
import User_1 from "../../assets/homepage/Herosection.png";

const Index = () => {
  return (
    <>
      <div className="bg-Mainbackground_gradint px-7">
        <header className="h-20 w-full flex items-center justify-between py-3">
          <div className="w-[250px]">
            <img src={Logo} alt="" />
          </div>
          <div>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  href="#"
                  className="text-lg text-white font-league font-light"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-white font-league font-light"
                >
                  Listeners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-white font-league font-light"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-white font-league font-light"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-white font-league font-light"
                >
                  Intern
                </a>
              </li>
              <li>
                <button className="border rounded-full w-[100px] h-[40px] text-white">
                  Download
                </button>
              </li>
            </ul>
          </div>
        </header>
        <div className="max-w-[90%] mx-auto">
          <div className="pt-20">
            <div className="grid lg:grid-cols-2 items-center justify-between flex-wrap">
              <div>
                <h2 className="text-[52px] font-league tracking-wide text-white font-light relative w-fit">
                  The door to
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <DoorShape />
                  </span>
                </h2>
                <h2 className="text-Homegreen text-[64px] font-bold mt-5 flex items-center gap-2 flex-wrap">
                  Friendship
                  <span className="h-[69px] w-[87px] block bg-hero_pattern -mt-4"></span>
                  Forever
                </h2>
                <h2 className="text-white text-[100px] font-bold flex items-center gap-2">
                  Unlocked!
                </h2>
                <p className="text-white text-[30px] font-thin max-w-[640px]">
                  Join the exciting journey of meeting new friends within our
                  vibrant community of over one million users!
                </p>
                <div className="flex items-center gap-4 mt-[28px] flex-wrap">
                  <button className="px-[35px]  py-[15px] bg-Homegreen text-[28px] text-white rounded-full mb-16 flex items-center justify-center gap-[34px]">
                    Get Started <Arrow_Right />
                  </button>
                  <button className="px-[35px]  py-[15px] bg-red text-[28px] text-white rounded-full mb-16 flex items-center justify-center gap-[34px]">
                    Download the app <Arrow_Right />
                  </button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="">
                  <div>
                    <img src={User_1} alt="" className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[66px]">
            <h3 className="text-center text-white text-[64px]">Listeners</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
