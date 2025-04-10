import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import nodatagif from "../../assets/StaffDetails/Animation - 1703588368832.gif";
import { GetReportList, UpdateReportStatus } from "../../services/report";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../../layout/spinner";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ReportAndProblem = () => {
  const [reportList, setReportList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getReports = async () => {
    setLoading(true);
    const body = {
      page_no: "",
      items_per_page: "",
      search_text: "",
    };
    const result = await GetReportList(body);
    if (result?.status === 200) {
      setReportList(result?.data);
      setLoading(false);
    } else {
      setReportList([]);
      setLoading(false);
    }
  };
  useEffect(() => {
    getReports();
  }, []);

  const handleSwitchChange = async (index) => {
    if (index) {
      setLoading(true);
      const body = {
        id: index._id,
        data: { newStatus: index?.status === 1 ? 0 : 1 },
      };
      const result = await UpdateReportStatus(body);
      if (result?.status === 200) {
        setLoading(false);
        getReports();
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
        {!loading && reportList.length === 0 ? (
          <>
            <div className="h-[63vh] flex items-center justify-center">
              <div className="">
                <div className="max-w-[318px] mx-auto flex items-center justify-center">
                  <img src={nodatagif} alt="" className="object-contain" />
                </div>
                <h2 className="text-white text-[32px] font-semibold mt-10 text-center font-Popins">
                  No Report to show right now!
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
                    className="text-left w-[700px] font-semibold text-white text-lg pl-[27px]"
                  >
                    Report
                  </th>
                  {/* <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Role
                  </th> */}
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
                {reportList.map((item, i) => (
                  <tr className="h-[50px]" key={i}>
                    <>
                      <td className="text-white text-base pl-[27px]">
                        {i + 1}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {item?.user?.name || "Anonymous user"}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {item?.comment}
                      </td>
                      {/* <td className="text-white text-base pl-[27px]">
                        {item?.user?.role}
                      </td> */}
                      <td className="text-white text-base">
                        <Switch
                          checked={item?.status === 1}
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
                              item?.status === 1
                                ? "bg-lightgreen"
                                : "bg-[#36394E]",
                              "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"
                            )}
                          />
                          <span
                            aria-hidden="true"
                            className={classNames(
                              item?.status === 1
                                ? "translate-x-5 bg-green"
                                : "translate-x-0 bg-[#798593]",
                              "pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full shadow ring-0 transition-transform duration-200 ease-in-out"
                            )}
                          />
                        </Switch>
                      </td>
                      <td className="text-red text-base">
                        <p className="cursor-pointer">Delete</p>
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
  );
};

export default ReportAndProblem;
