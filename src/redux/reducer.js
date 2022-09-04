import { GET_TEST, ADD_TEST, GET_TEN_PLAYERS, LOGIN_OR_CREATE } from "./constans"


const initialState = {
    test_state: [],
    topten: [],
    loggedUser : []
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEST:
            return {
                ...state,
                test_state : action.payload
            }
        
        case GET_TEN_PLAYERS:
            return {
                ...state,
                topten: action.payload
            }
        
        case LOGIN_OR_CREATE:
            return {
                ...state,
                loggedUser: action.payload
            }
            
        default:
            return state
    }
}