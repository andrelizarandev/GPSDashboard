// Modules
import { createContext } from 'react';

// Hooks
import useHandleForm from '../../../../hooks/use-handle-form'

// Types
import { FormContextPayload } from './types';

export const FormContext = createContext({} as FormContextPayload);

export default function FormContextContainer ({ children }:any) {

  const postDriverForm = useHandleForm(initialStatePostDriver);
  const postGetUserLocationsForm = useHandleForm(initialStatePostLogin);

  const payload:FormContextPayload = {
    postGetUserLocationsForm,
    postDriverForm
  }

  return (
    <FormContext.Provider value={payload}>
      {children}
    </FormContext.Provider>
  )
}

const initialStatePostDriver = {
  username:'',
  password:'',
  fullname:''
}

const initialStatePostLogin = {
  user:0,
  date:''
}
