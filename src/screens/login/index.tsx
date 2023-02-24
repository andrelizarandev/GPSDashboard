// Modules
import { useContext } from 'react';
import { Grid, Stack, TextField } from '@mui/material';

// Components
import LoginContextContainer from './contexts';
import PaperStack from '../../components/_shared/paper-stack';
import Blue500Button from '../../components/_buttons/blue500-button';
import GridXS0SM4MD6LG8 from '../../components/_grid/grid-xs0-sm4-md6-lg8';
import GridXS12SM8MD6LG4 from '../../components/_grid/grid-xs12-sm8-md6-lg4';

// Contexts
import { FormContext } from './contexts/form';

// Hooks
import useSubmit from './functions/submit';

// Style
import LoginStyle from './style';

export default function MainContainer () {
  return (
    <LoginContextContainer>
      <LoginScreen/>
    </LoginContextContainer>
  )
}

function LoginScreen () {
  return (
    <Grid container sx={LoginStyle.MainContainer}>
      <ImageContainer/>
      <FormContainer/>
    </Grid>
  )
}

function ImageContainer () {
  return (
    <GridXS0SM4MD6LG8>
      <Stack sx={LoginStyle.ImgContainer}/>
    </GridXS0SM4MD6LG8>
  )
}

function FormContainer () {
  return (
    <GridXS12SM8MD6LG4>
      <Stack sx={LoginStyle.FormContainer}>
        <Stack sx={LoginStyle.FormPaddingContainer}>
          <Form/>
        </Stack>
      </Stack>
    </GridXS12SM8MD6LG4>
  )
}

function Form () {

  const { postLoginForm } = useContext(FormContext);
  const { startPostLogin, isLoadingPostLogin } = useSubmit();
  const isSubmitEnabled = !isLoadingPostLogin;
  const isFormEnabled = !isLoadingPostLogin;

  const { form, handleOnChange } = postLoginForm;
  const { email, password } = form;

  return (
    <PaperStack title='GPS Dashboard'>
      <Stack component='form' rowGap={2} onSubmit={startPostLogin}>

        <TextField
          name='email'
          label='Email'
          size='small'
          variant='filled'
          type='email'
          disabled={!isFormEnabled}
          value={email}
          onChange={handleOnChange}
        />

        <TextField
          name='password'
          label='Password'
          size='small'
          variant='filled'
          type='text'
          disabled={!isFormEnabled}
          value={password}
          onChange={handleOnChange}
        />

        <Blue500Button 
          variant='contained' 
          disabled={!isSubmitEnabled}
          type='submit'
        >Iniciar Sesión</Blue500Button>

      </Stack>
    </PaperStack>
  )
}