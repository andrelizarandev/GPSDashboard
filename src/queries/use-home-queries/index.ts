// Modules
import { useMutation } from 'react-query';

// Api
import { getUsersByCompanyApi, postGetGPSLocationsByDate } from '../../api/home';

// Types
import { GetUserData } from '../../api/home/types';

export default function useHomeQueries () {
  
  function useGetUsersByCompany (onSuccess: (data:GetUserData[]) => void) {
    return useMutation(getUsersByCompanyApi, {
      onSuccess: ({ data }) => onSuccess(data.data)
    });
  }

  function usePostGetGPSLocationsByDate () {
    return useMutation(postGetGPSLocationsByDate);
  }

  return {
    useGetUsersByCompany,
    usePostGetGPSLocationsByDate
  }

}
