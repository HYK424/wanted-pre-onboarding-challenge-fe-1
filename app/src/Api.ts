import axios from 'axios';
import { Data } from './type/todoType';

export const get=async(id:string='')=>{
    const endpoint=`http://localhost:8080/todos/${id}`
    const token = localStorage.getItem("login");
  try {
    const response = await axios.get(endpoint, {
        headers: { Authorization: `${token}` },
      });
  
    return response.data;
  } catch (error:any) {
      throw new Error(error.message);
    }
  }


export const post=async(id:string='', data:Data)=>{
    const endpoint=`http://localhost:8080/todos/${id}`
    const token = localStorage.getItem("login");
  try {
    const response = await axios.post(endpoint, data, {
        headers: { Authorization: `${token}` },
      });
    return response.data;
  } catch (error:any) {
    throw new Error(error.message);
  }
}

//put: 새로 데이터를 작성하는 것
//patch : 덮어쓰기? 틀은 그대로 있고 안에 내용을 바꾸는거
//기존 데이터 + 바뀌는 데이터 다 작성
export const put=async(id:string='', data:Data)=>{
    const endpoint=`http://localhost:8080/todos/${id}`
    const token = localStorage.getItem("login");
  try {
    const response = await axios.put(endpoint, data, {
        headers: { Authorization: `${token}` },
      });
    return response.data;
  } catch (error:any) {
    throw new Error(error.message);
  }
}


export const del=async(id:string='')=>{
    const endpoint=`http://localhost:8080/todos/${id}`
    const token = localStorage.getItem("login");
  try {
    const response = await axios.delete(endpoint, {
        headers: { Authorization: `${token}` },
      });
    return response.data;
  } catch (error:any) {
    throw new Error(error.message);
  }
}