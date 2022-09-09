import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import Position from '../Position/Position';
import './Profile.scss';
import NavLinkCmp from '../Nav/NavLink/NavLinkCmp';
import Title from '../Title/Title';
import Gallery from '../Gallery/Gallery';

const Profile = () => {
  const userInfo = useSelector((state) => state.loggedUser);

  useEffect(() => {}, []);

  return (
    <div className="profile">
      <Title text={'Perfil'} />
      <div className="profile-container mb-5">
        {userInfo.player && (
          <div className="profile-info ">
            <Avatar
              pic={userInfo.player.avatar}
              displayName={
                userInfo.player.nickname ? userInfo.player.nickname : 'user'
              }
            />
            <Position toBeUsed={userInfo} />
            <NavLinkCmp
              path="create-player"
              title="Edita tu player"
              action="edit"
            />
          </div>
        )}

        {userInfo.createdUser.hasPlayer === false && (
          <div className="profile-container-notplayer">
            <h3 className="profile-h3">Tu no tienes un player</h3>
            <NavLink to="/create-player/create">
              <button className="profile-button">CREAR PLAYER</button>
            </NavLink>
          </div>
        )}
      </div>

      <h2 id='profile-thanks'>Gracias</h2>
      <p id='profile-thanks-p'>Gracias a tus contribuciones, hemos podido plantar <strong>4</strong> árboles en zonas necesitadas de la provincia. Continúa así para subir de ranking y participar por grandes premios...¡Aunque ya estamos ganando todos?</p>
      <div className="profile-gallery">
        <Gallery />
      </div>
    </div>
  );
};

export default Profile;
