import {API_URL,ACTION_TEST} from "./constans"

export function actionTest() {
    return function (dispatch) {
        return fetch(`${API_URL}/test`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: ACTION_TEST,
                    payload: data
                })
            })
    }
}