import { defaultAxiosInstance } from "../utils";

//로그인
export const authSignIn  = async (userData: any) => {
    try {
        const { data } = await defaultAxiosInstance.post('auth/sign-in', userData);
        return data;
    } catch (error) {
        console.error('Error while signing up:', error);
        throw error; // Optional: Re-throw the error for handling in the component
    }
};
export const authSignUp  = async (userData: object) => {
    try {
        const { data } = await defaultAxiosInstance.post('auth/sign-up', userData);
        return data;
    } catch (error) {
        console.error('Error while signing up:', error);
        throw error; // Optional: Re-throw the error for handling in the component
    }
};
export const jwtValidation  = async (request: any) => {
    try {
        const { data } = await defaultAxiosInstance.post('auth/jwt', request);
        console.log('재요청 성공')
        return data;
    } catch (error) {
        console.error('Error while signing up:', error);
        console.log('실패')
        throw error; // Optional: Re-throw the error for handling in the component
    }
};
//중복 ID 조회
export const users  = async (id: any) => {

    try {
        const { data } = await defaultAxiosInstance.get(`/users?loginId=${id}`)
        console.log('재요청 성공')
        return data;
    } catch (error) {
        console.error('Error while signing up:', error);
        console.log('실패')
        throw error; // Optional: Re-throw the error for handling in the component
    }
};