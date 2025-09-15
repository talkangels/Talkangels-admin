import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import nodatagif from "../../assets/StaffDetails/Animation - 1703588368832.gif";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../../layout/spinner";
import { GetAllSupportRequest, MarkSupportSolve } from "../../services/Support";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const Support = () => {
  const [supportList, setsupportList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSupportRequest = async () => {
    setLoading(true);
    const result = await GetAllSupportRequest();
    if (result?.status === 200) {
      setsupportList(result?.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSupportRequest();
  }, []);

  const handleSwitchChange = async (index) => {
    if (index) {
      setLoading(true);
      const body = {
        supportId: index._id,
        status: index?.status === true ? false : true,
      };
      const result = await MarkSupportSolve(body);
      if (result?.status === 200) {
        setLoading(false);
        getSupportRequest();
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
        {!loading && supportList.length === 0 ? (
          <>
            <div className="h-[63vh] flex items-center justify-center">
              <div className="">
                <div className="max-w-[318px] mx-auto flex items-center justify-center">
                  <img src={nodatagif} alt="" className="object-contain" />
                </div>
                <h2 className="text-white text-[32px] font-semibold mt-10 text-center font-Popins">
                  No Support to show right now!
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
                    First Name
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-left w-[700px] font-semibold text-white text-lg pl-[27px]"
                  >
                    message
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg "
                  >
                    Completed
                  </th>
                  <th scope="col" className="relative rounded-tr-[20px]">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="[&>*:nth-child(odd)]:bg-Blue [&>*:nth-child(even)]:bg-TableCell">
                {supportList.map((item, i) => (
                  <tr className="h-[50px]" key={i}>
                    <>
                      <td className="text-white text-base pl-[27px]">
                        {i + 1}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {item?.first_name || "Anonymous user"}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {item?.last_name || "Anonymous user"}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {item?.email || "Anonymous user"}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {item?.message}
                      </td>
                      <td className="text-white text-base">
                        <Switch
                          checked={item?.status}
                          onChange={() => handleSwitchChange(item)}
                          className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:border-none focus-visible:outline-none focus:ring-0"
                        >
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute h-full w-full rounded-md"
                          />
                          <span
                            aria-hidden="true"
                            className={classNames(
                              item?.status
                                ? "bg-lightgreen"
                                : "bg-[#36394E]",
                              "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"
                            )}
                          />
                          <span
                            aria-hidden="true"
                            className={classNames(
                              item?.status
                                ? "translate-x-5 bg-green"
                                : "translate-x-0 bg-[#798593]",
                              "pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full shadow ring-0 transition-transform duration-200 ease-in-out"
                            )}
                          />
                        </Switch>
                      </td>
                    </>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  )
}

export default Support
