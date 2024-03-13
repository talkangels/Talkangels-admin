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