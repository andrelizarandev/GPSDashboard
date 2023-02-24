// Modules
import { useContext } from 'react';

// Contexts
import { FormContext } from '../contexts/form';

// Types
import { PostDriverData } from '../../../api/drivers/types';

export default function useValues() {

  const { postDriverForm } = useContext(FormContext);
  const { form:formPostDriver } = postDriverForm;
  const { username, password, fullname } = formPostDriver;
  
  function getPostDriverValues ():PostDriverData {
    return {
      username, 
      password, 
      fullname
    }
  }

  return {
    getPostDriverValues
  }

}
