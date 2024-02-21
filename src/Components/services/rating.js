import axios from "axios";
import { baseURL } from "./URL";

export const GetRatingList = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}admin/all-rating`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
