import axios,{AxiosInstance} from 'axios'
import { JWT_KEY } from "../../config/constant";
import { jwtValidation } from "../auth";

const BASE_URL = 'https://api-sns.gridge-test.com'

// 토큰이 없는 Axios 인스턴스 생성
export const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
  });

// 토큰이 있는 Axios 인스턴스 생성
export const tokenAxiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem(JWT_KEY)}`,
    },
  });
  
  tokenAxiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
        console.log('error',error);
        console.log('error.response',error.response);
        console.log('error.response.data.error',error.response.data.error);
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.error === 'INVALID_AUTH_TOKEN'
      ) {
        try {
          const { data } = await jwtValidation({ jwt: localStorage.getItem(JWT_KEY) });
          console.log('토큰 재발급 요청 성공');
          console.log(data);
          localStorage.setItem('jwt', data.token); // 새로운 토큰을 로컬 스토리지에 저장
          return tokenAxiosInstance.request(error.config); // 기존 요청을 재시도
        } catch (refreshError) {
          console.error('토큰 재발급 오류:', refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
  