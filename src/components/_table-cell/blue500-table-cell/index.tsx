// Modules
import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';

// Colors
import { blue500 } from '../../../utils/colors';

const Blue500TableCell = styled(TableCell)(() => ({
  textTransform:'uppercase',
  whiteSpace:'nowrap',
  background:blue500,
  color:'white',
}));

export default Blue500TableCell;