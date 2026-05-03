import axios from "axios";

const axiosInstance = axios.create({
    baseURL :"https://ecommerce-project-53hw.onrender.com/",
})

export default axiosInstance;