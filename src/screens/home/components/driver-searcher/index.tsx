// Modules
import { useContext } from "react";
import { Stack, TextField, Typography } from "@mui/material";

// Components
import Blue500Button from "../../../../components/_buttons/blue500-button";
import SimpleSelector from "../../../../components/_selectors/simple-selector";

// Contexts
import { FormContext } from "../../contexts/form";
import { ValuesContext } from "../../contexts/values";

// Hooks
import useGet from "../../functions/get";

// Style
import DriverSearcherStyle from "./style";

export default function DriverSearcher () {
  const { startMutatePostGetGPSLocationsByDate, isLoading } = useGet();
  const { isLoadingPostGetGPSLocationsByDate } = isLoading;
  return (
    <Stack sx={DriverSearcherStyle.MainContainer}>
      <Stack 
        sx={DriverSearcherStyle.MainPaddingContainer} 
        component='form' 
        onSubmit={startMutatePostGetGPSLocationsByDate}
      >
        <Form isLoading={isLoadingPostGetGPSLocationsByDate}/>
      </Stack>
    </Stack>
  )
}

function Form ({ isLoading }:any) {
  const { userList } = useContext(ValuesContext);
  const { postGetUserLocationsForm } = useContext(FormContext);
  const { form, handleOnChange } = postGetUserLocationsForm;
  const { user, date } = form;
  const isSubmitEnabled = !isLoading && user && date;
  const isFormEnabled = !isLoading;
  return (
    <>
      <Typography variant='subtitle2' textTransform='uppercase'>Obtener Localizaciones</Typography>
      <SimpleSelector 
        name='user' 
        label='Buscar Conductor' 
        options={userList}
        onChange={handleOnChange}
        value={user}
        disabled={!isFormEnabled}
      />
      <TextField 
        name='date' 
        label='Seleccionar Día' 
        type='date'
        InputLabelProps={{ shrink:true }}
        variant='filled'
        size="small"
        onChange={handleOnChange}
        value={date}
        disabled={!isFormEnabled}
      />
      <Blue500Button variant='contained' disabled={!isSubmitEnabled}>Buscar Localizaciones</Blue500Button>
    </>
  )
}