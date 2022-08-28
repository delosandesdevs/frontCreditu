import {API_URL,GET_TEST, ADD_TEST} from "./constans"

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