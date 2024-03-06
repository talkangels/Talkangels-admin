import React, { useState } from "react";
import ForgetIllustation from "../../assets/ForgetIllustation.png";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../layout/spinner";
import { ResetadminPassword } from "../../services/auth";

const ResetPassword = () => {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleResetPassword = async () => {
    setLoading(true);
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }
    const data = {
      token: token,
      newPassword: password,
    };
    const result = await ResetadminPassword(data);
    if (result?.status === 200) {
      setLoading(false);
      toast.success(result.message);
      window.location.href = "http://www.talkangels.com/admin/login";
    } else {
      setLoading(false);
      toast.error(result.message);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="h-screen bg-Background_gradint flex items-center justify-center w-full relative overflow-hidden">
        <div className="grid w-full lg:grid-cols-2  items-center w-100 h-full">
          <div className="h-full md:flex hidden items-center justify-center">
            <img
              src={ForgetIllustation}
              alt=""
              className="md:w-1/2 object-fill"
            />
          </div>
          <div className="flex items-center justify-center bg-Background_login h-full px-4">
            <div className="flex flex-col gap-5 max-w-[500px] items-center">
              <h3 className="text-3xl text-white font-Popins font-semibold">
                Talk Angels Forgot Password
              </h3>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" w-full bg-darkBlack text-white p-2 text-lg rounded-md placeholder:text-white focus:outline-none"
                placeholder="Enter your password"
              />
              <input
                type="password"
                name="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className=" w-full bg-darkBlack text-white p-2 text-lg rounded-md placeholder:text-white focus:outline-none"
                placeholder="Enter your Confirm password"
              />
              <button
                onClick={handleResetPassword}
                className="w-full h-[50px] bg-Sky rounded-md text-white mx-auto text-xl"
              >
                Submit
              </button>
              <Link
                className="text-lg leading-[35px] text-center font-semibold text-Sky w-full block"
                to="/"
              >
                www.talkangels.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
