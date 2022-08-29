import { useEffect, useState } from "react"

export function CreatePlayer(){

    const [player, setPlayer] = useState({
      name:"",
      status:"",
      ranking:null
    })    

    const [error, setError] = useState(false)

    const handlePlayer = (e) => {
        setPlayer({
            ...player,
            [e.target.name] : e.target.value
        })
    }

    function hasNull(target) {
        for (var member in target) {
            if (target[member] == null || target[member] == '')
                return true;
        }
        return false;
    }

    const errorhandler = () => {
        setError(false)

        if(hasNull(player)) 
        setError(true)
    }

    const createPlayer = (e) => {
        errorhandler()
        console.log('Falló?', error)        
    }
    
    useEffect(() => {
        errorhandler()
    },[player])

    return <div>
        <h1>Create Player</h1>
        <label htmlFor="name">Player Name</label>
        <input type="text" placeholder="Player name" onChange={handlePlayer} name="name" id="name" />
        <select onChange={handlePlayer} name="status" id="status">
            <option disabled selected value='' ></option>
            <option value="bronce">Bronce</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
        </select>
        <input type="number" placeholder="Ranking" onChange={handlePlayer} name="ranking" id="ranking" />
        <button onClick={createPlayer}>Create</button>
        {error && <p style={{color:"red",fontWeight:"bold"}}>All fields should be filled</p>}
    </div>
}