// Modules
import { useContext } from 'react'

// Contexts
import { FormContext } from '../contexts/form';

// Types
import { PostLogin } from '../../../api/login/types';

export default function useValues () {

  const { postLoginForm } = useContext(FormContext);
  const { form:formPostLogin } = postLoginForm;
  
  function getPostLoginValues ():PostLogin {
    const { email, password } = formPostLogin;
    return {
      email, 
      password
    }
  }

  return {
    getPostLoginValues
  }

}
