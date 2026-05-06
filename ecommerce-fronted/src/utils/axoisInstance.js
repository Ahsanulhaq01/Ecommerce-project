import axios from "axios";

const axiosInstance = axios.create({
    baseURL :"https://ecommerce-project-h35p.onrender.com/",
})

export default axiosInstance;