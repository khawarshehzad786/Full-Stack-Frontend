
import axios from 'axios';
// console.log('API Base URL:', import.meta.env.VITE_API_BASE_URL_DEV);
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL_DEV,
});

export default axiosInstance;
