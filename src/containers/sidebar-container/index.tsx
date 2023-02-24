// Modules
import { ReactNode, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, MenuItem, Stack, Typography } from '@mui/material';

// Components
import SmallIconButton from '../../components/_icon-button/small-icon-button';

// Contexts
import { UiContext } from '../../contexts/ui-context';

// Data
import { visibleRoutes } from '../../router'

// Hooks
import useFunctions from './functions';
import useHandleMenu from '../../hooks/use-handle-menu';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Style
import { FlexStyle } from '../../styles/flex';
import useSidebarContainerStyle from './style';

// Types
import { RouterData } from '../../router/types';

type Props = {
  title:string;
  children:ReactNode;
}

export default function SidebarContainer ({ children, title }:Props) {
  const { MainContainer, MainPaddingContainer, InformationPaddingContainer, InformationContainer } = useSidebarContainerStyle();
  return (
    <>
      <TopBar title={title}/>
      <Stack sx={MainContainer}>
        <Stack sx={MainPaddingContainer}>
          <Sidebar/>
          <Stack sx={InformationContainer}>
            <Stack sx={InformationPaddingContainer}>
              {children}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

function TopBar ({ title }:any) {

  const { toggleShowSidebar } = useContext(UiContext);
  const { TopBarContainer, TopBarPaddingContainer } = useSidebarContainerStyle();
  const useHandleMenuPayload = useHandleMenu();

  return (
    <Stack sx={TopBarContainer}>
      <Stack sx={TopBarPaddingContainer}>

        <Stack sx={FlexStyle.HStackAlignCenter}>
          <SmallIconButton sx={{ color:'white' }} onClick={toggleShowSidebar}>
            <MenuIcon fontSize='small'/>
          </SmallIconButton>
          <Typography variant='subtitle2' textTransform='uppercase'>{title}</Typography>
        </Stack>

        <SmallIconButton onClick={useHandleMenuPayload.handleClick}>
          <AccountCircleIcon sx={{ color:'white' }}/>
        </SmallIconButton>
        <FloattingMenu {...useHandleMenuPayload}/>

      </Stack>
    </Stack>
  )
}

function FloattingMenu ({ handleClose, anchorEl, open }:any) {
  const { logOut } = useFunctions();
  const startLogOut = () => { handleClose(); logOut(); }
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={startLogOut}>Cerrar Sesión</MenuItem>
    </Menu>
  )
}

function Sidebar () {
  const { SidebarMainContainer, SidebarPaddingContainer } = useSidebarContainerStyle();
  return (
    <Stack sx={SidebarMainContainer}>
      <Stack sx={SidebarPaddingContainer}>
        {visibleRoutes.map((data, key) => <SidebarOption {...data} key={key}/>)}
      </Stack>
    </Stack>
  )
}

function SidebarOption ({ title, icon, route }:RouterData) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const redirectTo = () => navigate(route);
  const isSelected = route === pathname;
  const { SidebarOptionContainer, SidebarOptionPaddingContainer } = useSidebarContainerStyle();
  return (
    <Stack sx={SidebarOptionContainer(isSelected)} onClick={redirectTo}>
      <Stack sx={SidebarOptionPaddingContainer}>
        <Typography variant='subtitle2' textTransform='uppercase'>{title}</Typography>
        {icon}
      </Stack>
    </Stack>
  )
}

