import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePlayer, getSinglePlayer, postPlayer } from '../../redux/action';
import { avatarList } from '../../functions/varsForDevelopment';
import { objHasNull } from '../../functions/validateForm';
import defaultAvatar from '../../assets/avatars/default.png';
import Avatar from '../Avatar/Avatar';
import Gallery from '../Profile/Gallery/Gallery';
import party from "party-js";
import 'animate.css';
import './CreatePlayer.scss';

const CreatePlayer = () => {
  const { action } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const singleValue = queryParams.get('id');

  const userLogged = useSelector((store) => store.loggedUser);
  const userToEdit = useSelector((store) => store.player);
  const [updated, setUpdated] = useState(false);
  const [created, setCreated] = useState(false);
  const [error, setError] = useState(true);
  const [player, setPlayer] = useState({
    nickname: '',
    avatar: '',
    score: '0',
    user_id:
      userLogged.createdUser && userLogged.createdUser.id
        ? userLogged.createdUser.id
        : null
  });

  useEffect(() => {
    if (updated || created) navigate('/');
    // eslint-disable-next-line 
  }, [updated, created]);

  useEffect(() => {
    if (singleValue) {
      dispatch(getSinglePlayer(singleValue));
    }
    // eslint-disable-next-line 
  }, []);

  useEffect(() => {
    if (singleValue) {
      setPlayer({
        nickname:
          userToEdit && userToEdit.players && userToEdit.players[0].nickname,
        avatar:
          userToEdit && userToEdit.players && userToEdit.players[0].avatar,
        score: userToEdit && userToEdit.players && userToEdit.players[0].score,
        id: userToEdit && userToEdit.players && userToEdit.players[0].id,
        user_id: userLogged.createdUser.id
      });
    }
    // eslint-disable-next-line 
  }, [userToEdit]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // eslint-disable-next-line 
  }, []);

  useEffect(() => {
    if (userLogged.player && userLogged.player.nickname)
      setPlayer({
        nickname: userLogged.player.nickname,
        avatar: userLogged.player.avatar,
        score: userLogged.player.score,
        id: userLogged.player.id,
        user_id: userLogged.createdUser.id
      });
  }, [userLogged]);

  const handlePlayer = (e) => {
    const target =
      e.target.name === 'avatar'
        ? `/images/avatar-${e.target.value < 10 ? '0' : ''}${
            e.target.value
          }.png`
        : e.target.value;
    setPlayer({
      ...player,
      [e.target.name]: target
    });
    setError(
      objHasNull({
        ...player,
        [e.target.name]: target
      })
    );
  };

  const createPlayer = (e) => {
    if (action === 'edit') {
      dispatch(updatePlayer(player, setUpdated));
    } else {
      dispatch(postPlayer(player, setCreated));
    }
    party.confetti(e.target, {
      count: party.variation.range(20, 40),
    });
  };

  return (
    <div className="create-player">
      <div className="banner-title">
        <h1>
          Usa la imaginación y {action === 'edit' ? 'edita' : 'crea'} tu Player
        </h1>
      </div>
        
        {action !== 'edit' 
        ? <p className="mb-5" id="ranking-text">Aquí comenzarás tu aventura en Free Forest! Crea tu Player para poder comenzar a cambiar el mundo donde vives. Luego de crearlo podrás cambiar Avatar y/o Nickname.</p>
        : <p className="mb-5" id="ranking-text">Puedes editar tu Player. Si vas a cambiar el nickname, corrobora que ya no exista otro player que ya lo tenga.</p>
      }
          
          

      <div className="cmp-create-player">
        <div className="cmp-create-player-avatar">
          <div className="cmp-create-player-avatar-background">
            {player.avatar === '' ? (
              <img src={defaultAvatar} alt="default_avatar_img" className='floating' />
            ) : (
              <div className="avatar-movement" id="avatar-movement">
                <Avatar pic={player.avatar} displayName="" score={player.score} />
              </div>
            )}
            <span>{player.nickname}</span>
          </div>
        </div>

        <div className="cmp-create-player-form">
          <div className="create-player-form-field">
            <label className="cmp-create-player-label" htmlFor="name">
              Nickname
            </label>
            <input
              className="input-nickname"
              type="text"
              placeholder="Ingresa el nickname de tu player"
              onChange={handlePlayer}
              name="nickname"
              id="name"
              maxLength={16}
              value={player.nickname}
              autoComplete="off"
            />
          </div>

          {userLogged &&
          userLogged.createdUser &&
          userLogged.createdUser.role === 'admin' ? (
            <div className="create-player-form-field">
              <label className="cmp-create-player-label" htmlFor="name">
                Score
              </label>
              <input
                className="input-nickname"
                type="number"
                min="0"
                placeholder="Ingresar score del player"
                onChange={handlePlayer}
                name="score"
                value={player.score}
                id="name"
                autoComplete="off"
              />
            </div>
          ) : null}

          <div className="create-player-form-field">
            <label className="cmp-create-player-label" htmlFor="status">
              Selecciona tu avatar
            </label>
            <Gallery
              imagesList={avatarList}
              avatarSelected={(e) => handlePlayer(e)}
            />
          </div>

          <button
            className="create-player-submit"
            disabled={error ? 'disabled' : ''}
            onClick={createPlayer}
          >
            {action === 'edit' ? 'EDITAR' : 'CREAR'} PLAYER
          </button>
          {error && (
            <p
              className="error-message"
              style={{ color: 'white', fontWeight: 'bold', marginTop: '10px' }}
            >
              {action === 'edit'
                ? 'Al menos un campo debe ser editado, evita usar simbolos'
                : 'Todos los campos deben ser llenados, evita usar simbolos'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePlayer;
