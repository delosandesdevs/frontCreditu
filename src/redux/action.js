import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

import {
  API_URL,
  GET_TEST,
  GET_TOPTEN_PLAYERS,
  GET_PAGINATION,
  LOGIN_OR_CREATE,
  GET_PLAYER_BY_ID,
} from "./constans";

export function actionTest() {
  return function (dispatch) {
    return fetch(`${API_URL}/test`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_TEST,
          payload: data,
        });
      });
  };
}

export function addTest(test) {
  return function (dispatch) {
    return fetch(`${API_URL}/test1`, {
      method: "POST",
      body: JSON.stringify(test),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
}

export function findOrCreateUser(name, email) {
  return function (dispatch) {
    return fetch(`${process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_API_URL_LOCAL : process.env.REACT_APP_API_URL}/user`, {
      method: "POST", // or 'PUT'
      body: JSON.stringify({ name, email }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: LOGIN_OR_CREATE,
          payload: data,
        });
      });
  };
}

export function getTenPlayers() {
  return async function (dispatch) {
    try {
      const data = await fetch(
        `${process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_API_URL_LOCAL : process.env.REACT_APP_API_URL}/players?page=0&size=11&orderby=dsc`
      );
      const res = await data.json();
      dispatch({
        type: GET_TOPTEN_PLAYERS,
        payload: res.players,
      });
    } catch (e) {
      return console.log("ERROR!", e);
    }
  };
}

export function getPlayersPaginated(pageNumber, orderBy, size) {
  return function (dispatch) {
    return fetch(
      `${process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_API_URL_LOCAL : process.env.REACT_APP_API_URL}}/players?page=${pageNumber}&size=${size}&orderby=${orderBy}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_PAGINATION,
          payload: data.players,
        });
      });
  };
}

export function getSearchPlayer({ nickname, status }) {
  return function (dispatch) {
    console.log("El nickname es vacío?");
    if (nickname === "") return getPlayersPaginated(0, "desc", 10);
    console.log("Pasé validación de nickname vacío");
    return fetch(
      `${process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_API_URL_LOCAL : process.env.REACT_APP_API_URL}/searchplayer?nickname=${nickname}?status=${status}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("La data de searchPlayer", data);
        dispatch({
          type: GET_PAGINATION,
          payload: data,
        });
      });
  };
}

export function postPlayer(player, setCreated) {
  return function () {
    console.log('CREANDO PLAYER', player)
    return fetch(`${process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_API_URL_LOCAL : process.env.REACT_APP_API_URL}/players`, {
      method: "POST",
      body: JSON.stringify(player),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((data) => data.json())
      .then((res) => {
        Swal.fire({
          title: res.message === 'El nickname ya existe' ? 'El nickname ya existe, por favor elija otro' :`¡Has creado tu Player con éxito!`,
          icon: res.message === 'El nickname ya existe' ? 'warning' : 'success',
          confirmButtonText: 'Continuar',
          confirmButtonColor: '#fe9c84',
          background: 'linear-gradient(0deg, #c65f72 0%, #2a855a 50%, #0f5156 100%)',
          color:"white",
          border:'10px solid white'
      }).then((result) => {            
            console.log('EL RES',res);
           if (result.isConfirmed && res.message !== 'El nickname ya existe'){
            setCreated(true)
           }
      })
      })
      .catch(err => console.log('Error al crear el player',err))
  };
}

export function getAllPlayers() {
  return function (dispatch) {
    return fetch(`${process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_API_URL_LOCAL : process.env.REACT_APP_API_URL}/players`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_PAGINATION,
          payload: data,
        });
      });
  };
}

export function postGallery(image) {
  return function () {
    return fetch(`${process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_API_URL_LOCAL : process.env.REACT_APP_API_URL}/profile`, {
      method: "POST",
      body: JSON.stringify(image),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
}

export function updatePlayer(player, setUpdated) {
  return function () {
    return fetch(
      `${process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_API_URL_LOCAL : process.env.REACT_APP_API_URL}/players/${parseInt(player.id)}`,
      {
        method: "PUT",
        body: JSON.stringify(player),
        headers: {
          "Content-Type": "application/json",
        },
      }
      )
      .then((data) => data.json())
      .then((res) => {
        Swal.fire({
          title: res.message === 'El nickname ya existe' ? 'El nickname ya existe, por favor elija otro' :`¡Has editado tu Player con éxito!`,
          icon: res.message === 'El nickname ya existe' ? 'warning' : 'success',
          confirmButtonText: 'Continuar',
          confirmButtonColor: '#fe9c84',
          background: 'linear-gradient(0deg, #c65f72 0%, #2a855a 50%, #0f5156 100%)',
          color:"white",
          border:'10px solid white'
      }).then((result) => {            
            console.log('EL RES',res);
           if (result.isConfirmed && res.message !== 'El nickname ya existe'){
            setUpdated(true)
           }
      })
      })
      .catch(err => console.log('Error al actualizar el player',err))
  };
}

export function getPlayersByStatus({ status }) {
  return function (dispatch) {
    return fetch(
      `${process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_API_URL_LOCAL : process.env.REACT_APP_API_URL}/filterByStatus?status=${status}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_PAGINATION,
          payload: data,
        });
      });
  };
}

export function deletePlayer(player){
  return function () {
    return fetch(`${process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_API_URL_LOCAL : process.env.REACT_APP_API_URL}/players`,{
      method: "DELETE",
      body: JSON.stringify(player),
      headers: {
          "Content-Type": "application/json"
        }
    })
    .catch(err => console.log('Error deleting player', err))
  }
}

export function getSinglePlayer(id){
  return function(dispatch){
    return fetch(`${process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_API_URL_LOCAL : process.env.REACT_APP_API_URL}/searchplayer?nickname=${id}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
  })
  .then(data => data.json())
  .then(res => {
    dispatch({
      type: GET_PLAYER_BY_ID,
      payload: res
    })
    console.log('respuesta reducer',res)
  })
}
}