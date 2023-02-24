// Modules
import { useEffect } from 'react';

// Hooks
import useGet from './get'

export default function useOnCreate() {
  
  const { isLoadingGet, startGetUsersByCompany } = useGet();

  function onCreate () {
    startGetUsersByCompany();
  }

  useEffect(onCreate, []);

  return {
    isLoadingGet
  }

}
