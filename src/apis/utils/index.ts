import axios,{AxiosInstance} from 'axios'

const BASE_URL = 'https://api-sns.gridge-test.com'

const axiosApi = (url:string, options?:object) => {
const instance = axios.create({ baseURL: url,...options })
return instance
}

const axiosAuthApi = (url:string, options?:object) => {
const token = localStorage.getItem('jwt')
const instance:AxiosInstance = axios.create({
baseURL: url,
headers: { Authorization: 'Bearer' + token },
...options,
})
return instance
}

export const defaultInstance = axiosApi(BASE_URL)
export const authInstance = axiosAuthApi(BASE_URL)