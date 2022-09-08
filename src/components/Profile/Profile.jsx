import Avatar from "../Avatar/Avatar";
import Position from "../Position/Position";
import './Profile.scss'
import {  useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";

const Profile = () => {

    const userInfo = useSelector(state => state.loggedUser)

    return <div className="profile">
        <div className="profile-container mb-5">


            {
                userInfo.player
                &&
                <div className="profile-info ">
                    <Avatar pic={userInfo.player.avatar} displayName={userInfo.player.nickname ? userInfo.player.nickname : 'user'} />
                    <Position toBeUsed={userInfo} />
                </div>
            }

            {
                (userInfo.createdUser.hasPlayer === false) &&
                <div  className="profile-container-notplayer">
                    <h3 className="profile-h3">Tu no tienes un player</h3>
                    <NavLink to={"/create-player"}>
                        <button className="profile-button">CREAR PLAYER</button>
                    </NavLink>
                </div>
            }

        </div>
    </div>
}

export default Profile;