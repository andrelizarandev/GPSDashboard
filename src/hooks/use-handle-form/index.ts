// Modules
import { useState } from 'react';

// Hooks
import useHandleStrings from '../use-handle-strings';

// Types
import { OnChangeEvent, UseHandleForm } from './types';

export default function useHandleForm (initialState:any):UseHandleForm {
  
  const [ form, setForm ] = useState(initialState);
  const { validateStringContainsOnlyNumbers } = useHandleStrings();

  function handleOnChange (e:OnChangeEvent) {
    const { value, name } = e.target;
    if (value.length > 100) return;
    setForm({ ...form, [name]:value });
  }

  function handleOnChangeCheck (e:OnChangeEvent) {
    const { name, checked } = e.target;
    setForm({ ...form, [name]:checked });
  } 

  function handleOnChangeJustNumbers (e:OnChangeEvent) {
    const { value, name } = e.target;
    if (!validateStringContainsOnlyNumbers(value) || value.length > 100) return;
    setForm({ ...form, [name]:value });
  }

  function handleOnChangeMaxLengthJustNumbers (e:OnChangeEvent, maxLength:number) {
    const { value, name } = e.target;
    if (!validateStringContainsOnlyNumbers(value) || value.length > maxLength) return;
    setForm({ ...form, [name]:value });
  }

  function validateIsNumber (lastChar:string) {
    return (
      lastChar !== '1' && 
      lastChar !== '2' && 
      lastChar !== '3' && 
      lastChar !== '4' && 
      lastChar !== '5' &&
      lastChar !== '6' && 
      lastChar !== '7' &&
      lastChar !== '8' && 
      lastChar !== '9' &&
      lastChar !== '0' &&
      lastChar !== ''
    ) 
  }

  const cleanForm = () => setForm(initialState);

  return {
    form,
    initialState,
    setForm,
    handleOnChange,
    handleOnChangeCheck,
    handleOnChangeJustNumbers,
    handleOnChangeMaxLengthJustNumbers,
    cleanForm,
  }

}
