import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import Position from '../Position/Position';
import './Profile.scss';
import NavLinkCmp from '../Nav/NavLink/NavLinkCmp';
import Title from '../Title/Title';
import Gallery from '../Gallery/Gallery';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { deletePlayer, findOrCreateUser } from '../../redux/action';
import defaultAvatar from '../../assets/avatars/default.png';

const Profile = () => {
  const userInfo = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();

  const [player] = useState({
    playerId: userInfo.player.id,
    user_id: userInfo.createdUser.id
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  const handleDeletePlayer = () => {
    Swal.fire({
      title: '¿Desea borrar su player?',
      text: 'Realizando esto, su player se borrará por completo, teniendo que comenzar desde cero creando un player nuevo.',
      showCancelButton: true,
      icon: 'warning',
      confirmButtonText: 'BORRAR',
      confirmButtonColor: '#fe9c84',
      background:
        'linear-gradient(0deg, #c65f72 0%, #2a855a 50%, #0f5156 100%)',
      color: 'white'
    })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(deletePlayer(player));
          dispatch(
            findOrCreateUser(
              userInfo.createdUser.name,
              userInfo.createdUser.email
            )
          );
          Swal.fire({
            title:'Se ha borrado tu player',
            icon:'success',
            confirmButtonText:'Continuar',
            confirmButtonColor: '#fe9c84',
            background:
            'linear-gradient(0deg, #c65f72 0%, #2a855a 50%, #0f5156 100%)',
          color: 'white'
          });
        }
      })
      .then(() =>
        dispatch(
          findOrCreateUser(
            userInfo.createdUser.name,
            userInfo.createdUser.email
          )
        )
      );
  };

  return (
    <div className="profile">
      <Title text={'Perfil'} />
      <div className="user-info">
        <span>
          Usuario: <strong>{userInfo.createdUser.name}</strong>
        </span>
        <span>
          Email: <strong>{userInfo.createdUser.email}</strong>
        </span>
      </div>
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

            <div className="delete-player-container">
              <NavLinkCmp
                path="create-player"
                title="Edita tu player"
                action="edit"
              />
              <div
                className="container-nav-button"
                onClick={handleDeletePlayer}
              >
                <div className="nav-button centered-line" id="delete-player-btn">
                  BORRAR PLAYER
                  <span className="material-symbols-outlined">delete</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {userInfo.player === false && (
          <div className="profile-container-notplayer">
            <NavLink to="/create-player/create">
              <div className="animate__animated animate__flip">
                <img src={defaultAvatar} alt="" id='profile-default-img' />
              </div>
            </NavLink>
            <h3 className="profile-h3">Aún no tienes un player</h3>
            <NavLink to="/create-player/create">
              <button className="profile-button">CREAR PLAYER</button>
            </NavLink>
          </div>
        )}
      </div>

      <h2 id="profile-thanks" style={{fontWeight:"100"}}>¡Gracias!</h2>
      <p id="profile-thanks-p">
        Gracias a tu participación en Free Forest, hemos podido continuar con nuestra {' '}
        misión de plantar árboles en zonas afectadas por los incendios. Sigue así para ganar más puntos 
        subir de ranking...¡Aunque ya estamos ganando todos!
      </p>
      <div className="profile-gallery">
        <Gallery />
      </div>
    </div>
  );
};

export default Profile;
