import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routing } from "../../../utils/routing";
import { ForgotPassword, userLogin } from "../../services/auth";
import Spinner from "../../layout/spinner";
import LoginIllustation from "../../assets/Login/Login-amico.png";
import { toast } from "react-toastify";
import Logo from "../../assets/logo.svg";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const loggedIn = localStorage.getItem("token");

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
      toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const handleForgotPassword = async () => {
    if (userdata.user_id) {
      setLoading(true);
      const data = {
        email: userdata.user_id,
      };
      const result = await ForgotPassword(data);
      if (result?.status === 200) {
        setLoading(false);
        toast.success(result?.message);
        setForgotPassword(false);
      } else {
        setLoading(false);
        toast.error(result?.message);
      }
    } else {
      toast.info("If you forgot your password, please add a mail address");
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate(Routing.Dashboard);
    } else {
      navigate(Routing.Login);
    }
  }, []);

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
              <img
                src={Logo}
                alt=""
                className="w-[100px] h-[100px] p-2 mx-auto"
              />
              <h3 className="text-3xl mt-3 text-white font-Popins font-semibold md:text-left text-center">
                Welcome to TALK ANGELS Portal
              </h3>
              <h3 className="text-3xl text-white font-Popins font-semibold w-full my-3 text-center">
                {!forgotPassword ? "SignIn to Portal" : "Forgot Password"}
              </h3>
              <input
                type="text"
                name="user_id"
                className=" w-full bg-darkBlack text-white p-2 text-lg rounded-md placeholder:text-white focus:outline-none"
                placeholder="Enter your email id"
                onChange={handleUserdata}
              />
              {forgotPassword && (
                <div className="flex gap-[50px] my-5 w-full">
                  <button
                    className="w-full h-[50px] bg-red rounded-md text-white mx-auto text-xl"
                    onClick={() => setForgotPassword(false)}
                  >
                    Cancle
                  </button>
                  <button
                    className="w-full h-[50px] bg-Sky rounded-md text-white mx-auto text-xl"
                    onClick={handleForgotPassword}
                  >
                    Forgot password
                  </button>
                </div>
              )}
              {!forgotPassword && (
                <>
                  <div className="relative w-full">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleUserdata}
                      className=" w-full bg-darkBlack text-white p-2 text-lg rounded-md placeholder:text-white focus:outline-none"
                      placeholder="Enter your password"
                    ></input>
                    <div className="absolute top-1/2 -translate-y-1/2 right-2">
                      {!showPassword ? (
                        <svg
                          onClick={() => setShowPassword(!showPassword)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#fff"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      ) : (
                        <svg
                          onClick={() => setShowPassword(!showPassword)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#fff"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <p
                    className="text-Sky w-full text-end cursor-pointer"
                    onClick={() => setForgotPassword(true)}
                  >
                    forgot password
                  </p>
                  <button
                    className="w-full h-[50px] bg-Sky rounded-md text-white mx-auto text-xl"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </>
              )}
              <p className="flex items-center mt-3 flex-wrap">
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
