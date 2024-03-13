import axios, { AxiosInstance } from "axios";
import request from "../core";

export const axiosInstance: AxiosInstance = axios.create({
    baseURL:`https://api-sns.gridge-test.com`,
    timeout: 5000,
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      //요청 보내기 전에 수행 로직
      return config;
    },
    (err) => {
      //요청 에러 시 수행 로직
      return Promise.reject(err);
    }
  );
  
  //응답 인터셉터
  axiosInstance.interceptors.response.use(
    (response) => {
      //응답에 대한 로직
    //   const res = response.data;
      const res = response;
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  export default axiosInstance;
  
  export const userProfile  = async () => {
    try {
        const { data } = await request.post('auth/jwt');
        return data;
    } catch (error) {
        console.error('Error while signing up:', error);
        throw error;
    }
};