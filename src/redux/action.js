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
    return fetch(`http://awsback-env.eba-4zfabdzp.us-west-2.elasticbeanstalk.com/user`, {
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
        `http://awsback-env.eba-4zfabdzp.us-west-2.elasticbeanstalk.com/players?page=0&size=11&orderby=dsc`
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
      `http://awsback-env.eba-4zfabdzp.us-west-2.elasticbeanstalk.com/players?page=${pageNumber}&size=${size}&orderby=${orderBy}`
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
      `http://awsback-env.eba-4zfabdzp.us-west-2.elasticbeanstalk.com/searchplayer?nickname=${nickname}?status=${status}`
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

export function postPlayer(player) {
  return function () {
    return fetch(`http://awsback-env.eba-4zfabdzp.us-west-2.elasticbeanstalk.com/players`, {
      method: "POST",
      body: JSON.stringify(player),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
}

export function getAllPlayers() {
  return function (dispatch) {
    return fetch(`http://awsback-env.eba-4zfabdzp.us-west-2.elasticbeanstalk.com/players`)
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
    return fetch(`http://awsback-env.eba-4zfabdzp.us-west-2.elasticbeanstalk.com/profile`, {
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
    console.log('NODE_ENV',process.env.NODE_ENV);
    return fetch(
      `http://awsback-env.eba-4zfabdzp.us-west-2.elasticbeanstalk.com/players/${parseInt(player.id)}`,
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
          confirmButtonText: 'Continuar'
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
      `http://awsback-env.eba-4zfabdzp.us-west-2.elasticbeanstalk.com/filterByStatus?status=${status}`
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
    return fetch(`http://awsback-env.eba-4zfabdzp.us-west-2.elasticbeanstalk.com/players`,{
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
    return fetch(`http://awsback-env.eba-4zfabdzp.us-west-2.elasticbeanstalk.com/players/${id}`,{
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
  })
}
}