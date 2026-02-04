import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/products',
    timeout: 10000,
});

axiosInstance.interceptors.request.use(
    (confi)=>{
        console.log("Request:",confi.url);
        return confi
    },
    (error)=> Promise.reject(error)
)

axiosInstance.interceptors.response.use(
    (response)=>response,
    (error)=>{
        console.log("Api error:",error.response);
        return Promise.reject(error)
    }
)

export default axiosInstance;