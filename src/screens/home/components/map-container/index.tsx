// Modules
import { Grid, Paper, Stack } from '@mui/material';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// Components
import LocationList from '../location-list';
import DriverSearcher from '../driver-searcher';
import GridXS12MD8 from '../../../../components/_grid/grid-xs12-md8';
import GridXS12MD4 from '../../../../components/_grid/grid-xs12-md4';

// Style
import MapContainerStyle from './style';

export default function MapContainer () {

  const { isLoaded } = useJsApiLoader ({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_MAP_KEY as string
  })

  return (
    <Paper sx={MapContainerStyle.MapContainer}>
      <Stack sx={MapContainerStyle.MapPaddingContainer}>
        <Grid container spacing={2} sx={{ height:'100%' }}>
          <InformationColumn/>
          <Map/>
        </Grid>
      </Stack>
    </Paper>
  )
}

function InformationColumn () {
  return (
    <GridXS12MD4>
      <Stack rowGap={2} sx={{ height:'100%' }}>
        <DriverSearcher/>
        <LocationList/>
      </Stack>
    </GridXS12MD4>
  )
}

function Map () {
  return (
    <GridXS12MD8>
      <GoogleMap
        mapContainerStyle={MapContainerStyle.Map}
        center={center}
        zoom={10}
      />
    </GridXS12MD8>
  )
}

const center = {
  lat: -3.745,
  lng: -38.523
};