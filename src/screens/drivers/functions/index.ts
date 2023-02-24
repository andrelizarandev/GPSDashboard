// Modules
import { useContext } from 'react';

// Contexts
import { DialogContext } from '../../../contexts/dialog-context';
import { ValuesContext } from '../contexts/values';

export default function useFunctions () {

  const { setSelectedUser } = useContext(ValuesContext);
  const { setConfirmDialogData } = useContext(DialogContext);
  
  function selectDriverToToggleStatus (id:string) {
    setSelectedUser(id);
    setConfirmDialogData({ 
      title:'Cambiar estatus de conductor',
      body:'¿Estás seguro de cambiar el estatus del conductor?',
      isLoading:false,
      onSubmit:() => {}
    })
  }

  return {
    selectDriverToToggleStatus
  }

}
