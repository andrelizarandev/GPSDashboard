// Modules
import { useContext } from 'react';

// Contexts
import { FormContext } from '../contexts/form';

// Types
import { PostGetGPSLocationByDriver } from '../../../api/home/types';

export default function useValues () {

  const { postGetUserLocationsForm } = useContext(FormContext);
  const { form:formPostGetUserLocations } = postGetUserLocationsForm;
  
  function getPostGetGPSLocationsByDateValues ():PostGetGPSLocationByDriver {
    const { user, date } = formPostGetUserLocations;
    return {
      _id:user,
      date
    }
  }

  return {
    getPostGetGPSLocationsByDateValues
  }
  
}
