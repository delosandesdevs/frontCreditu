import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updatePlayer, getSinglePlayer } from "../../redux/action";
import { avatarList } from "../../functions/varsForDevelopment";
import { objHasNull } from "../../functions/validateForm";
import { fetchPlayer } from "../../functions/fetchPlayer";
import defaultAvatar from '../../assets/avatars/default.png'
import Avatar from "../Avatar/Avatar";
import Gallery from "../Profile/Gallery/Gallery";

import 'animate.css';
import './CreatePlayer.scss';

const CreatePlayer = () => {

    const { action } = useParams()
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const queryParams = new URLSearchParams(location.search)
    const singleValue= queryParams.get('id')

    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        if(updated)
        navigate('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[updated])

    useEffect(() => {
        if(singleValue){
            dispatch(getSinglePlayer(singleValue))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const userLogged = useSelector(store => store.loggedUser)
    const userToEdit = useSelector(store => store.player)
    const [created, setCreated] = useState(false)
    const [error, setError] = useState({
        msg: '',
        error: true
    })
    const [player, setPlayer] = useState({
        nickname: '',
        avatar: '',
        score: '0',
        user_id: userLogged.createdUser && userLogged.createdUser.id ? userLogged.createdUser.id : 1
    })
    
    useEffect(() => {
        if(singleValue){
        setPlayer({
            nickname: userToEdit.nickname,
            avatar: userToEdit.avatar,
            score: userToEdit.score,
            id: userToEdit.id,
            user_id: userLogged.createdUser.id
        })}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userToEdit])

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

    const createPlayer = () => {
        if (action === 'edit')
            dispatch(updatePlayer(player, setUpdated))                    
        else{
            fetchPlayer(player, setCreated)            
        }        
    }

    const afterCreate = () => {
        if(created) navigate('/')
    }

    useEffect(() => {
        if (action !== 'edit' && created) afterCreate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [created])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    useEffect(() => {
        if (userLogged.player && userLogged.player.nickname)
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
                    
                    {userLogged && userLogged.createdUser && userLogged.createdUser.role === 'admin'
                    ? <div className="create-player-form-field">
                        <label className="cmp-create-player-label" htmlFor="name">Score</label>
                        <input className="input-nickname" type="number" placeholder="Ingresar score del player" onChange={handlePlayer} name="score" value={player.score} id="name" autoComplete="off" />
                    </div>
                    : null
                    }                    

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