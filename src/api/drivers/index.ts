// Axios
import { axiosInstanceWithAuth } from "../../utils/axios";

// Types
import { PostDriverData } from "./types";

export function postDriverApi (data:PostDriverData) {
  return axiosInstanceWithAuth.post('/driver', data);
}

export function putToggleDriverStatus (id:string) {
  return axiosInstanceWithAuth.put(`/driver/${id}/status`); 
}