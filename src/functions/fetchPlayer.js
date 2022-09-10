export const fetchPlayer = (player) => {
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
                return false
            }
            return true
        })
        .catch(err => {
            console.log(err)
            return false
        })
}