// Modules
import { useContext } from 'react';
import { Stack, Table, TableBody, TableContainer, TableRow } from '@mui/material';

// Components
import HeaderRow from '../../../../components/_shared/header-row';
import PaperStack from '../../../../components/_shared/paper-stack';
import Yellow500Button from '../../../../components/_buttons/yellow500-button';
import SmallIconButton from '../../../../components/_icon-button/small-icon-button';
import TransparentTableCell from '../../../../components/_table-cell/transparent-table-cell';

// Contexts
import { ValuesContext } from '../../contexts/values';
import { DialogContext } from '../../../../contexts/dialog-context';

// Hooks
import useFunctions from '../../functions';

// Icons
import AddIcon from '@mui/icons-material/Add';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

// Types
import { GetUserData } from '../../../../api/home/types';

type Props = {
  isLoading:boolean;
}

export default function DriversTable ({ isLoading }:Props) {
  const { userList } = useContext(ValuesContext);
  return (
    <PaperStack title='Conductores Guardados' isLoading={isLoading} actionButtons={<ActionButton/>}>
      <TableContainer>
        <Table>
          <HeaderRow columns={columns}/>
          <TableBody>
            {userList.map((data, key) => <DriverRow {...data} key={key}/>)}
          </TableBody>
        </Table>
      </TableContainer>
    </PaperStack>
  )
}

function ActionButton () {
  const { setWhichDialogIsOpen } = useContext(DialogContext);
  return (
    <Stack>
      <Yellow500Button 
        variant='contained'
        startIcon={<AddIcon/>}
        onClick={() => setWhichDialogIsOpen('submit-driver')}
      >Agregar Conductor</Yellow500Button>
    </Stack>
  )
}

function DriverRow ({ password, username, fullname, _id, status }:GetUserData) {
  return (
    <TableRow>
      <TransparentTableCell>{username}</TransparentTableCell>
      <TransparentTableCell>{fullname}</TransparentTableCell>
      <TransparentTableCell>{password}</TransparentTableCell>
      <TransparentTableCell>{status ? 'ALTA' : 'BAJA'}</TransparentTableCell>
      <DeleteButton _id={_id}/>
    </TableRow>
  )
}

function DeleteButton ({ _id }:any) {
  const { selectDriverToToggleStatus } = useFunctions();
  return (
    <TransparentTableCell>
      <SmallIconButton onClick={() => selectDriverToToggleStatus(_id) }>
        <ExpandCircleDownIcon fontSize='small'/>
      </SmallIconButton>
    </TransparentTableCell>
  )
}

const columns = ['Usuario', 'Nombre', 'Contraseña', 'Estado', 'Dar de Baja']