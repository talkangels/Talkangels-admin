import axios from "axios";
import { baseURL } from "./URL";

export const VerifyPaymentAPI = async (body) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}user/verify-payment/${body.orderId}`,
      headers: {
        Authorization: `Bearer ${body.token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const GetSessionIdAPI = async (user_details) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}user/create-payment/${user_details.id}?phone=${user_details.phone}&name=${user_details.name}&amount=${user_details.amount}`,
      headers: {
        Authorization: `Bearer ${user_details.token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const AddBallenceAPI = async (body, token) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}user/add-ballence`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
