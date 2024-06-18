import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nodatagif from "../../assets/StaffDetails/Animation - 1703588368832.gif";
import { GetAllStaffList, UpdateStaffStatus } from "../../services/staff";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../../layout/spinner";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ListofStaff = () => {
  const navigate = useNavigate();

  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getStaff = async () => {
    setLoading(true);
    const body = {
      page_no: "",
      items_per_page: "",
      search_text: "",
    };
    const result = await GetAllStaffList(body);
    if (result?.status === 200) {
      setLoading(false);
      setStaffList(result?.data);
    } else {
      setStaffList([]);
      setLoading(false);
    }
  };

  const handleSwitchChange = async (index) => {
    if (index) {
      const body = {
        id: index._id,
        data: { status: index?.status === 1 ? 0 : 1 },
      };
      const result = await UpdateStaffStatus(body);
      if (result?.status === 200) {
        getStaff();
        toast.success("Status Updates successfully");
      } else {
        toast.error(result?.message);
      }
    }
  };

  useEffect(() => {
    getStaff();
  }, []);

  const Staffpersonal = (id) => {
    navigate(`/admin/staffdetail/${id}`);
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="mt-16 w-full overflow-x-auto">
        {!loading && staffList.length === 0 ? (
          <>
            <div className="h-[63vh] flex items-center justify-center">
              <div className="">
                <div className="max-w-[318px] mx-auto flex items-center justify-center">
                  <img src={nodatagif} alt="" className="object-contain" />
                </div>
                <h2 className="text-white text-[32px] font-semibold mt-10 text-center font-Popins">
                  No Staffs to show right now!
                </h2>
                <p className="text-Gray max-w-[539px] mx-auto text-center text-lg font-Popins">
                  We don’t have any staff’s info to show here. please add staff
                  info first and then check their details here.
                </p>
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
                    Image
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
                    Username
                  </th>

                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg pl-[27px]"
                  >
                    Mobile No.
                  </th>
                  <th
                    scope="col"
                    className="text-left  font-semibold text-white text-lg "
                  >
                    Status
                  </th>
                  <th scope="col" className="relative rounded-tr-[20px]">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="[&>*:nth-child(odd)]:bg-Blue [&>*:nth-child(even)]:bg-TableCell">
                {staffList.map((user, i) => (
                  <tr className="h-[50px]" key={i}>
                    <>
                      <td className="text-white text-base pl-[27px]">
                        {i + 1}
                      </td>
                      <td className="text-white text-base pl-[27px] py-3">
                        <img
                          src={user.image}
                          alt={user.id}
                          className="w-[50px] h-[50px] rounded-full overflow-hidden object-cover"
                        />
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {user.name}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {user.user_name}
                      </td>
                      <td className="text-white text-base pl-[27px]">
                        {user.mobile_number}
                      </td>
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
                      <td className="text-red text-base">
                        <p
                          className="cursor-pointer"
                          onClick={() => Staffpersonal(user._id)}
                        >
                          More
                        </p>
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

export default ListofStaff;
