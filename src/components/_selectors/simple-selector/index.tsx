// Modules
import { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// Types
import { OptionData } from './types';

type Props = {
  label:string;
  name:string;
  value?:number;
  onChange?:(e:any) => void;
  disabled?:boolean;
  options?:OptionData[];
}

const firstOption = { label:'-', id:'0' }

export default function SimpleSelector (props:Props) {

  const { value = '0', onChange = () => {}, label, name, disabled = false, options = [] } = props;
  const [ savedOptions, setSavedOptions ] = useState<OptionData[]>([firstOption]);

  useEffect(() => {
    setSavedOptions([ firstOption, ...options ]);
  }, [options]);

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        onChange={onChange}
        name={name}
        value={value}
        label={label}
        disabled={disabled}
        variant='filled'
        fullWidth 
        size='small'
      >
        {savedOptions.map(({ id, label }, key) => <MenuItem value={id} key={key}>{label}</MenuItem>)}
      </Select>
    </FormControl>
  )
}