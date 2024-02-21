import axios from "axios";
import { baseURL } from "./URL";

export const GetAllStaffList = async (body) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}admin/all-staff?page_no=${body.page_no}&items_per_page=${body.items_per_page}&search_text=${body.search_text}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const AddStaffDetail = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}admin/add-staff`,
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

export const UpdateStaffStatus = async (body) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}admin/update-staff/${body.id}`,
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

export const SingleStaff = async (id) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}admin/one-staff/${id}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const DeleteStaff = async (id) => {
  try {
    let response = await axios({
      method: "DELETE",
      url: `${baseURL}admin/delete-staff/${id}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
