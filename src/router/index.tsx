// Modules
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Components
import SnackbarContainer from '../containers/snackbar-container';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';

// Screens
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';
import DriversScreen from '../screens/drivers';

// Types
import { RouterData } from './types';

export default function Router () {
  return (
    <SnackbarContainer>
      <BrowserRouter>
        <Routes>
          {visibleRoutes.map(({ route, element }, key) => <Route path={route} element={element} key={key}/>)}
          {noVisibleRoutes.map(({ route, element }, key) => <Route path={route} element={element} key={key}/>)}
        </Routes>
      </BrowserRouter>
    </SnackbarContainer>
  )
}

export const visibleRoutes:RouterData[] = [
  { title:'Inicio', route:'/home', icon:<HomeIcon/>, element:<HomeScreen/> },
  { title:'Conductores', route:'/drivers', icon:<GroupIcon/>, element:<DriversScreen/> }
]

const noVisibleRoutes:RouterData[] = [
  { route:'/', element:<LoginScreen/> },
  { route:'*', element:<Navigate to='/'/> },
]
