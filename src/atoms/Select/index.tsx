import type * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import type { GraphType } from '../../types';

interface Props {
    options: string[],
    onSelect: (event: SelectChangeEvent<string>) => void,
    selectedGraph: GraphType | string | undefined
}

const MSelect: React.FC<Props> = ({options, onSelect, selectedGraph}) => {
  return (
    <Box sx={{ minWidth: 120, marginBottom: 5 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Graph</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedGraph}
          label="Graph"
          onChange={onSelect}
        >
          {
            options.map((option, index) => (
               <MenuItem key={index} value={option}>{option}</MenuItem> 
            ))
          }
          
        </Select>
      </FormControl>
    </Box>
  );
}

export default MSelect;