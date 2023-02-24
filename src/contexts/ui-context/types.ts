// Modules
import { AlertColor } from "@mui/material";

export type UiContextPayload = {
  messageDialog: MessageDialogPayload;
  setMessageDialog: React.Dispatch<React.SetStateAction<MessageDialogPayload>>;
  snackbarMessage: SnackbarPayload;
  setSnackbarMessage: React.Dispatch<React.SetStateAction<SnackbarPayload>>;
  handleSetNullSnackbarMessage: () => void;
  functionHelper: any, 
  setFunctionHelper: React.Dispatch<React.SetStateAction<any>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  showSidebar: boolean;
  toggleShowSidebar: () => void;
}

export type MessageDialogPayload = {
  title:string;
  body:string;
  type:AlertColor;
} | null;

export type SnackbarPayload = {
  title:string;
  type:AlertColor;
} | null