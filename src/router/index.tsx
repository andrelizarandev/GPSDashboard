// Modules
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

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
    <BrowserRouter>
      <Routes>
        {visibleRoutes.map(({ route, element }, key) => <Route path={route} element={element} key={key}/>)}
        {noVisibleRoutes.map(({ route, element }, key) => <Route path={route} element={element} key={key}/>)}
      </Routes>
    </BrowserRouter>
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
