import {rest, setupWorker} from 'msw'
import { mockAllPlayers, mockRanking } from './resolvers';

export const handlers = [    
      rest.get(`${process.env.REACT_APP_API_URL}/searchplayer?nickname=&status=todos&page=0&orderby=desc&size=10`, mockRanking)     
  ]

  