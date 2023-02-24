// Modules
import { useContext }from 'react';
import { Stack, Typography } from '@mui/material';

// Components
import DialogStack from '../dialog-stack';
import Blue500Button from '../../components/_buttons/blue500-button';

// Context
import { UiContext } from '../../contexts/ui-context';

// Style
import { FlexStyle } from '../../styles/flex';

export default function MessageDialog () {

  const { messageDialog, setMessageDialog } = useContext(UiContext);

  return (
    <DialogStack 
      isOpen={messageDialog !== null}
      size='sm'
      title={messageDialog?.title!}
      onSubmit={() => setMessageDialog(null)}
    >
      <Typography>{messageDialog?.body!}</Typography>
      <Stack sx={FlexStyle.HStackJustifyEndAlignCenter}>
        <Blue500Button variant='contained' onClick={() => setMessageDialog(null)}>Aceptar</Blue500Button>
      </Stack>
    </DialogStack>
  )
}