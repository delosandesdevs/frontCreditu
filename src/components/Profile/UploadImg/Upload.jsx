import upload from '../../../assets/miscellaneous/upload_img.png'
import { Button } from '@mui/material'
import { Widget } from "@uploadcare/react-widget";
import './Upload.scss'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { postGallery } from '../../../redux/action';

const Upload = () => {

    const upload = useRef()
    const disptch = useDispatch()

    return <div className='upload' onClick={() => upload.current.openDialog()}>
        {/* <img src={upload} alt="" /> */}
        <Button variant="contained" color="success" style={{ height: "200px", color: "black" }}>
            <span className="material-symbols-outlined" style={{ fontSize: "80px" }}>cloud_upload</span>
            <div className='upload-care'>
                <Widget
                    ref={upload}
                    publicKey="0a810a0040defb4e6a5e"
                    Clearable={true}
                    id="file"
                    name="photos"
                    multiple
                    onChange={ image => {
                        console.log(image.cdnUrl)
                        //dispatch(postGallery(image.cdnUrl))
                    }}
                />
            </div>
        </Button>
    </div>
}

export default Upload;