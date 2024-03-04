import React, { useEffect, useState } from "react";
import nodatagif from "../../assets/StaffDetails/Animation - 1703588368832.gif";
import Rating from "./rating";
import Spinner from "../../layout/spinner";
import { GetRatingList } from "../../services/rating";

const FeedbackList = () => {
  const [ratingList, setRatingList] = useState([]);
  const [loading, setLoading] = useState(false);
  const getStaff = async () => {
    setLoading(true);
    const result = await GetRatingList();
    if (result?.status === 200) {
      setLoading(false);
      setRatingList(result?.data);
    } else {
      setRatingList([]);
      setLoading(false);
    }
  };
  useEffect(() => {
    getStaff();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <div className="mt-16 w-full overflow-x-auto">
        {!loading && ratingList.length === 0 ? (
          <div className="h-[63vh] flex items-center justify-center">
            <div className="">
              <div className="max-w-[318px] mx-auto">
                <img src={nodatagif} alt="" className="w-full" />
              </div>
              <h2 className="text-white text-[32px] font-semibold mt-14 text-center font-Popins">
                No FeedBack to show right now!
              </h2>
            </div>
          </div>
        ) : (
          <table className="min-w-[1000px] w-full">
            <thead className="bg-darkBlue">
              <tr className="h-[60px]">
                <th className="text-left  font-semibold text-white text-lg rounded-tl-[20px] pl-[23px]">
                  No.
                </th>
                <th className="text-left  font-semibold text-white text-lg pl-[27px]">
                  Name
                </th>
                <th className="text-left  font-semibold text-white text-lg pl-[27px]">
                  Username
                </th>
                <th className="text-left  font-semibold text-white text-lg pl-[27px]">
                  Mobile Number
                </th>
                <th className="text-left  font-semibold text-white text-lg pl-[27px]">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody className="[&>*:nth-child(odd)]:bg-Blue [&>*:nth-child(even)]:bg-TableCell">
              {ratingList.map((user, i) => (
                <tr className="h-[50px]" key={i}>
                  <>
                    <td className="text-white text-base pl-[27px]">{i + 1}</td>
                    <td className="text-white text-base pl-[27px]">
                      {user.staff_name}
                    </td>
                    <td className="text-white text-base pl-[27px]">
                      {user.username}
                    </td>
                    <td className="text-white text-base pl-[27px]">
                      {user.mobile_number}
                    </td>
                    <td className="text-white text-base pl-[27px] flex items-center">
                      <Rating totalStars={5} Rating={user.rating} />
                      <p className="mt-2 ml-3">{Math.round(user.rating)}</p>
                    </td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default FeedbackList;
