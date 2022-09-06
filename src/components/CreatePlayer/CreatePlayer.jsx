import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import './CreatePlayer.scss'
import defaultAvatar from '../../assets/avatars/default.png'
import 'animate.css';
import Avatar from "../Avatar/Avatar";
import { objHasNull } from "../../functions/validateForm";
import Gallery from "../Profile/Gallery/Gallery";
import { avatarList } from "../../functions/varsForDevelopment";
import { useDispatch } from "react-redux";
import { postPlayer } from "../../redux/action";
// import party from "party-js";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const CreatePlayer = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [player, setPlayer] = useState({
        nickname: "",
        avatar: '',
        score: '0'
    })

    const [error, setError] = useState(false)

    // FUNCTION TO MATCH THE IMAGE NAME => avatar-01, avatar-02, ... , avatar-10
    const checkIfAvatar = (e) => {
        if(e.target.name === 'avatar'){
            if(e.target.value < 10)
            return '/images/avatar-0'+e.target.value+'.png'
            else
            return '/images/avatar-'+e.target.value+'.png'
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

    const createPlayer = (e) => {
        // party.confetti(e.target, {
        //     count: party.variation.range(10, 20),
        //   });
        errorhandler()
        if(!error){
            // dispatch(postPlayer(player))

            Swal.fire({
                title: '¿Estás seguro de que deseas crear tu Player?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: '¡Estoy seguro!',
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  dispatch(postPlayer(player))
                  Swal.fire({
                    title:'¡Has creado tu Player con éxito!',
                    icon:'success',
                    confirmButtonText: 'Continuar'
                  })
                  navigate('/')
                } else if (result.isDismissed) {
                }
              })

            // swal({
            //     title: `Player creado exitosamente!`,
            //     icon: "success",
            //     button: 'Continuar'
            // }).then(function (isConfirm) {
            //     if (isConfirm) {
            //         navigate('/')
            //     }
            // })
            
            
        }
    }

    useEffect(() => {
        errorhandler()
        console.log(player)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [player])

    return (
        <div className="create-player">
            <div className="banner-title">
                <h1>Usa la imaginación y crea tu Player</h1>
            </div>

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
                        <input className="input-nickname" type="text" placeholder="Ingresa el nickname de tu player" onChange={handlePlayer} name="nickname" id="name" maxLength={16} />
                    </div>

                    <div className="create-player-form-field">
                        <label className="cmp-create-player-label" htmlFor="status">Selecciona tu avatar</label>                      
                        <Gallery imagesList={avatarList} avatarSelected={(e) => handlePlayer(e)} />
                    </div>
                   
                    <button className="create-player-submit" disabled={error ? 'disabled' : ''} onClick={createPlayer}>CREAR PLAYER</button>

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