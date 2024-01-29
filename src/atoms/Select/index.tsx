import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';

interface Props {
    options: string[]
}

const MSelect: React.FC<Props> = ({options}) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, marginBottom: 5 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Graph</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Graph"
          onChange={handleChange}
        >
          {
            options.map((option, index) => (
               <MenuItem key={index} value={10}>{option}</MenuItem> 
            ))
          }
          
        </Select>
      </FormControl>
    </Box>
  );
}

export default MSelect;