import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

const Pages = ({ pages, handlePages }) => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    handlePages(value - 1);
  };

  return (
    <Stack spacing={20}>
      <Pagination
        sx={{ button: { color: '#ffffff', borderColor: '#ffffff' } }}
        count={pages}
        variant="outlined"
        color="error"
        page={page}
        onChange={handleChange}
        shape="rounded"
      />
    </Stack>
  );
};

export default Pages;
