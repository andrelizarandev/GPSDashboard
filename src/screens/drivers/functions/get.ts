// Modules
import { useContext } from 'react';

// Contexts
import { ValuesContext } from '../contexts/values';

// Hooks
import useHomeQueries from '../../../queries/use-home-queries';

// Types
import { GetUserData } from '../../../api/home/types';

export default function useGet () {
  
  const { setUserList } = useContext(ValuesContext);
  const { useGetUsersByCompany } = useHomeQueries();

  const {  
    isLoading:isLoadingGetDrivers,
    mutate:mutateGetDrivers
  } = useGetUsersByCompany(onSuccessGetDrivers);

  const isLoadingGet = isLoadingGetDrivers;

  function startGetDrivers () {
    mutateGetDrivers();
  }

  function onSuccessGetDrivers (data:GetUserData[]) {
    setUserList(data);
  }

  return {
    isLoadingGet,
    startGetDrivers
  }

}
