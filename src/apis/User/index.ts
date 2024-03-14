import { tokenAxiosInstance,defaultAxiosInstance } from "../utils";

//특정 사용자의 프로필 조회
  export const userProfile = async (id:string) => {
    try {
        const { data } = await tokenAxiosInstance.get(`users/${id}/profile`);
        console.log('유저프로필',data)
        return data;
    } catch (error) {
        console.error('Error while signing up:', error);
        throw error; // Optional: Re-throw the error for handling in the component
    }
};

//중복 ID 조회
export const users  = async (id: string) => {

    try {
        const { data } = await defaultAxiosInstance.get(`/users?loginId=${id}`)
        console.log('요청 성공',data)
        return data;
    } catch (error) {
        console.error('Error while signing up:', error);
        console.log('실패')
        throw error; // Optional: Re-throw the error for handling in the component
    }
};