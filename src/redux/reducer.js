/* eslint-disable default-param-last */
import {
  GET_TEST,
  GET_PAGINATION,
  SEARCH_PLAYER,
  GET_TOPTEN_PLAYERS,
  POST_PLAYER,
  GET_PLAYER_BY_ID,
  GET_ALL_PLAYERS,
  LOGIN_OR_CREATE
} from './constans';

export const initialState = {
  topten: [],
  player: {},
  players: [],
  pagination: [],
  loggedUser: []
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_TOPTEN_PLAYERS:
      return {
        ...state,
        topten: action.payload
      };

    case LOGIN_OR_CREATE:
      return {
        ...state,
        loggedUser: action.payload
      };

    case POST_PLAYER:
      return {
        ...state,
        players: [...state.players, action.payload]
      };

    case GET_PLAYER_BY_ID:
      return {
        ...state,
        player: action.payload
      };

    case GET_PAGINATION:
      return {
        ...state,
        pagination: action.payload
      };

    // case GET_ALL_PLAYERS: 
    //   return {
    //     ...state,
    //     players: action.payload
    //   };

    // case SEARCH_PLAYER: //
    //   return {
    //     ...state,
    //     pagination: {
    //       players: action.payload,
    //       total: action.payload.length
    //     }
    //   };

    default:
      return state;
  }
};
