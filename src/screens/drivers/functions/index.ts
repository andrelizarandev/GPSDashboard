// Modules
import { useContext } from 'react';

// Contexts
import { DialogContext } from '../../../contexts/dialog-context';

// Hooks
import useSubmit from './submit';

export default function useFunctions () {

  const { startPutToggleDriverStatus, isLoading } = useSubmit();
  const { isLoadingPutToggleDriverStatus } = isLoading;
  const { setConfirmDialogData } = useContext(DialogContext);
  
  function selectDriverToToggleStatus (id:string) {
    setConfirmDialogData({ 
      title:'Cambiar estatus de conductor',
      body:'¿Estás seguro de cambiar el estatus del conductor?',
      isLoading:isLoadingPutToggleDriverStatus,
      onSubmit:() => startPutToggleDriverStatus(id)
    })
  }

  return {
    selectDriverToToggleStatus
  }

}
