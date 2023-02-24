// Modules
import { 
  Select, 
  Checkbox, 
  ListItemText, 
  FormControl,
  InputLabel, 
  MenuItem 
} from '@mui/material';

// Colors
import { blue500 } from '../../../utils/colors';

// Types
import { OptionData } from '../simple-selector/types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

type Props = {
  options:OptionData[];
  value:number[];
  label:string;
  name:string;
  disabled?:boolean;
  onChange:(e:any) => void;
}

export default function MultipleSelect (props:Props) {
  
  const { label, name, onChange, options, value, disabled } = props;

  function getNameValues (values:number[]) {
    const labelValues = values.map((id) => {
      const findedOption = options.find((option) => (option.id === id));
      return findedOption?.label;
    });
    return labelValues.join(', ');
  }

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        onChange={onChange}
        multiple
        name={name}
        value={value}
        renderValue={getNameValues}
        MenuProps={MenuProps}
        disabled={disabled}
        variant='filled'
        fullWidth
        size='small'
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            <Checkbox checked={value.indexOf(option.id) > -1} sx={checkStyle} color='success'/>
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

const checkStyle = {
  '&.Mui-checked': {
    color: blue500,
  },
}