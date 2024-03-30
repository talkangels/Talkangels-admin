import axios from "axios";
import { baseURL } from "./URL";

export const AddWebPage = async (body) => {
    try {
        let response = await axios({
            method: "POST",
            url: `${baseURL}admin/add-web-page`,
            headers: {
                Authorization: localStorage.getItem("token"),
            },
            data: body,
        });
        return response.data;
    } catch (error) {
        return error?.response?.data;
    }
};

export const GetWebPage = async (body) => {
    try {
        let response = await axios({
            method: "POST",
            url: `${baseURL}admin/get-web-page`,
            data: body,
        });
        return response.data;
    } catch (error) {
        return error?.response?.data;
    }
};

export const GetWebPageNames = async () => {
    try {
        let response = await axios({
            method: "GET",
            url: `${baseURL}admin/all-web-page-name`,
        });
        return response.data;
    } catch (error) {
        return error?.response?.data;
    }
};

export const DelateWebPage = async (body) => {
    try {
        let response = await axios({
            method: "DELETE",
            url: `${baseURL}admin/delete-web-page`,
            headers: {
                Authorization: localStorage.getItem("token"),
            },
            data: body,
        });
        return response.data;
    } catch (error) {
        return error?.response?.data;
    }
};

export const GetWebPageListener = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}admin/web-page-all-listeners`,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};