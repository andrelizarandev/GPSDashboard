// Modules
import { createContext } from 'react';

// Hooks
import useHandleForm from '../../../../hooks/use-handle-form'

// Types
import { FormContextPayload } from './types';

export const FormContext = createContext({} as FormContextPayload);

export default function FormContextContainer ({ children }:any) {

  const postGetUserLocationsForm = useHandleForm(initialStatePostLogin);

  const payload:FormContextPayload = {
    postGetUserLocationsForm
  }

  return (
    <FormContext.Provider value={payload}>
      {children}
    </FormContext.Provider>
  )
}

const initialStatePostLogin = {
  user:0,
  date:''
}
