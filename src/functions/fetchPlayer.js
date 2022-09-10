import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

export const fetchPlayer = (player,setCreated) => {
    console.log('llama')
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
                Swal.fire({
                    title: `'El nickname ya existe'`,
                    icon: 'warning',
                    confirmButtonText: 'Continuar'
                })
                return
            }
            Swal.fire({
                title: `¡Has creado tu Player con éxito!`,
                icon: 'success',
                confirmButtonText: 'Continuar'
            }).then((result) => {
                if(result.isConfirmed) setCreated(true)
                return
            })
        })
        .catch(err => {
            console.log(err)
            return 
        })
}