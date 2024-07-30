"use client";

import {
  removeToken,
  setToken,
  setRole,
  setUserDetails,
} from "@/helper/SessionHelper";
import axiosInstance, { initializeAxios } from "@/utils/axios";

export async function registration(req) {
  try {
    const response = await axiosInstance.post("/api/registration", req);
    return response.data;
  } catch (error) {
    if (error.response) {
      const { data } = error.response;
      if (data) {
        return data;
      }
    }
    return {
      success: false,
      message: "Failed to registration",
      errors: [],
    };
  }
}

export async function login(req) {
  try {
    const response = await axiosInstance.post("/api/login", req);
    const { data } = response.data;

    if (data && data.token) {
      setToken(data.token);
      setRole(data.role);
    }

    // Reinitialize axios with the new token
    initializeAxios();

    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      const { data } = error.response;
      if (data) {
        return data;
      }
    }
    return {
      success: false,
      message: "Failed to login",
      errors: [],
    };
  }
}

export const checkAuth = async () => {
  try {
    initializeAxios();

    let { data } = await axiosInstance.get(`/api/user`);
    setUserDetails(data.data);

    return data;
  } catch (error) {
    return false;
  }
};

export const logout = async () => {
  try {
    removeToken();

    await axiosInstance.post("/api/logout");

    // Reinitialize axios without the token
    initializeAxios();
    return true;
  } catch (error) {
    console.error("Failed to logout", error);
    return false;
  }
};
