// Colors
import { grey200 } from "../../../../utils/colors";

const LocationListStyle = {

  MainContainer: {
    height:'100%',
    background:grey200, 
    borderRadius:1,
  },

  MainPaddingContainer: {
    height:'100%',
    padding:2, 
    rowGap:2,
  },

  ListContainerParent: {
    height:'100%'
  },

  ListContainer: {
    rowGap:2,
    maxHeight:'330px',
    overflow:'auto',
  },

  LocationCardContainer: {

  },

  LocationCardPaddingContainer: {
    padding:1.4,
    paddingX:2
  }

}

export default LocationListStyle;