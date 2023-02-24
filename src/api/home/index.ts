// Modules
import { axiosInstanceWithAuth } from "../../utils/axios";

// Types
import { 
  GetUsersByCompany, 
  PostGetGPSLocationByDriver, 
  PostGetGPSLocationByDriverResponse 
} from "./types";

export function getUsersByCompanyApi () {
  return axiosInstanceWithAuth.get<GetUsersByCompany>('/driver');
}

export function postGetGPSLocationsByDate (data:PostGetGPSLocationByDriver) {
  const { _id } = data;
  return axiosInstanceWithAuth.post<PostGetGPSLocationByDriverResponse>(`/gps/driver`, { _id });
}