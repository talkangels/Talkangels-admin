import React, { useEffect, useState } from "react";
import axios from "axios";
import { load } from "@cashfreepayments/cashfree-js";
import { useParams } from "react-router-dom";

const Index = () => {
  let cashfree;

  let insitialzeSDK = async function () {
    cashfree = await load({
      mode: "sandbox",
    });
  };
  insitialzeSDK();
  const [orderId, setOrderId] = useState("");
  const user_details = useParams()
  console.log(user_details, "==========> perms");

  const getSessionId = async () => {
    try {
      let res = await axios.get(
        `https://web.talkangels.com/api/v1/user/create-payment/${user_details.id}?phone=${user_details.phone}&name=${user_details.name}&amount=${user_details.amount}`,
        {
          headers: {
            Authorization: `Bearer ${user_details.token}`,
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
            Authorization: `Bearer ${user_details.token}`,
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
