/* eslint-disable react/button-has-type */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import './Gallery.scss';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { imagesListForDev } from '../../../functions/varsForDevelopment';

const Gallery = ({ imagesList, avatarSelected }) => {
  if (!imagesList) imagesList = imagesListForDev;
  let id = 0;

  return (
    <ImageList
      sx={{
        width: 500,
        height: 250,
        '&::-webkit-scrollbar': { width: 10 },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#09090957',
          borderRadius: 2
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#C65F72',
          borderRadius: 2
        }
      }}
      cols={4}
      style={{ width: '100%' }}
    >
      {imagesList.map((item) => (
        <ImageListItem key={item}>
          {id++}
          <button
            className={`avatar${id}`}
            style={{
              backgroundImage: `url(${item})`,
              height: '150px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: 'none',
              backgroundColor: 'transparent'
            }}
            aria-label={`${id}_avatar`}
            name="avatar"
            onClick={(e) => avatarSelected(e)}
            value={id}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Gallery;
