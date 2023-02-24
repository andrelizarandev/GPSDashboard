// Modules
import { useEffect } from 'react';

// Hooks
import useGet from './get';

export default function useOnCreate () {
  
  const { isLoadingGet, startGetDrivers } = useGet();

  function onCreate () {
    startGetDrivers();
  }

  useEffect(onCreate, []);

  return {
    isLoadingGet
  }

}
