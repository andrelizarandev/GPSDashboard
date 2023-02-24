// Modules
import { useContext, useEffect } from 'react';
import { ValuesContext } from '../contexts/values';

// Hooks
import useGet from './get'

export default function useOnCreate() {
  
  const { locationList } = useContext(ValuesContext);
  const { isLoadingGet, startGetUsersByCompany } = useGet();

  function onCreate () {
    startGetUsersByCompany();
  }

  useEffect(onCreate, []);
  useEffect(() => console.log(locationList), [locationList]);

  return {
    isLoadingGet
  }

}
