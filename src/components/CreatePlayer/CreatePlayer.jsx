import { useEffect, useState } from "react"
import './CreatePlayer.scss'
import defaultAvatar from '../../assets/avatars/default.png'
import 'animate.css';

const CreatePlayer = () => {

    const [player, setPlayer] = useState({
        name: "",
        status: "",
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
            if (target[member] === null || target[member] === '')
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [player])

    return (
        <div className="create-player">
            <div className="banner-title">
                <h1>Usa tu imaginación y crea tu jugador</h1>
            </div>

            <div className="cmp-create-player">
                <div className="cmp-create-player-avatar">
                    <div className="cmp-create-player-avatar-background">
                        <img src={defaultAvatar} alt="default_avatar_img" />
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
                        <select onChange={handlePlayer} name="status" id="status" defaultValue='Select'>
                            <option disabled value='Select' ></option>
                            <option value="1">Avatar 1</option>
                            <option value="2">Avatar 2</option>
                            <option value="3">Avatar 3</option>
                        </select>
                    </div>

                    {/* <div className="create-player-form-field">
                        <label className="cmp-create-player-label" htmlFor="ranking">Ranking</label>
                        <input type="number" placeholder="Enteranking" onChange={handlePlayer} name="ranking" id="ranking" />
                    </div> */}

                    <button className="create-player-submit" onClick={createPlayer}>CREAR JUGADOR</button>


                    {error && <p style={{ color: "white", fontWeight: "bold", marginTop: "10px" }}>All fields should be filled</p>}
                </div>
            </div>
        </div>
    )
}

export default CreatePlayer