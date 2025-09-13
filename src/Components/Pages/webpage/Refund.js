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
            <p className="mt-4 pl-9 text-lg  leading-[35px]">
              If user has made the payment and money has been deducted from
              their bank account but they didn't received the benefits of it due
              to bank server down, in this kind of cases money will be refunded
              to the users account in next 3-4 working days. Payments are
              non-refundable and there are no refunds or credits for partially
              used periods/credits, except that we may approve a refund in the
              form of a credit on request if exceptional circumstances exist. If
              you believe exceptional circumstances exist, please contact us and
              explain the circumstances that you believe merits a refund. We are
              not making any promise that we will give you a refund. If we give
              you a refund, we will issue the refund in the form of free
              services or a credit to the payment method you used for your
              purchase; we will not make refunds in the form of cash or check.
              The provision of a refund in one instance does not entitle you to
              a refund in the future for similar instances; nor does it obligate
              us to provide refunds in the future, under any circumstance.
              Refunds are not available to users who are banned by talkangels or
              its community.
            </p>
          </div>
          <div className=" py-5 w-full">
            <p className="mt-10 text-lg capitalize leading-[35px] text-center font-semibold text-white">
              Refund & Cancellation Policy Updated on 11th September 2025
            </p>
            <Link
              className="text-lg leading-[35px] text-center font-semibold text-Sky w-full block"
              to="mailto:support@talkangels.com"
            >
              support@talkangels.com
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refund;
