// Modules
import { createContext } from 'react';

// Hooks
import useHandleForm from '../../../../hooks/use-handle-form'

// Types
import { FormContextPayload } from './types';

export const FormContext = createContext({} as FormContextPayload);

export default function FormContextContainer ({ children }:any) {

  const postLoginForm = useHandleForm(initialStatePostLogin);

  const payload:FormContextPayload = {
    postLoginForm
  }

  return (
    <FormContext.Provider value={payload}>
      {children}
    </FormContext.Provider>
  )
}

const initialStatePostLogin = {
  email:'',
  password:''
}
