import {API_URL,GET_TEST, ADD_TEST, GET_ALL_PLAYERS} from "./constans"

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

export function getAllPlayers(){
    return function(dispatch){
        return fetch(`http://locaslhost:8080/players`)
        .then(data => data.json())
        .then(res => {
            console.log('action creator allplayers', res)
            dispatch({
                type: GET_ALL_PLAYERS,
                payload:res
            })
        })
        .catch(e => console.log('ERROR!', e))
    }
}