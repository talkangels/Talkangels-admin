import React, { useState } from "react";
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
  
  const getSessionId = async () => {
    try {
      let res = await axios.get(
        `https://web.talkangels.com/api/v1/user/create-payment/66e17c81a494e2bcfa0c1884?phone=7046292419&name=Mona&amount=20`,
        {
          headers: {
            Authorization: 
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiXy5fR2FqZXJhXy5fIiwibW9iaWxlX251bWJlciI6NzQ5MDA5MzAzNCwicm9sZSI6InVzZXIiLCJzdGF0dXMiOjEsImlhdCI6MTcyNjExNjAyNCwiZXhwIjoxNzI2OTgwMDI0fQ.1L8HVJdbKSJvgPCSQRDZGiRhCEk5XZMeKXx7REFZe4Q",
          },
        }
      );
      if (res.data) {
        setOrderId(res.data.data.order_id);
        return res.data.data.payment_session_id;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyPayment = async (orderId) => {
    console.log(orderId,"==========verify");
    try {
      let res = await axios.get(`https://web.talkangels.com/api/v1/user/verify-payment/${orderId}`, {
        headers: {
          Authorization: 
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiXy5fR2FqZXJhXy5fIiwibW9iaWxlX251bWJlciI6NzQ5MDA5MzAzNCwicm9sZSI6InVzZXIiLCJzdGF0dXMiOjEsImlhdCI6MTcyNjExNjAyNCwiZXhwIjoxNzI2OTgwMDI0fQ.1L8HVJdbKSJvgPCSQRDZGiRhCEk5XZMeKXx7REFZe4Q",
        },
      });
      if (res && res.data) {
        console.log(res.data);
        document.write("hayyyy payment done")
        alert("payment verified");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let sessionId = await getSessionId();
      let checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_modal",
      };

      cashfree.checkout(checkoutOptions).then((res) => {
        console.log("payment initialized");
        console.log(orderId,"============>click");
        verifyPayment(orderId);
      });
    } catch (error) {
      console.log(error);
    }
  };
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
