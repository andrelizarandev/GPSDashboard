// Modules
import { useContext } from 'react';

// Contexts
import { ValuesContext } from '../contexts/values';
import { UiContext } from '../../../contexts/ui-context';
import { DialogContext } from '../../../contexts/dialog-context';

// Hooks
import useGet from './get';
import useValues from './values';
import useCleanAndClose from './cleanAndClose';
import useDriverQueries from '../../../queries/use-driver-queries';

export default function useSubmit () {

  const { startGetDrivers } = useGet();
  const { cleanAndClosePostDriver } = useCleanAndClose();
  const { getPostDriverValues } = useValues();
  const { usePostDriver, usePutToggleDriverStatus } = useDriverQueries();
  const { setMessageDialog } = useContext(UiContext);
  const { closeConfirmDialog } = useContext(DialogContext);
  const { selectedUser } = useContext(ValuesContext);

  const { 
    isLoading:isLoadingPostDriver,
    mutate:mutatePostDriver 
  } = usePostDriver(onSuccessPostDriver);

  const {
    isLoading:isLoadingPutToggleDriverStatus,
    mutate:mutatePutToggleDriverStatus
  } = usePutToggleDriverStatus(onSuccessPutToggleDriverStatus);

  const isLoading = {
    isLoadingPostDriver,
    isLoadingPutToggleDriverStatus
  }
  
  function startPostDriver () {
    mutatePostDriver(getPostDriverValues());
  }

  function startPutToggleDriverStatus () {
    mutatePutToggleDriverStatus(selectedUser!!);
  }

  function onSuccessPostDriver () {
    cleanAndClosePostDriver();
    startGetDrivers();
    setMessageDialog({ 
      title:'Conductor Creado',
      body:'Conductor creado con éxito',
      type:'success'
    });
  }

  function onSuccessPutToggleDriverStatus () {
    closeConfirmDialog();
    startGetDrivers();
    setMessageDialog({ 
      title:'Conductor dado de Baja',
      body:'Conductor dado de baja con éxito',
      type:'success'
    });
  }

  return {
    isLoading,
    startPostDriver,
    startPutToggleDriverStatus
  }

}
