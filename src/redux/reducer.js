import { GET_TEST, GET_PAGINATION, GET_TOPTEN_PLAYERS, POST_PLAYER, GET_PLAYER_BY_ID } from "./constans"


export const initialState = {
    topTenPlayers: [],
    player:{},
    players:[],
    pagination: []
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEST:
            return {
                ...state,
                test_state : action.payload
            }
        
        case GET_TOPTEN_PLAYERS:
            return {
                ...state,
                topTenPlayers: action.payload
            }
        
        case POST_PLAYER:
            return {
                ...state,
                players: [...state.players, action.payload]
            }
        
        case GET_PLAYER_BY_ID:
            return {
                ...state,
                player: action.payload
            }
        
        case GET_PAGINATION:
            return {
                ...state,
                pagination: action.payload
            }
            
        default:
            return state
    }
}