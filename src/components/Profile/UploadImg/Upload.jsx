import upload from '../../../assets/miscellaneous/upload_img.png'
import { Button } from '@mui/material'
import './Upload.scss'

const Upload = () => {
    return <div className='upload'>
        {/* <img src={upload} alt="" /> */}
        <Button variant="contained" color="success" style={{height:"200px",color:"black"}}>
            <span className="material-symbols-outlined" style={{fontSize:"80px"}}>cloud_upload</span>
        </Button>
    </div>
}

export default Upload;