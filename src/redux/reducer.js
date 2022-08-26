import { ACTION_TEST } from "./constans"


const initialState = {
    test_state: []
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TEST:
            return {
                ...state,
                test_state : action.payload
            }
        default:
            return state
    }
}