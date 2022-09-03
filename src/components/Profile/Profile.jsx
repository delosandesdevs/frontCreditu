import Admin from "../Admin/Admin";
import Avatar from "../Avatar/Avatar";
import Position from "../Position/Position";
import Gallery from "./Gallery/Gallery";
import './Profile.scss'
import Upload from "./UploadImg/Upload";

const Profile = () => {
    return <div className="profile">
        <div className="profile-container mb-5">
            
            <div className="profile-info ">
                <Avatar pic={1} displayName={'Juano'} />
                <Position toBeUsed={'profile'} />
            </div>
        </div>        
        {/* <Admin /> */}
           <div className="gallery-title">
            <h3 className="gallery-h3">Subí fotografías de tus FreeTrees!</h3>
        </div>

        <div className="gallery-section pb-5">
            <Upload />
            <Gallery />
        </div>
    </div>
}

export default Profile;