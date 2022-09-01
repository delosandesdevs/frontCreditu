import { useEffect, useState } from "react"
import './CreatePlayer.scss'
import defaultAvatar from '../../assets/avatars/default.png'
import 'animate.css';
import Avatar from "../Avatar/Avatar";

const CreatePlayer = () => {

    const [player, setPlayer] = useState({
        name: "",
        avatar: 0,
        // ranking: null
    })

    const [error, setError] = useState(false)

    const handlePlayer = (e) => {
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        })
    }

    const hasNull = (target) => {
        for (var member in target) {
            if (target[member] === '' || target[member] === 0)
                return true;
        }
        return false;
    }

    const errorhandler = () => {
        setError(false)

        if (hasNull(player))
            setError(true)
    }

    const createPlayer = (e) => {
        errorhandler()
    }

    useEffect(() => {
        errorhandler()
        console.log(player);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [player])

    return (
        <div className="create-player">
            <div className="banner-title">
                <h1>Usa la imaginación y crea tu jugador</h1>
            </div>

            <div className="cmp-create-player">
                <div className="cmp-create-player-avatar">
                    <div className="cmp-create-player-avatar-background">
                        {player.avatar === 0 ?
                         <img src={defaultAvatar} alt="default_avatar_img" /> 
                        :
                        <div className="avatar-movement">
                            <Avatar pic={player.avatar} displayName={''} />
                        </div>
                    }
                    </div>
                    <span id="cmp-create-player-span">SELECCIONÁ TU AVATAR</span>
                </div>

                <div className="cmp-create-player-form">

                    <div className="create-player-form-field">
                        <label className="cmp-create-player-label" htmlFor="name">Nombre jugador</label>
                        <input type="text" placeholder="Enter your player name here" onChange={handlePlayer} name="name" id="name" />
                    </div>

                    <div className="create-player-form-field">
                        <label className="cmp-create-player-label" htmlFor="status">Seleccioná tu avatar</label>
                        <select onChange={handlePlayer} name="avatar" id="status" defaultValue='Select'>
                            <option disabled value='Select' ></option>
                            <option value={1}>Avatar 1</option>
                            <option value={2}>Avatar 2</option>
                            <option value={3}>Avatar 3</option>
                        </select>
                    </div>
                   
                    <button className="create-player-submit" onClick={createPlayer}>CREAR JUGADOR</button>

                    {error && <p style={{ color: "white", fontWeight: "bold", marginTop: "10px" }}>All fields should be filled</p>}
                </div>
            </div>
        </div>
    )
}

export default CreatePlayer