import {API_URL,GET_TEST, ADD_TEST, GET_TOPTEN_PLAYERS, GET_PAGINATION, GET_ALL_PLAYERS, LOGIN_OR_CREATE,} from "./constans"


export function actionTest() {
    return function (dispatch) {
        return fetch(`${API_URL}/test`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_TEST,
                    payload: data
                })
            })
    }
}

export function addTest(test){
    return function (dispatch){
        return fetch(`${API_URL}/test1`,{
            method : 'POST',
            body : JSON.stringify(test),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
    }
}

export function findOrCreateUser(name, email) {
    return function (dispatch) {
        return fetch(`${API_URL}/user`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({name, email}), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: LOGIN_OR_CREATE,
                    payload: data
                })
            })
    }
}

export function getTenPlayers(){
    return async function(dispatch){
        try {
            const data = await fetch(`${process.env.REACT_APP_API_URL}/players?page=0&size=11&orderby=dsc`)
            const res = await data.json()
            console.log('action creator allplayers', res)
            dispatch({
                type: GET_TOPTEN_PLAYERS,
                payload: res
            })
        } catch (e) {
            return console.log('ERROR!', e)
        }
    }
}

export function getPlayersPaginated(pageNumber, orderBy, size){
    return function(dispatch){
        return fetch(`${process.env.REACT_APP_API_URL}}/players?page=${pageNumber}&size=${size}&orderby=${orderBy}`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: GET_PAGINATION,
                payload: data
            })
        })
    }
}

export function postPlayer(player){
    return function(){
        return fetch(`${process.env.REACT_APP_API_URL}/players`,{
            method : 'POST',
            body : JSON.stringify(player),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export function getAllPlayers(){
    return function(dispatch){
        return fetch(`${process.env.REACT_APP_API_URL}/players`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: GET_ALL_PLAYERS,
                payload: data
            })
        })        
}}

export function postGallery(image){
    return function(){
        return fetch(`${API_URL}/profile`,{
            method : 'POST',
            body : JSON.stringify(image),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}