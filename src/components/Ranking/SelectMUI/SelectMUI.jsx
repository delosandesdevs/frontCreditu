/* eslint-disable no-shadow */
/* eslint-disable react/function-component-definition */
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ statusSelected }) {
  return (
    <Box
      sx={{
        minWidth: 120,
        marginLeft: 2,
        backgroundColor: 'white',
        borderRadius: '10px',
        color: 'black',
        boxShadow: 'none'
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Status"
          onChange={(e) => statusSelected(e.target.value)}
        >
          <MenuItem value="todos">Todos</MenuItem>
          <MenuItem value="oro">Oro</MenuItem>
          <MenuItem value="plata">Plata</MenuItem>
          <MenuItem value="bronce">Bronce</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
