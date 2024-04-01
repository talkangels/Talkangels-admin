import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import nodatagif from "../../assets/StaffDetails/Animation - 1703588368832.gif";
import { GetAllUser, UpdateUserStatus } from "../../services/user";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../../layout/spinner";
import { GetAllListenerRequst, UpdateListenerRequstStatus } from "../../services/listener";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../utils/routing";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Listeners = () => {
  const navigate = useNavigate()
  const [listenerList, setListenerList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getListeners = async () => {
    setLoading(true);
    const body = {
      status: "",
    };
    const result = await GetAllListenerRequst(body);
    if (result?.status === 200) {
      setListenerList(result?.data);
      setLoading(false);
    } else {
      setListenerList([]);
      setLoading(false);
    }
  };
  useEffect(() => {
    getListeners();
  }, []);

  const handleSwitchChange = async (index) => {
    if (index) {
      setLoading(true);
      const body = {
        id: index._id,
        data: { status: index?.status === 1 ? 0 : 1 },
      };
      const result = await UpdateListenerRequstStatus(body);
      if (result?.status === 200) {
        setLoading(false);
        getListeners();
        toast.success(result?.message);
      } else {
        setLoading(false);
        toast.error(result?.message);
      }
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="mt-16 w-full overflow-x-auto">
        {!loading && listenerList.length === 0 ? (
          <>
            <div className="h-[63vh] flex items-center justify-center">
              <div className="">
                <div className="max-w-[318px] mx-auto flex items-center justify-center">
                  <img src={nodatagif} alt="" className="object-contain" />
                </div>
                <h2 className="text-white text-[32px] font-semibold mt-10 text-center font-Popins">
                  No Listener to show right now!
                </h2>
              </div>
            </div>
          </>
        ) : (
          <>
            <table className="min-w-[1000px] w-full ">
              <thead className="bg-darkBlue sticky top-0 z-10 ">
                <tr className="h-[60px]">
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg rounded-tl-[20px] pl-[23px]"
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Mobile No.
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Language
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Gender
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Age
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg "
                  >

                  </th>
                </tr>
              </thead>
              <tbody className="[&>*:nth-child(odd)]:bg-Blue [&>*:nth-child(even)]:bg-TableCell">
                {listenerList.map((user, i) => (
                  <tr className="h-[50px]" key={i}>
                    <>
                      <td className="text-white text-base pl-[27px]">
                        {i + 1}.
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {user.name}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {user?.country_code + " " + user?.mobile_number}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {user.email}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {user.language}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {user.gender}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {user.age}
                      </td>
                      {
                        user?.status === 0 &&
                        <td className="text-white text-base">
                          <Switch
                            checked={user?.status === 1}
                            onChange={() => handleSwitchChange(user)}
                            className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:border-none focus-visible:outline-none focus:ring-0"
                          >
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute h-full w-full rounded-md"
                            />
                            <span
                              aria-hidden="true"
                              className={classNames(
                                user?.status === 1
                                  ? "bg-lightgreen"
                                  : "bg-[#36394E]",
                                "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"
                              )}
                            />
                            <span
                              aria-hidden="true"
                              className={classNames(
                                user?.status === 1
                                  ? "translate-x-5 bg-green"
                                  : "translate-x-0 bg-[#798593]",
                                "pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full shadow ring-0 transition-transform duration-200 ease-in-out"
                              )}
                            />
                          </Switch>
                        </td>
                      }
                      {
                        user?.status === 1 &&
                        <td className="text-red text-base">
                          <p onClick={() => navigate(Routing.StaffDetails, {
                            state: {
                              data: user
                            }
                          })} className="cursor-pointer">Add</p>
                        </td>
                      }
                    </>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};

export default Listeners;
