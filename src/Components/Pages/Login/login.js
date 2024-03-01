import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routing } from "../../../utils/routing";
import { userLogin } from "../../services/auth";
import Spinner from "../../layout/spinner";
import LoginIllustation from "../../assets/Login/Login-amico.png";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userdata, setUserdata] = useState({
    user_id: "",
    password: "",
  });
  const handleUserdata = (e) => {
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    setLoading(true);
    const data = {
      email: userdata.user_id,
      password: userdata.password,
    };
    const result = await userLogin(data);
    if (result?.status === 200) {
      setLoading(false);
      localStorage.setItem("userDetail", JSON.stringify(result?.user));
      localStorage.setItem("token", result?.Token);
      localStorage.setItem("charges", result?.charges);
      localStorage.setItem("is_login", true);
      navigate(Routing.Dashboard);
    } else {
      setLoading(false);
    }
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
              {/* <img src={Logo} alt="Logo" className="mb-10" /> */}
              <h3 className="text-3xl text-white font-Popins font-semibold">
                Welcome to TALK ANGELS Portal
              </h3>
              <h3 className="text-3xl text-white font-Popins font-semibold w-full my-3 text-left">
                SignIn to Portal
              </h3>

              <input
                type="text"
                name="user_id"
                className=" w-full bg-darkBlack text-white p-2 text-lg rounded-md placeholder:text-white focus:outline-none"
                placeholder="Enter your id"
                onChange={handleUserdata}
              />
              <input
                type="password"
                name="password"
                onChange={handleUserdata}
                className=" w-full bg-darkBlack text-white p-2 text-lg rounded-md placeholder:text-white focus:outline-none"
                placeholder="Enter your password"
              />
              <button
                className="w-full h-[50px] bg-Sky rounded-md text-white mx-auto text-xl"
                onClick={handleSubmit}
              >
                Login
              </button>
              <p className="flex items-center">
                <p className="text-white">You agree with our |&nbsp;</p>
                <Link className="text-Sky" to="/privacy">
                  Privacy & Policy
                </Link>
                <p className="text-white">&nbsp;|&nbsp;</p>
                <Link className="text-Sky" to="/tnc">
                  Terms & conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
