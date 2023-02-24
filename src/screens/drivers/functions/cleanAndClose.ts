// Modules
import { useContext } from 'react';

// Contexts
import { FormContext } from '../contexts/form';
import { DialogContext } from '../../../contexts/dialog-context';

export default function useCleanAndClose () {
  
  const { closeAnyDialog } = useContext(DialogContext);
  const { postDriverForm } = useContext(FormContext);
  const { cleanForm:cleanFormPostDriver } = postDriverForm;

  function cleanAndClosePostDriver () {
    cleanFormPostDriver();
    closeAnyDialog();
  }

  return {
    cleanAndClosePostDriver
  }
  
}
