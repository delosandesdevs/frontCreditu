import upload from '../../../assets/miscellaneous/upload_img.png'
import './Upload.scss'

const Upload = () => {
    return <div className='upload'>
        <img src={upload} alt="" />
        <button>Upload</button>
    </div>
}

export default Upload;