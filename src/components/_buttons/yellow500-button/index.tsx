// Modules
import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

// Colors
import { 
  yellow500, 
  grey300, 
  grey400 
} from '../../../utils/colors';

const Yellow500Button = styled(Button)<ButtonProps>(({
  
  fontSize:'12px',
  paddingRight:18,
  paddingLeft:18,

  '&.MuiButton-contained': {
    color:'white',
    background: yellow500,
    '&:disabled': {
      color:grey400,
      backgroundColor: grey300,
    }
  },

  '&.MuiButton-text': {
    color:yellow500,
    '&:disabled': {
      color:grey400
    }
  },

}));

export default Yellow500Button;