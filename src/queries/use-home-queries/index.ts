// Modules
import { useMutation } from 'react-query';

// Api
import { getUsersByCompanyApi, postGetGPSLocationsByDate } from '../../api/home';

// Types
import { GetUserData, LocationData } from '../../api/home/types';

export default function useHomeQueries () {
  
  function useGetUsersByCompany (onSuccess: (data:GetUserData[]) => void) {
    return useMutation(getUsersByCompanyApi, {
      onSuccess: ({ data }) => onSuccess(data.data)
    });
  }

  function usePostGetGPSLocationsByDate (onSuccess: (data:LocationData[]) => void) {
    return useMutation(postGetGPSLocationsByDate, { 
      onSuccess: ({ data }) => onSuccess(data.data)
    });
  }

  return {
    useGetUsersByCompany,
    usePostGetGPSLocationsByDate
  }

}
