// Modules
import { TableRow, TableHead } from '@mui/material';

// Components
import Blue500TableCell from '../../_table-cell/blue500-table-cell';

type Props = {
  columns:string[];
}

export default function HeaderRow (props:Props) {
  const { columns } = props;
  return (
    <TableHead>
      <TableRow>
        {columns.map((title, key) => <Blue500TableCell size='small' key={key}>{title}</Blue500TableCell>)} 
      </TableRow>
    </TableHead>
  )
}
