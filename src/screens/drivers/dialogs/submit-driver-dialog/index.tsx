// Modules
import { useContext } from 'react';
import { Stack, TextField } from '@mui/material';

// Components
import DialogStack from '../../../../dialogs/dialog-stack';
import Blue500Button from '../../../../components/_buttons/blue500-button';

// Contexts
import { FormContext } from '../../contexts/form';
import { DialogContext } from '../../../../contexts/dialog-context';

// Hooks
import useSubmit from '../../functions/submit';
import useCleanAndClose from '../../functions/cleanAndClose';

// Style
import { FlexStyle } from '../../../../styles/flex';

export default function SubmitDriverDialog () {

  const { startPostDriver, isLoading } = useSubmit();
  const { cleanAndClosePostDriver } = useCleanAndClose();
  const { whichDialogIsOpen } = useContext(DialogContext);
  const { postDriverForm } = useContext(FormContext);
  const { form, handleOnChange } = postDriverForm;
  const { username, fullname, password } = form;
  const { isLoadingPostDriver } = isLoading;

  const isSubmitEnabled = !isLoadingPostDriver && username && fullname && password;
  const isFormEnabled = !isLoadingPostDriver;

  return (
    <DialogStack 
      title='Registrar Conductor'
      isOpen={whichDialogIsOpen === 'submit-driver'}
      onSubmit={startPostDriver}
    >
      <TextField 
        variant='filled' 
        name='fullname' 
        value={fullname} 
        onChange={handleOnChange} 
        size='small' 
        label='Nombre de Conductor'
        disabled={!isFormEnabled}
      />

      <TextField 
        variant='filled' 
        name='username' 
        value={username} 
        onChange={handleOnChange} 
        size='small' 
        label='Usuario'
        disabled={!isFormEnabled}
        helperText='Con este usuario podrán iniciar sesión en la app móvil'
      />

      <TextField 
        variant='filled' 
        name='password' 
        value={password} 
        onChange={handleOnChange} 
        size='small' 
        label='Contraseña'
        disabled={!isFormEnabled}
        type='password'
      />

      <Stack sx={FlexStyle.HStackJustifyEndAlignCenter}>
        <Blue500Button onClick={cleanAndClosePostDriver}>Cancelar</Blue500Button>
        <Blue500Button variant='contained' type='submit' disabled={!isSubmitEnabled}>Registrar</Blue500Button>
      </Stack>

    </DialogStack>
  )

}
