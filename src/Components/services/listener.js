import axios from "axios";
import { baseURL } from "./URL";

export const SentListenerReq = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}listener/add-listener-requst`,
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const GetCharges = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}listener/get-charges`,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const GetAllListenerRequst = async (body) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}admin/listener/all-listeners-requst?status=${body.status}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const UpdateListenerRequstStatus = async (body) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}admin/listener/update-listener-requst/${body.id}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      data: body.data,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const DeleteListener = async (id) => {
  try {
    let response = await axios({
      method: "DELETE",
      url: `${baseURL}admin/listener/delete-listener-requst/${id}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
