// Types

export type DialogContextPayload = {
  whichDialogIsOpen: DialogOptions;
  closeAnyDialog: () => void;
  closeConfirmDialog: () => void;
  setWhichDialogIsOpen: React.Dispatch<React.SetStateAction<DialogOptions>>;
  confirmDialogData: ConfirmDialogPayload | null;
  setConfirmDialogData:React.Dispatch<React.SetStateAction<ConfirmDialogPayload | null>>;
}

export type DialogOptions = 'submit-driver' | null;

export type ConfirmDialogPayload = {
  title:string;
  body:string;
  onSubmit:() => void;
  isLoading:boolean;
}