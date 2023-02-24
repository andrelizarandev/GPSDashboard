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

export type GetLocationData = {
  long:number;
  lat:number;
  userId:string
}

export type PostGetGPSLocationByDriver = {
  _id:string;
  date:string;
}