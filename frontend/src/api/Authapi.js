// src/api/Authapi.js
import axios from "axios";
import { BASE_URL } from "./api_base.js";

export const handlelogin = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/token/`, {
        //Lagyan ng /api... kasi isang bui nyang binabasa
      username,
      password,
    });
    return response;
  } catch (error) {
    console.log(error);
    console.log(`${BASE_URL}/api/token/`);
    throw error;
  }
};
