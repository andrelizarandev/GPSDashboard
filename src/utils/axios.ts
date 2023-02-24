// Modules
import axios from 'axios';

export const axiosInstance = axios.create({ baseURL:import.meta.env.VITE_DEV_URL });

export const axiosInstanceWithAuth = axiosInstance;

axiosInstance.interceptors.request.use(async (config) => {
  try {
    const token = localStorage.getItem('gps-token');
    // @ts-ignore
    config.headers = { 'token': token };
    return config;
  } catch (err:any) {
    return config;
  }
});