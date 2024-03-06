import React, { useState } from "react";
import Spinner from "../../layout/spinner";
import LoginIllustation from "../../assets/Login/Login-amico.png";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    mobile_number: "",
    password: "",
  });
  const handleUserdata = (e) => {
    setLoading(true);
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
    setLoading(false);
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="h-screen bg-Background_gradint flex items-center justify-center w-full relative overflow-hidden">
        <div className="grid lg:grid-cols-2  items-center w-100 h-full">
          <div className="h-full md:flex hidden items-center justify-center">
            <img
              src={LoginIllustation}
              alt=""
              className="md:w-1/2 object-fill"
            />
          </div>
          <div className="flex items-center justify-center bg-Background_login h-full px-4">
            <div className="flex flex-col gap-3 max-w-[500px] items-center">
              <h3 className="text-3xl text-white font-Popins font-semibold">
                Welcome to TALK ANGELS Portal
              </h3>
              <h3 className="text-3xl text-white font-Popins font-semibold w-full my-3 text-left">
                Register to Portal
              </h3>

              <input
                type="text"
                name="name"
                className=" w-full bg-darkBlack text-white p-2 text-lg rounded-md placeholder:text-white focus:outline-none"
                placeholder="Enter your Name"
                onChange={handleUserdata}
              />
              <input
                type="text"
                name="email"
                className=" w-full bg-darkBlack text-white p-2 text-lg rounded-md placeholder:text-white focus:outline-none"
                placeholder="Enter your Email"
                onChange={handleUserdata}
              />
              <input
                type="number"
                name="mobile_number"
                className=" w-full bg-darkBlack text-white p-2 text-lg rounded-md placeholder:text-white focus:outline-none"
                placeholder="Enter your Mobile Number"
                onChange={handleUserdata}
              />
              <input
                type="password"
                name="password"
                onChange={handleUserdata}
                className=" w-full bg-darkBlack text-white p-2 text-lg rounded-md placeholder:text-white focus:outline-none"
                placeholder="Enter your password"
              />
              <button className="w-full h-[50px] bg-Sky rounded-md text-white mx-auto text-xl">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
