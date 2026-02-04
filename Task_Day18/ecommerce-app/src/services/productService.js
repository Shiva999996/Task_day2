import axiosInstance from "../api/axiosInstance";

export const getproducts = async() => {
    const response = await axiosInstance.get("/");
       return response.data.products;
}

