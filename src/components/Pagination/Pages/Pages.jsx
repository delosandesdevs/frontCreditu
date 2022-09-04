import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

const Pages = ({pages, handlePages}) => {

  const [page, setPage] = useState(0);
  const handleChange = (event, value) => {
    setPage(value);
    handlePages(value-1)
  };

  return (
    <Stack spacing={2} >
      <Pagination count={pages} variant="outlined" color="secondary" page={page} onChange={handleChange} />
    </Stack>
  );
}

export default Pages;