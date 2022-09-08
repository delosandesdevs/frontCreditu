import {rest, setupWorker} from 'msw'
import { mockAllPlayers, mockRanking } from './resolvers';

export const handlers = [
    
      rest.get(`${process.env.REACT_APP_API_URL}/players?page=0&size=10&orderby=dsc`, mockRanking),
    ,  
    rest.get(`${process.env.REACT_APP_API_URL}/players`, mockAllPlayers),
  ]