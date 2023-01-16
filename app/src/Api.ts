import axios from "axios";
import { Data } from "./type/todoType";

const token = localStorage.getItem("login");
const endpoint = `http://localhost:8080/todos`;

export const get = async () => {
  try {
    const response = await axios.get(endpoint, {
      headers: { Authorization: `${token}` },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const post = async ( data: Data) => {
  try {
    const response = await axios.post(endpoint, data, {
      headers: { Authorization: `${token}` },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const put = async ( data: Data) => {
  try {
    const response = await axios.put(endpoint, data, {
      headers: { Authorization: `${token}` },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const del = async () => {
  try {
    const response = await axios.delete(endpoint, {
      headers: { Authorization: `${token}` },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
