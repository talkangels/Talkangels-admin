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

export const GetOneAdmin = async (id) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}admin/detail/${id}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
