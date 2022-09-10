import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import pic1 from '../../assets/miscellaneous/planting/2.jpg'
import pic2 from '../../assets/miscellaneous/planting/3.jpg'
import pic3 from '../../assets/miscellaneous/planting/2.png'
import pic4 from '../../assets/miscellaneous/planting/1.jpg'
import pic5 from '../../assets/miscellaneous/planting/4.jpg'
import pic6 from '../../assets/miscellaneous/planting/5.jpg'

let list = [
    pic1, pic2, pic3, pic4, pic5, pic6
]

const Gallery = ({imgList}) => {
    return <ImageList sx={{ width: 500, height: 450 }} cols={2}  gap={20} id='grid-gallery'>
      {list.map((item) => (
        <ImageListItem key={item}>
          <img
            src={item}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
} 

export default Gallery;