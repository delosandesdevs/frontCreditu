import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { findOrCreateUser, updatePlayer } from "../../redux/action";
import { avatarList } from "../../functions/varsForDevelopment";
import { objHasNull } from "../../functions/validateForm";
import { fetchPlayer } from "../../functions/fetchPlayer";
import defaultAvatar from '../../assets/avatars/default.png'
import Avatar from "../Avatar/Avatar";
import Gallery from "../Profile/Gallery/Gallery";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import 'animate.css';
import './CreatePlayer.scss';

const CreatePlayer = () => {

    const { action } = useParams()
    const { user } = useAuth0();

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLogged = useSelector(store => store.loggedUser)
    const [created, setCreated] = useState(false)
    const [error, setError] = useState({
        msg: '',
        error: true
    })
    const [player, setPlayer] = useState({
        nickname: '',
        avatar: '',
        score: '0',
        user_id: userLogged.createdUser.id
    })

    const handlePlayer = (e) => {
        const target = e.target.name === 'avatar' ? `/images/avatar-${e.target.value < 10 ? '0' : ''}` + e.target.value + '.png' : e.target.value;
        setPlayer({
            ...player,
            [e.target.name]: target
        })
        setError(objHasNull({
            ...player,
            [e.target.name]: target
        }))
    }

    const createPlayer = async () => {
        if (action === 'edit') {
            await dispatch(updatePlayer(player))
            Swal.fire({
                title: `¡Has editado tu Player con éxito!`,
                icon: 'success',
                confirmButtonText: 'Continuar'
            }).then((result) => {
                if (result.isConfirmed) navigate('/')
            })
            return
        }
        else {
            fetchPlayer(player, setCreated)
        }
    }

    const afterCreate = () => {
        if(created) navigate('/')
    }

    useEffect(() => {
        if (action !== 'edit' && created) afterCreate()
    }, [created])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    useEffect(() => {
        if (userLogged.player.nickname)
            setPlayer({
                nickname: userLogged.player.nickname,
                avatar: userLogged.player.avatar,
                score: userLogged.player.score,
                id: userLogged.player.id,
                user_id: userLogged.createdUser.id
            })

    }, [userLogged])

    return (
        <div className="create-player">
            <div className="banner-title">
                <h1>Usa la imaginación y {action === 'edit' ? 'edita' : 'crea'} tu Player</h1>
            </div>

            {error && error.msg}
            <div className="cmp-create-player">
                <div className="cmp-create-player-avatar">
                    <div className="cmp-create-player-avatar-background">
                        {player.avatar === '' ?
                            <img src={defaultAvatar} alt="default_avatar_img" />
                            :
                            <div className="avatar-movement" id='avatar-movement'>
                                <Avatar pic={player.avatar} displayName={''} />
                            </div>
                        }
                        <span>{player.nickname}</span>
                    </div>
                </div>

                <div className="cmp-create-player-form">

                    <div className="create-player-form-field">
                        <label className="cmp-create-player-label" htmlFor="name">Nickname</label>
                        <input className="input-nickname" type="text" placeholder="Ingresa el nickname de tu player" onChange={handlePlayer} name="nickname" id="name" maxLength={16} value={player.nickname} autoComplete="off" />
                    </div>

                    <div className="create-player-form-field">
                        <label className="cmp-create-player-label" htmlFor="status">Selecciona tu avatar</label>
                        <Gallery imagesList={avatarList} avatarSelected={(e) => handlePlayer(e)} />
                    </div>

                    <button className="create-player-submit" disabled={error ? 'disabled' : ''} onClick={createPlayer}>
                        {action === 'edit' ? 'EDITAR' : 'CREAR'} PLAYER
                    </button>
                    {error && <p className="error-message" style={{ color: "white", fontWeight: "bold", marginTop: "10px" }}>
                        {
                            action === 'edit' ?
                                'Al menos un campo debe ser editado, evita usar simbolos'
                                :
                                'Todos los campos deben ser llenados, evita usar simbolos'
                        }
                    </p>}
                </div>
            </div>
        </div>
    )
}

export default CreatePlayer