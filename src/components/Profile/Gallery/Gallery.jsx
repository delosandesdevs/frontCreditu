import './Gallery.scss'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { imagesListForDev } from '../../../assets/functions/varsForDevelopement';

const Gallery = ({ imagesList, avatarSelected }) => {

  if (!imagesList) imagesList = imagesListForDev;
  let id = 0;
  return <ImageList sx={{ width: 500, height: 250 }} cols={4} style={{width: '100%'}} >

    {imagesList.map((item) => (
      
      <ImageListItem key={item} >
        {id++}
        <button style={{backgroundImage:`url(${item})`,height:'100px', backgroundSize:'cover', backgroundPosition:"center"}} aria-label={`${id}_avatar`} name='avatar' onClick={e => avatarSelected(e)} value={id}></button>
      </ImageListItem>
    ))}
  </ImageList>
}

export default Gallery;