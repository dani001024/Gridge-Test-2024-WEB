import { defaultInstance } from "../utils";

//로그인
export const authSignIn  = async (userData: any) => {
    try {
        const { data } = await defaultInstance.post('auth/sign-in', userData);
        return data;
    } catch (error) {
        console.error('Error while signing up:', error);
        throw error; // Optional: Re-throw the error for handling in the component
    }
};
export const jwtValidation  = async (request: any) => {
    try {
        const { data } = await defaultInstance.post('auth/jwt', request);
        return data;
    } catch (error) {
        console.error('Error while signing up:', error);
        throw error; // Optional: Re-throw the error for handling in the component
    }
};