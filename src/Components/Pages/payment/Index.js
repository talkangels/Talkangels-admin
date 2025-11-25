import React, { useEffect } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import { AddBallenceAPI, GetSessionIdAPI } from "../../services/Payment";
import { Routing } from "../../../utils/routing";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  let cashfree;

  let insitialzeSDK = async function () {
    cashfree = await load({
      mode: "sandbox",
    });
  };
  insitialzeSDK();
  const user_details = useParams();

  const getSessionId = async () => {
    try {
      const result = await GetSessionIdAPI(user_details);
      if (result.status === 200) {
        return result.data;
      }
    } catch (error) {
      toast.error("Payment failed, please try again");
      window.location = '/open';
    }
  };

  const handleClick = async () => {
    try {
      let sessionId = await getSessionId();
      console.log("🚀 ~ handleClick ~ sessio̥nId:", sessionId)
      let checkoutOptions = {
        paymentSessionId: sessionId.payment_session_id,
        redirectTarget: "_modal",
      };

      cashfree.checkout(checkoutOptions).then((res) => {
        window.location = '/open';
      });
    } catch (error) {
      toast.error("Payment failed, please try again");
      window.location = '/open';
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      <div className="card"></div>
    </>
  );
};

export default Index;
