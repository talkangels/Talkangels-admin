import axios from "axios";
import { baseURL } from "./URL";

export const GetReportList = async (body) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}admin/all-report?page_no=${body.page_no}&items_per_page=${body.items_per_page}`,
       headers: {
        Authorization:`Bearer ${localStorage.getItem("token")}` ,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const UpdateReportStatus = async (body) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}admin/update-report-request/${body.id}`,
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
