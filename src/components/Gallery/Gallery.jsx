import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import pic1 from '../../assets/miscellaneous/planting/2.jpg';
import pic2 from '../../assets/miscellaneous/planting/3.jpg';
import pic3 from '../../assets/miscellaneous/planting/2.png';
import pic4 from '../../assets/miscellaneous/planting/1.jpg';
import pic5 from '../../assets/miscellaneous/planting/4.jpg';
import pic6 from '../../assets/miscellaneous/planting/5.jpg';

const list = [pic1, pic2, pic3, pic4, pic5, pic6];

const Gallery = () => {
  return (
    <ImageList
      sx={{
        width: 500, height: 450, '&::-webkit-scrollbar': { width: 10 },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#09090957',
          borderRadius: 2
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#C65F72',
          borderRadius: 2
        }
      }}
      cols={2}
      gap={20}
      id="grid-gallery"

    >
      {list.map((item) => (
        <ImageListItem key={item}>
          <img src={item} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Gallery;