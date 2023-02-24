// Axios
import { axiosInstance } from "../../utils/axios";

// Types
import { PostLogin, PostLoginResponse } from "./types";

export function postLoginApi (data:PostLogin) {
  return axiosInstance.post<PostLoginResponse>('/company/login', data);
}