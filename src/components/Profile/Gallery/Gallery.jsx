import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import './Gallery.scss'

const Gallery = () => {
    return <div className='gallery'>
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >

        <Paper elevation={13} square />
        <Paper elevation={13} square />
        <Paper elevation={13} square />
        <Paper elevation={13} square />
        <Paper elevation={13} square />
        <Paper elevation={13} square />
        <Paper elevation={13} square />
        <Paper elevation={13} square />
        <Paper elevation={13} square />
        <Paper elevation={13} square />        
    </Box>
        {/* <Button variant="contained">Hello World</Button> */}
    </div>
}

export default Gallery;