// Modules
import { axiosInstanceWithAuth } from "../../utils/axios";

// Types
import { GetUsersByCompany, PostGetGPSLocationByDriver } from "./types";

export function getUsersByCompanyApi () {
  return axiosInstanceWithAuth.get<GetUsersByCompany>('/driver');
}

export function postGetGPSLocationsByDate (data:PostGetGPSLocationByDriver) {
  const { _id, date } = data;
  return axiosInstanceWithAuth.post(`/gps/driver/${_id}`, { date });
}