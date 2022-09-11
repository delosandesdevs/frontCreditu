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

const Profile = () => {
  const userInfo = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch()
  const [player , setPlayer] = useState({
    playerId: userInfo.player.id,
    user_id: userInfo.createdUser.id 
  })

  const handleDeletePlayer = () => {
    Swal.fire({
      title: '¿Desea borrar su player?',
      text: 'Realizando esto, su player se borrará por completo, teniendo que comenzar desde cero creando un player nuevo.',
      showCancelButton: true,
      icon:'warning',
      confirmButtonText: 'BORRAR'      
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('BORRANDO PLAYER')
        dispatch(deletePlayer(player))
        dispatch(findOrCreateUser(userInfo.createdUser.name, userInfo.createdUser.email))
        Swal.fire('Borrado con éxito', '', 'success')
      }
    })
  }

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

            <div className="delete-player-container">
            <NavLinkCmp
              path="create-player"
              title="Edita tu player"
              action="edit"
            />
              <div className='container-nav-button' onClick={handleDeletePlayer}>
                <div data-cy="delete" className='nav-button' id='delete-player-btn'>
                  BORRAR PLAYER
                </div>
              </div>
            </div>

          </div>
        )}

        {userInfo.player === false && (
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
