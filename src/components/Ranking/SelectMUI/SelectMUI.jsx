import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from 'react';

export default function BasicSelect({statusSelected}) {
  const [age, setAge] = useState('');

//   statusSelected = (event) => {
//     setAge(event.target.value);
//   };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Status"
          onChange={(age) => statusSelected(age)}
        >
          <MenuItem value='oro'>Oro</MenuItem>
          <MenuItem value='plata'>Plata</MenuItem>
          <MenuItem value='bronce'>Bronce</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
