import axios from "axios";
import { baseURL } from "./URL";

export const GetAllUser = async (body) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}admin/all-user?page_no=${body.page_no}&items_per_page=${body.items_per_page}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const UpdateUserStatus = async (body) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}admin/update-user/${body.id}`,
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
export const DeleteUser = async (id) => {
  try {
    let response = await axios({
      method: "DELETE",
      url: `${baseURL}user/delete/${id}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
