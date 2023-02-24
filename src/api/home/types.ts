export type GetUsersByCompany = {
  data:GetUserData[];
}

export type GetUserData = {
  _id:string;
  fullname:string;
  username:string;
  password:string;
  companyId:string;
}

export type PostGetGPSLocationByDriver = {
  _id:string;
  date:string;
}

export type PostGetGPSLocationByDriverResponse = {
  data:LocationData[];
}

export type LocationData = {
  latitude:number;
  longitude:number;
  timestamp:string;
}