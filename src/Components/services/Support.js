import axios from "axios";
import { baseURL } from "./URL";

export const SendSupport = async (body) => {
    try {
        let response = await axios.post(`${baseURL}/user/send/support`, body, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        });

        return response.data;
    } catch (error) {
        return error?.response?.data;
    }
};


export const GetAllSupportRequest = async () => {
    try {
        let response = await axios.get(`${baseURL}/admin/support/requst`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        });

        return response.data;
    } catch (error) {
        return error?.response?.data;
    }
};


export const MarkSupportSolve = async (body) => {
    try {
        let response = await axios.put(`${baseURL}/admin/support/requst/mark`, body, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        });

        return response.data;
    } catch (error) {
        return error?.response?.data;
    }
};
