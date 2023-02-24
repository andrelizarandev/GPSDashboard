// Components
import DriversContextContainer from './contexts';
import DriversTable from './components/driver-table';
import SidebarContainer from '../../containers/sidebar-container';

// Dialogs
import SubmitDriverDialog from './dialogs/submit-driver-dialog';

// Hooks
import useOnCreate from './functions/onCreate';

export default function MainContainer () {
  return (
    <DriversContextContainer>
      <DriversScreen/>
    </DriversContextContainer>
  )
}

function DriversScreen () {
  const { isLoadingGet } = useOnCreate();
  return (
    <SidebarContainer title='Conductores'>
      <DriversTable isLoading={isLoadingGet}/>
      <SubmitDriverDialog/>
    </SidebarContainer>
  )
}