import axios from "axios";
import { baseURL } from "./URL";

export const FetchAllCallRecodes = async (page, limit, mobile_number, call_type, startDate, endDate) => {
    try {
        let response = await axios({
            method: "GET",
            url: `${baseURL}admin/calling/report?page=${page}&limit=${limit}&mobile_number=${mobile_number}&call_type=${call_type}&startDate=${startDate}&endDate=${endDate}`,
        });
        return response.data;
    } catch (error) {
        return error?.response?.data;
    }
};
