// Modules
import { createContext, useState } from 'react';

// Types
import { 
  MessageDialogPayload,
  SnackbarPayload, 
  UiContextPayload 
} from './types';

export const UiContext = createContext({} as UiContextPayload);

export default function UiContextContainer ({ children }:any) {

  const [ messageDialog, setMessageDialog ] = useState<MessageDialogPayload>(null);
  const [ snackbarMessage, setSnackbarMessage ] = useState<SnackbarPayload>(null);
  const [ functionHelper, setFunctionHelper ] = useState<any>(null);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ showSidebar, setShowSidebar ] = useState(true);

  const toggleShowSidebar = () => setShowSidebar(!showSidebar);
  const handleSetNullSnackbarMessage = () => setSnackbarMessage(null);

  const payload:UiContextPayload = {
    messageDialog, 
    setMessageDialog,
    snackbarMessage,
    setSnackbarMessage,
    handleSetNullSnackbarMessage,
    functionHelper, 
    setFunctionHelper,
    isEditing, 
    setIsEditing,
    showSidebar, 
    toggleShowSidebar,
  }

  return (
    <UiContext.Provider value={payload}>
      {children}
    </UiContext.Provider>
  )
}
