// Modules
import { useContext } from 'react';
import { Alert, Snackbar } from '@mui/material';

// Contexts
import { UiContext } from '../../contexts/ui-context';

export default function SnackbarContainer ({ children }:any) {
  const { handleSetNullSnackbarMessage, snackbarMessage } = useContext(UiContext);
  return (
    <>
      {children}
      <Snackbar open={snackbarMessage !== null} autoHideDuration={5000} onClose={handleSetNullSnackbarMessage}>
        <Alert onClose={handleSetNullSnackbarMessage} severity={snackbarMessage?.type} sx={{ width: '100%' }}>
          {snackbarMessage?.title}
        </Alert>
      </Snackbar>
    </>
  )
}