import axios from "axios";
import { baseURL } from "./URL";

export const ChangeCharges = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}admin/update-charges`,
       headers: {
        Authorization:`Bearer ${localStorage.getItem("token")}` ,
      },
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const GetMostRatedList = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}admin/most-rated`,
       headers: {
        Authorization:`Bearer ${localStorage.getItem("token")}` ,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const GetTotalHoursWorked = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/total-hr`,
       headers: {
        Authorization:`Bearer ${localStorage.getItem("token")}` ,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const UpdateWithdrawRequestStatus = async (body) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}admin/update-withdraw-request`,
       headers: {
        Authorization:`Bearer ${localStorage.getItem("token")}` ,
      },
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const allWithdrawRequest = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}admin/all-withdraw-request`,
       headers: {
        Authorization:`Bearer ${localStorage.getItem("token")}` ,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const SendNotificationUser = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}admin/send-notification/user`,
       headers: {
        Authorization:`Bearer ${localStorage.getItem("token")}` ,
      },
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};