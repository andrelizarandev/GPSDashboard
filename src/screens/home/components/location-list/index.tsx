// Modules
import { useContext } from 'react';
import { ValuesContext } from '../../contexts/values';
import { Alert, Paper, Stack, Typography } from '@mui/material';

// Style
import LocationListStyle from './style';

// types
import { LocationData } from '../../../../api/home/types';

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
    <Stack sx={LocationListStyle.ListContainerParent}>
      <Stack sx={LocationListStyle.ListContainer}>
        {!locationList.length && <Alert severity='warning'>No has seleccionado ningun usuario</Alert>}
        {locationList.map((data) => <LocationCard {...data}/>)}
      </Stack>
    </Stack>
  )
}
 
function LocationCard ({ latitude, longitude, timestamp }:LocationData) {
  return (
    <Paper sx={LocationListStyle.LocationCardContainer}>
      <Stack sx={LocationListStyle.LocationCardPaddingContainer}>
        <Typography variant='subtitle2'>Lat: {latitude}</Typography>
        <Typography variant='subtitle2'>Long: {longitude}</Typography>
        <Typography variant='caption'>{timestamp}</Typography>
      </Stack>
    </Paper>
  )
}