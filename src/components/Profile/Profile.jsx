import Avatar from "../Avatar/Avatar";
import Position from "../Position/Position";
import './Profile.scss'
import {  useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import NavLinkCmp from "../Nav/NavLink/NavLinkCmp";
import { useEffect } from "react";

const Profile = () => {

    const userInfo = useSelector(state => state.loggedUser)

    useEffect(() => {
        console.log(userInfo);
    },[])

    return <div className="profile">
        <div className="profile-container mb-5">


            {
                userInfo.player
                &&
                <div className="profile-info ">
                    <Avatar pic={userInfo.player.avatar} displayName={userInfo.player.nickname ? userInfo.player.nickname : 'user'} />
                    <Position toBeUsed={userInfo} />
                    <NavLinkCmp path={'create-player'} title={'Edita tu player'} action={'edit'} />
                </div>
            }

            {
                (userInfo.createdUser.hasPlayer === false) &&
                <div  className="profile-container-notplayer">
                    <h3 className="profile-h3">Tu no tienes un player</h3>
                    <NavLink to={"/create-player/create"}>
                        <button className="profile-button">CREAR PLAYER</button>
                    </NavLink>
                </div>
            }

        </div>
    </div>
}

export default Profile;