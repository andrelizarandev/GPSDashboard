// Modules
import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';

const TransparentTableCell = styled(TableCell)(() => ({
  textTransform:'uppercase',
  whiteSpace:'nowrap',
  maxWidth:'50ch',
  overflow:'hidden',
  padding:8,
  paddingLeft:14
}));

export default TransparentTableCell;