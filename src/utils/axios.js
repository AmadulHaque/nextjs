"use client";
import { getToken } from "@/helper/SessionHelper";
import axios from "axios";


const baseURL = process.env.APP_API_URL || "https://admin.fastpowertech.xyz";


let axiosInstance = null;

export const initializeAxios = () => {
  const token = getToken();
  axiosInstance = axios.create({
    baseURL,
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  return axiosInstance;
};

initializeAxios();

export default axiosInstance;
