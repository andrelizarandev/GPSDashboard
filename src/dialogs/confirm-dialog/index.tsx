// Modules
import { useContext } from 'react';
import { Stack, Typography } from '@mui/material';

// Components
import DialogStack from '../dialog-stack';
import Blue500Button from '../../components/_buttons/blue500-button';

// Contexts
import { DialogContext } from '../../contexts/dialog-context';

// Style
import { FlexStyle } from '../../styles/flex';

export default function ConfirmDialog () {
  const { confirmDialogData, closeConfirmDialog } = useContext(DialogContext);
  return (
    <DialogStack
      isOpen={confirmDialogData != null}
      title={confirmDialogData?.title!!}
      onSubmit={confirmDialogData?.onSubmit!!}
    >
      <Typography>{confirmDialogData?.body}</Typography>
      <Stack sx={FlexStyle.HStackJustifyEndAlignCenter}>
        <Blue500Button disabled={confirmDialogData?.isLoading} onClick={closeConfirmDialog}>Cancelar</Blue500Button>
        <Blue500Button variant='contained' type='submit' disabled={confirmDialogData?.isLoading}>Confirmar</Blue500Button>
      </Stack>
    </DialogStack>
  )
}
