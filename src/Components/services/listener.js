import axios from "axios";
import { baseURL } from "./URL";

export const GetAllListenerRequst = async (body) => {
    try {
        let response = await axios({
            method: "GET",
            url: `${baseURL}admin/listener/all-listeners-requst?status=${body.status}`,
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });
        return response.data;
    } catch (error) {
        return error?.response?.data;
    }
};

export const UpdateListenerRequstStatus = async (body) => {
    try {
        let response = await axios({
            method: "PUT",
            url: `${baseURL}admin/listener/update-listener-requst/${body.id}`,
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
