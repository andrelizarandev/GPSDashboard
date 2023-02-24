// Modules
import { createContext, useState } from 'react';

// Types
import { ConfirmDialogPayload, DialogContextPayload, DialogOptions } from './types';

export const DialogContext = createContext({} as DialogContextPayload);

export default function DialogContextContainer ({ children }:any) {

  const [ whichDialogIsOpen, setWhichDialogIsOpen ] = useState<DialogOptions>(null);
  const [ confirmDialogData, setConfirmDialogData ] = useState<ConfirmDialogPayload | null>(null);

  const closeAnyDialog = () => setWhichDialogIsOpen(null);
  const closeConfirmDialog = () => setConfirmDialogData(null);

  const payload:DialogContextPayload = {
    closeAnyDialog,
    closeConfirmDialog,
    whichDialogIsOpen,
    setWhichDialogIsOpen,
    confirmDialogData, 
    setConfirmDialogData
  }

  return (
    <DialogContext.Provider value={payload}>
      {children}
    </DialogContext.Provider>
  )
}