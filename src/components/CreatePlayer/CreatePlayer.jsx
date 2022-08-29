import { useEffect, useState } from "react"
import './CreatePlayer.scss'
import defaultAvatar from '../../assets/avatars/default.png'

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
    }, [player])

    return <>
            
        <div className="banner-title">
            <h1>Create Player</h1>
        </div>

        <div className="cmp-create-player">
            <div className="cmp-create-player-avatar">
                <div className="cmp-create-player-avatar-background">
                    <img src={defaultAvatar} alt="default_avatar_img" />                    
                </div>
                <span id="cmp-create-player-span">SELECT YOUR AVATAR</span>
            </div>

            <div className="cmp-create-player-form">
                
                <div className="create-player-form-field">
                    <label className="cmp-create-player-label" htmlFor="name">Player Name</label>
                    <input type="text" placeholder="Enter your player name here" onChange={handlePlayer} name="name" id="name" />
                </div>

                <div className="create-player-form-field">
                    <label className="cmp-create-player-label" htmlFor="status">Status</label>
                    <select onChange={handlePlayer} name="status" id="status" defaultValue='Select'>
                        <option disabled value='Select' ></option>
                        <option value="bronce">Bronce</option>
                        <option value="silver">Silver</option>
                        <option value="gold">Gold</option>
                    </select>                    
                </div>

                {/* <div className="create-player-form-field">
                    <label className="cmp-create-player-label" htmlFor="ranking">Ranking</label>
                    <input type="number" placeholder="Enteranking" onChange={handlePlayer} name="ranking" id="ranking" />
                </div> */}

                <button className="create-player-submit" onClick={createPlayer}>CREATE PLAYER</button>

                
                {error && <p style={{ color: "white", fontWeight: "bold", marginTop:"10px" }}>All fields should be filled</p>}
            </div>
        </div>
    </>
}

export default CreatePlayer