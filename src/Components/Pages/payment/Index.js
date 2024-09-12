import React, { useEffect, useState } from "react";
import axios from "axios";
import { load } from "@cashfreepayments/cashfree-js";

const Index = () => {
  let cashfree;

  let insitialzeSDK = async function () {
    cashfree = await load({
      mode: "sandbox",
    });
  };
  insitialzeSDK();
  const [orderId, setOrderId] = useState("");

  const queryParams = new URLSearchParams(window.location.search);
  const userId = queryParams.get("userid");
  const phone = queryParams.get("phone");
  const name = queryParams.get("name");
  const amount = queryParams.get("amount");
  const token = queryParams.get("token");
  const getSessionId = async () => {
    try {
      let res = await axios.get(
        `https://web.talkangels.com/api/v1/user/create-payment/${userId}?phone=${phone}&name=${name}&amount=${amount}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data) {
        return res.data.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyPayment = async (orderId) => {
    try {
      let res = await axios.get(
        `https://web.talkangels.com/api/v1/user/verify-payment/${orderId}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );
      if (res && res.data) {
        alert("payment verified");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async () => {
    try {
      let sessionId = await getSessionId();
      setOrderId(sessionId.order_id);
      let checkoutOptions = {
        paymentSessionId: sessionId.payment_session_id,
        redirectTarget: "_modal",
      };

      cashfree.checkout(checkoutOptions).then((res) => {
        verifyPayment(sessionId.order_id);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      <h1>Cashfree payment getway</h1>
      <div className="card">
        <button onClick={handleClick}>Pay now</button>
      </div>
    </>
  );
};

export default Index;
