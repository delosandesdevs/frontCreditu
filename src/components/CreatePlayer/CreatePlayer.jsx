import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import './CreatePlayer.scss'
import defaultAvatar from '../../assets/avatars/default.png'
import 'animate.css';
import Avatar from "../Avatar/Avatar";
import { objHasNull } from "../../functions/validateForm";
import Gallery from "../Profile/Gallery/Gallery";
import { avatarList } from "../../functions/varsForDevelopment";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { findOrCreateUser, postPlayer, updatePlayer } from "../../redux/action";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchPlayer } from "../../functions/fetchPlayer";

const CreatePlayer = () => {

    const { action } = useParams()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLogged = useSelector(store => store.loggedUser)
    const { user } = useAuth0();

    const [player, setPlayer] = useState({
        nickname: '',
        avatar: '',
        score: '0',
        user_id: userLogged.createdUser.id
    })

    const [error, setError] = useState({
        msg: '',
        error: false
    })

    // FUNCTION TO MATCH THE IMAGE NAME => avatar-01, avatar-02, ... , avatar-10
    const checkIfAvatar = (e) => {
        if (e.target.name === 'avatar') {
            if (e.target.value < 10)
                return '/images/avatar-0' + e.target.value + '.png'
            else
                return '/images/avatar-' + e.target.value + '.png'
        }
        return e.target.value
    }

    const handlePlayer = (e) => {
        setPlayer({
            ...player,
            [e.target.name]: checkIfAvatar(e)
        })
    }

    const errorhandler = () => {
        setError(false)
        if (objHasNull(player))
            setError(true)
    }

/*     const postPlayer = () => {
        fetch(`${process.env.REACT_APP_API_URL}/players`, {
            method: 'POST',
            body: JSON.stringify(player),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => data.json())
            .then(res => {
                if (res === 'El nickname ya existe' || res === 'El usuario ya tiene un player') {
                    setError({
                        msg: res,
                        error: true
                    })
                    return false
                }
                return true
            })
            .catch(err => {
                console.log(err)
                return false
            })
    } */

    const createPlayer = async () => {
        if (action === 'edit') {
            updateThePlayer()
        } else {
            errorhandler()
            if (!error.error) {
                Swal.fire({
                    title: '¿Estás seguro de que deseas crear tu Player?',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: '¡Estoy seguro!',
                }).then((result) => {
                    if (result.isConfirmed) {
                        fetchPlayer(player, setError)
                        Swal.fire({
                            title: '¡Has creado tu Player con éxito!',
                            icon: 'success',
                            confirmButtonText: 'Continuar'
                        }).then((result) => {
                            if (result.isConfirmed) afterCreate()
                        })
                    }
                })
            }
        }
    }

    const afterCreate = async() => {
        await dispatch(findOrCreateUser(user.name, user.email))
        navigate('/')
    }

    const updateThePlayer = () => {
        errorhandler()
        if (!error.error) {
            Swal.fire({
                title: '¿Estás seguro de que deseas actualizar tu Player?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: '¡Estoy seguro!',
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(updatePlayer(player))
                    Swal.fire({
                        title: '¡Has editado tu Player con éxito!',
                        icon: 'success',
                        confirmButtonText: 'Continuar'
                    }).then((result) => {
                        if(result.isConfirmed) navigate('/')
                    })
                }
            })
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    useEffect(() => {
        errorhandler()
        console.log('EL PLAYER A EDITAR', player);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [player])

    // CHECK IF IS CREATING OR EDITING
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

            {error.error && error.msg}

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
                        <input className="input-nickname" type="text" placeholder="Ingresa el nickname de tu player" onChange={handlePlayer} name="nickname" id="name" maxLength={16} value={player.nickname} />
                    </div>

                    <div className="create-player-form-field">
                        <label className="cmp-create-player-label" htmlFor="status">Selecciona tu avatar</label>
                        <Gallery imagesList={avatarList} avatarSelected={(e) => handlePlayer(e)} />
                    </div>

                    <button className="create-player-submit" disabled={error ? 'disabled' : ''} onClick={createPlayer}>
                        {action === 'edit' ? 'EDITAR' : 'CREAR'} PLAYER
                    </button>

                    {error && <p className="error-message" style={{ color: "white", fontWeight: "bold", marginTop: "10px" }}>Todos los campos deben ser llenados, evita usar simbolos</p>}
                </div>
            </div>
            <div id='create-player-text'>
                <h4>Una vez que crees tu Player no podras crear otro, con lo cual piensa mucho tu nombre y avatar!</h4>
            </div>
        </div>
    )
}

export default CreatePlayer