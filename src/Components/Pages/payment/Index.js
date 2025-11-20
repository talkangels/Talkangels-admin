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
      // navigate(Routing.Initial);
      navigate('/', { replace: true });
    }
  };

  const verifyPayment = async (orderId) => {
    try {
      const body = {
        user_id: user_details.id,
        payment_id: orderId,
      };
      const result = await AddBallenceAPI(body, user_details?.token);
      if (result.status === 200) {
        toast.success(result?.message);

        window.location = 'intent://open#Intent;scheme=https;package=com.talkangels.pro;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.talkangels.pro;end'
      }
    } catch (error) {
      window.location = 'intent://open#Intent;scheme=https;package=com.talkangels.pro;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.talkangels.pro;end'
      toast.error("Payment failed, please try again");
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
        verifyPayment(sessionId.order_id);
      });
    } catch (error) {
      toast.error("Payment failed, please try again");
      // navigate(Routing.Initial);
      navigate('/', { replace: true });
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
