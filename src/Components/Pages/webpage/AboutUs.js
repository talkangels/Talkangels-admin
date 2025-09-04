import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AboutImg from "../../assets/homepage/About.png";
import Call from "../../assets/StaffDetails/call.png";
import Bio from "../../assets/StaffDetails/addBio.png";
import User from "../../assets/StaffDetails/user.png";
import Age from "../../assets/StaffDetails/age.png";

const AboutUs = () => {
  return (
    <>
      <div className=" px-3 bg-[#141425]">
        <Header />
        <div className="xl:max-w-[90%] mx-auto px-3 lg:pt-[110px] ">
          <div className="py-4 lg:flex items-start justify-between">
            <div className="max-w-[600px] mb-10 font-Popins">
              <h2 className="text-white text-3xl font-semibold capitalize font-Popins mb-11">
                Contact us
              </h2>
              <p className="text-white">
                Need to get in touch with us? Either fill out the form with your
                inquiry or find the{" "}
                <a
                  class="text-base text-[#00e5ff]"
                  href="mailto:support@talkangels.com"
                >
                  department email
                </a>{" "}
                you'd like to contact below.
              </p>
              <div className="mt-4">
                <h2 className="text-white">
                  Email:
                  <span class="text-base text-[#00e5ff] ml-4">
                    <a href="mailto:support@talkangels.com">
                      support@talkangels.com
                    </a>
                  </span>
                </h2>
                <h2 className="text-white">
                  Phone:
                  <span class="text-base text-[#00e5ff] ml-4">
                    <a href="tel:+91 99242 85524">+91 99242 85524</a>
                  </span>
                </h2>
                <h2 className="text-white">
                  <span class="mt-4 block">
                    Address: &nbsp;320, Kumkum Residency, Kamrej, Kamrej -
                    394180, Ta. - Kamrej, Dist. - Surat
                  </span>
                </h2>
              </div>
            </div>
            <div className="lg:w-[750px] grid grid-cols-2 gap-10 p-4 border-2 rounded-md">
              <div className="w-full relative lg:col-span-1 col-span-2">
                <img
                  src={User}
                  alt=""
                  className="absolute top-1/2 -translate-y-1/2 left-6"
                />
                <input
                  type="text"
                  name="name"
                  className="text-white/50 bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
                  placeholder="First Name*"
                />
              </div>
              <div className="w-full relative lg:col-span-1 col-span-2">
                <img
                  src={User}
                  alt=""
                  className="absolute top-1/2 -translate-y-1/2 left-6"
                />
                <input
                  type="text"
                  name="name"
                  className="text-white/50 bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
                  placeholder="Last Name*"
                />
              </div>
              <div className="w-full relative col-span-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fff"
                  className="absolute top-1/2 -translate-y-1/2 left-6 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
                <input
                  type="email"
                  name="email"
                  className="text-white/50 bg-darkBlack w-full h-[70px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
                  placeholder="Email*"
                />
              </div>
              <div className="w-full relative col-span-2">
                <img src={Bio} alt="" className="absolute top-[27px] left-6" />
                <textarea
                  className="text-white/50 bg-darkBlack w-full h-[125px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50 pt-[27px]"
                  placeholder="What can we help you with?"
                  name="bio"
                ></textarea>
              </div>
              <div className="w-full relative col-span-2">
                <button className="border-2 rounded-md mx-auto w-[110px] h-[45px] text-green font-semibold font-Popins  border-green">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
