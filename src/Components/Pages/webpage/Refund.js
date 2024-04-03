import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Refund = () => {
  return (
    <>
      <div className="bg-Mainbackground_gradint">
        <Header />
        <div className=" py-7 text-white sticky top-0 left-0 min-h-[90vh]">
          <h1 className="text-center font-semibold text-5xl">
            Refund & Cancellation
          </h1>
          <div className="flex flex-col gap-6 max-w-7xl mx-auto mt-10 px-4 text-white">
            <h1 className="font-semibold text-5xl">Refund</h1>
            <p className="mt-4 pl-9 text-lg capitalize leading-[35px]">
              Payments Are Non-Refundable And There Are No Refunds Or Credits
              For Partially Used Periods/Credits, Except That We May Approve A
              Refund In The Form Of A Credit On Request If Exceptional
              Circumstances Exist. If You Believe Exceptional Circumstances
              Exist, Please Contact Us And Explain The Circumstances That You
              Believe Merits A Refund. We Are Not Making Any Promise That We
              Will Give You A Refund. If We Give You A Refund, We Will Issue The
              Refund In The Form Of Free Services Or A Credit To The Payment
              Method You Used For Your Purchase; We Will Not Make Refunds In The
              Form Of Cash Or Check. The Provision Of A Refund In One Instance
              Does Not Entitle You To A Refund In The Future For Similar
              Instances; Nor Does It Obligate Us To Provide Refunds In The
              Future, Under Any Circumstance. Refunds Are Not Available To Users
              Who Are Banned By TalkAngels Or Its Community.
            </p>
          </div>
          <div className=" py-5 absolute bottom-0 left-0 w-full">
            <p className="mt-10 text-lg capitalize leading-[35px] text-center font-semibold text-white">
              This privacy policy updated on 03th APR 2024
            </p>
            <Link
              className="text-lg leading-[35px] text-center font-semibold text-Sky w-full block"
              to="/"
            >
              www.talkangels.com
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refund;
