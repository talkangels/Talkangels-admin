import axios from "axios";
import { baseURL } from "./URL";

export const userLogin = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}auth/admin/login`,
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const userRegister = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}auth/admin/register`,
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const GetOneAdmin = async (id) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}admin/detail/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const ForgotPassword = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}admin/forgot-password`,
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};


export const Logs = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `https://web.talkangels.com/print/logs`,
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const ResetadminPassword = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}admin/reset-password`,
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const UpdateAdminDetail = async (body, id) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}admin/update/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
export const AddAdminDetail = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}auth/admin/register`,
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
