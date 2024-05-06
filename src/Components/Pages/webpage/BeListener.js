import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import AddListenerReq from "./addListenerReq";
import Spinner from "../../layout/spinner";

const BeListener = () => {
  const [status1, setStatus1] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading && <Spinner />}
      <div className="min-h-screen py-10 px-3 bg-Background_gradint flex items-center justify-center">
        {!status1 ? (
          <div>
            <img
              src={Logo}
              alt=""
              className="w-[200px] h-[200px] border border-white rounded-2xl p-2 mx-auto"
            />
            <h1 className="text-white mt-12 mb-5 text-3xl text-center">
              Become a Listener
            </h1>
            <h2 className="text-white mt-4 text-2xl text-center">
              Get the opportunity to positively influence someone's life!
            </h2>
            <h2 className="text-white mt-7 flex-wrap justify-center text-base text-center flex items-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#e91111"
                  className="min-w-9 h-9 mr-1 -mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                Talkangel App Only accepting applications from candidates who
                are{" "}
              </div>
              <b className="text-center">&nbsp;21 years old or above</b>
            </h2>
            <div className="flex items-center justify-center flex-col">
              <button
                onClick={() => setStatus1(true)}
                className="border-2 rounded-md mt-7 mx-auto w-[110px] h-[45px] text-green font-semibold font-Popins  border-green"
              >
                Yes
              </button>
              <Link
                to={"/"}
                className="border-2 text-center rounded-md mt-2 mx-auto w-[90px] h-[30px] text-white/25 font-semibold font-Popins  border-white/25"
              >
                No
              </Link>
            </div>
          </div>
        ) : (
          <AddListenerReq setLoading={setLoading} setStatus1={setStatus1} />
        )}
      </div>
    </>
  );
};

export default BeListener;
