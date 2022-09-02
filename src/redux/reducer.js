import { GET_TEST, ADD_TEST, GET_ALL_PLAYERS } from "./constans"


const initialState = {
    test_state: [],
    allPlayers: []
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEST:
            return {
                ...state,
                test_state : action.payload
            }
        
        case GET_ALL_PLAYERS:
            return {
                ...state,
                allPlayers: action.payload
            }
            
        default:
            return state
    }
}