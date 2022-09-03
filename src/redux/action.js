import {API_URL,GET_TEST, ADD_TEST, GET_TEN_PLAYERS} from "./constans"

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

export function getTenPlayers(){
    return async function(dispatch){
        try {
            const data = await fetch(`http://awsback-env.eba-4zfabdzp.us-west-2.elasticbeanstalk.com/players?page=0&size=11&orderby=dsc`)
            const res = await data.json()
            console.log('action creator allplayers', res)
            dispatch({
                type: GET_TEN_PLAYERS,
                payload: res
            })
        } catch (e) {
            return console.log('ERROR!', e)
        }
    }
}