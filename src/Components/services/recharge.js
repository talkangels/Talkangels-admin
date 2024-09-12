import axios from "axios";
import { baseURL } from "./URL";

export const AddRecharge = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}admin/add-recharge`,
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

export const GetAllRecharge = async (body) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}admin/all-recharge?page_no=${body.page_no}&items_per_page=${body.items_per_page}`,
       headers: {
        Authorization:`Bearer ${localStorage.getItem("token")}` ,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const UpdateRechargeStatus = async (body) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}admin/update-recharge/${body.id}`,
       headers: {
        Authorization:`Bearer ${localStorage.getItem("token")}` ,
      },
      data: body.data,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const DeleteRechargeStatus = async (id) => {
  try {
    let response = await axios({
      method: "DELETE",
      url: `${baseURL}admin/delete-recharge/${id}`,
       headers: {
        Authorization:`Bearer ${localStorage.getItem("token")}` ,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
