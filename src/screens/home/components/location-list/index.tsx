// Modules
import { useContext } from 'react';
import { ValuesContext } from '../../contexts/values';
import { Alert, Stack, Typography } from '@mui/material';

// Style
import LocationListStyle from './style';

export default function LocationList () {
  return (
    <Stack sx={LocationListStyle.MainContainer}>
      <Stack sx={LocationListStyle.MainPaddingContainer}>
        <Typography variant='subtitle2' textTransform='uppercase'>Listado de Localizaciones</Typography>   
        <List/>
      </Stack>
    </Stack>
  )
}

function List () {
  const { locationList } = useContext(ValuesContext);
  return (
    <Stack rowGap={2}>
      {
        !locationList.length 
        && 
        <Alert severity='warning'>No has seleccionado ningun usuario</Alert>}
    </Stack>
  )
}