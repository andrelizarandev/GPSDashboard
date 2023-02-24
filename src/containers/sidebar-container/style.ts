// Modules
import { useContext } from 'react';

// Colors
import { blue500, grey300, grey200 } from '../../utils/colors';

// Contexts
import { UiContext } from '../../contexts/ui-context';

// Style
import { FlexStyle } from '../../styles/flex';

export default function useSidebarContainerStyle () {

  const { showSidebar } = useContext(UiContext);

  const MainContainer = {
    height:'100vh',
    width:'100%',
    background:grey200
  }

  const MainPaddingContainer = {
    paddingTop:20
  }

  const TopBarContainer = {
    width:'100%',
    backgroundColor:blue500,
    position:'fixed',
    top:0,
    height:'7vh',
    justifyContent:'center'
  }

  const TopBarPaddingContainer = {
    paddingLeft:2,
    paddingRight:2,
    color:'white',
    ...FlexStyle.HStackJustifyBetweenAlignCenter
  }

  const InformationContainer = {
    height:'93vh',
    width:'100%',
    position:'fixed',
    right:0,
    bottom:0
  }

  const InformationPaddingContainer = {
    height:'100%',
    rowGap:2,
    padding:2,
    paddingLeft: showSidebar ? 40 : 2
  }

  const SidebarMainContainer = {
    display: showSidebar ? 'flex' : 'none',
    height:'93vh',
    position:'fixed',
    bottom:0,
    left:0,
    width:'300px',
    background:grey300,
    color:'white',
    zIndex:10
  }

  const SidebarPaddingContainer = {
    padding:2,
    rowGap:2
  }

  function SidebarOptionContainer (isSelected:boolean) {
    return {
      cursor:'pointer',
      border:`2px solid ${blue500}`,
      borderRadius:1,
      color:isSelected ? 'white' : blue500,
      background: isSelected ? blue500 : ''
    }
  }

  const SidebarOptionPaddingContainer = {
    padding:1.4,
    ...FlexStyle.HStackJustifyBetweenAlignCenter, 
  }

  return {
    MainContainer,
    MainPaddingContainer,
    TopBarContainer,
    TopBarPaddingContainer,
    InformationContainer,
    InformationPaddingContainer,
    SidebarMainContainer,
    SidebarPaddingContainer,
    SidebarOptionContainer,
    SidebarOptionPaddingContainer
  }

}
