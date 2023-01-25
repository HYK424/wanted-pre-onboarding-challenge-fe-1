import axios from "axios";
import api from "../lib/axios";
import { Data } from "../type/todoType";

const endpoint = `/todos`;
//get
export const getTodo = async () => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const getTodoById = async (id: string | undefined) => {
  try {
    const response = await api.get(`${endpoint}/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

//post
export const createTodo = async (data: Data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
//put
export const putTodo = async (id: string | undefined, data: Data) => {
  try {
    const response = await api.put(`${endpoint}/${id}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
//delete
export const deleteTodo = async (id: string | undefined) => {
  try {
    const response = await api.delete(`${endpoint}/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
