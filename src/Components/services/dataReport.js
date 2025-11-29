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


export const FetchAllStaffCallRecodes = async (staffId, page, limit, mobile_number, call_type, startDate, endDate) => {
    try {
        let response = await axios({
            method: "GET",
            url: `${baseURL}admin/staff/calling/report?staffId=${staffId}&page=${page}&limit=${limit}&mobile_number=${mobile_number}&call_type=${call_type}&startDate=${startDate}&endDate=${endDate}`,
        });
        return response.data;
    } catch (error) {
        return error?.response?.data;
    }
};


export const FetchAllStaffCallRecodesSummary = async (staffId, mobile_number, call_type, startDate, endDate) => {
    try {
        let response = await axios({
            method: "GET",
            url: `${baseURL}admin/staff/calling/report/summary?staffId=${staffId}&mobile_number=${mobile_number}&call_type=${call_type}&startDate=${startDate}&endDate=${endDate}`,
        });
        return response.data;
    } catch (error) {
        return error?.response?.data;
    }
};

export const FetchAllCallRecodesSummary = async (mobile_number, call_type, startDate, endDate) => {
    try {
        let response = await axios({
            method: "GET",
            url: `${baseURL}admin/calling/report/summary?mobile_number=${mobile_number}&call_type=${call_type}&startDate=${startDate}&endDate=${endDate}`,
        });
        return response.data;
    } catch (error) {
        return error?.response?.data;
    }
};



export const FetchAllTransctionReportSummary = async (Search, payment_type, payment_status, startDate, endDate) => {
    try {
        let response = await axios({
            method: "GET",
            url: `${baseURL}admin/transction/summary/report?Search=${Search}&payment_type=${payment_type}&payment_status=${payment_status}&startDate=${startDate}&endDate=${endDate}`,
        });
        return response.data;
    } catch (error) {
        return error?.response?.data;
    }
};

export const FetchAllTransctionReport = async (Search, payment_type, payment_status, startDate, endDate, page, limit) => {
    try {
        let response = await axios({
            method: "GET",
            url: `${baseURL}admin/transction/report?Search=${Search}&payment_type=${payment_type}&payment_status=${payment_status}&startDate=${startDate}&endDate=${endDate}&page=${page}&limit=${limit}`,
        });
        return response.data;
    } catch (error) {
        return error?.response?.data;
    }
};
