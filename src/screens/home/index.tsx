// Components
import MapContainer from './components/map-container';
import SidebarContainer from '../../containers/sidebar-container';

// Contexts
import HomeContextContainer from './contexts';

// Hooks
import useOnCreate from './functions/onCreate';

export default function MainContainer () {
  return (
    <HomeContextContainer>
      <HomeScreen/>
    </HomeContextContainer>
  )
}

function HomeScreen () {
  const { isLoadingGet } = useOnCreate();
  return (
    <SidebarContainer title='Inicio'>
      <MapContainer/>
    </SidebarContainer>
  )
}
