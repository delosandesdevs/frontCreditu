import { GET_TOPTEN_PLAYERS, GET_PLAYER_BY_ID, POST_PLAYER, GET_PAGINATION, LOGIN_OR_CREATE } from "../../redux/constans";
import { reducer, initialState } from "../../redux/reducer";

describe('Reducer testing', () => {
    test('state should return default', () => { 
        const defaultState = reducer(initialState, {})
        expect(defaultState).toEqual(initialState)        
     })

     test('should return Top 10 players when state type is GET_TOPTEN_PLAYERS', () => { 
        const topTen = [
            {nickname:'1', score:10, status:'oro', avatar:'', galeria:''},
            {nickname:'2', score:9, status:'oro', avatar:'', galeria:''},
            {nickname:'3', score:8, status:'oro', avatar:'', galeria:''},
            {nickname:'4', score:7, status:'plata', avatar:'', galeria:''},
            {nickname:'5', score:6, status:'plata', avatar:'', galeria:''},
            {nickname:'6', score:5, status:'plata', avatar:'', galeria:''},
            {nickname:'7', score:4, status:'plata', avatar:'', galeria:''},
            {nickname:'8', score:3, status:'bronce', avatar:'', galeria:''},
            {nickname:'9', score:2, status:'bronce', avatar:'', galeria:''},
            {nickname:'10', score:1, status:'bronce', avatar:'', galeria:''}
        ]
        const newState = reducer(initialState, {type: GET_TOPTEN_PLAYERS, payload: topTen})
        expect(newState.topten).toEqual(topTen)
      })

      test('should return specific player when state type is GET_PLAYER_BY_ID', () => {
        const player = {
            nickname: "Illiana",
            score: 4221,
            status: "bronce",
            avatar: "/images/avatar-07.png",
            galeria: null
        }

        const newState = reducer(initialState, {type: GET_PLAYER_BY_ID, payload: player})
        expect(newState.player).toEqual(player)        
       })

       test('should post a new player in the state', () => { 
        const newPlayer = {
            nickname: "TDD-test",
            score: 123,
            status: "bronce",
            avatar: "/images/avatar-07.png",
            galeria: null
        }

        let initialLength = initialState.players.length;
        const newState = reducer(initialState, {type: POST_PLAYER, payload: newPlayer});

        expect(newState.players.length).toEqual(initialLength+1)        
        })

        test('should fill the pagination when the status type is GET_PAGINATION', () => { 
            const fakePagination = [{"id":829,"nickname":"Gareth","score":6,"status":"bronce","avatar":"/images/avatar-04.png","galeria":null,"createdAt":"2022-09-03T01:50:12.629Z","updatedAt":"2022-09-03T01:50:12.629Z","userId":null},{"id":509,"nickname":"Linda","score":7,"status":"bronce","avatar":"/images/avatar-08.png","galeria":null,"createdAt":"2022-09-03T01:50:12.607Z","updatedAt":"2022-09-03T01:50:12.607Z","userId":null},{"id":1130,"nickname":"Jolene","score":8,"status":"bronce","avatar":"/images/avatar-07.png","galeria":null,"createdAt":"2022-09-03T01:50:12.648Z","updatedAt":"2022-09-03T01:50:12.648Z","userId":null},{"id":330,"nickname":"Jerome","score":18,"status":"bronce","avatar":"/images/avatar-07.png","galeria":null,"createdAt":"2022-09-03T01:50:12.587Z","updatedAt":"2022-09-03T01:50:12.587Z","userId":null},{"id":1341,"nickname":"Constance","score":24,"status":"bronce","avatar":"/images/avatar-08.png","galeria":null,"createdAt":"2022-09-03T01:50:12.663Z","updatedAt":"2022-09-03T01:50:12.663Z","userId":null},{"id":1448,"nickname":"Forrest","score":30,"status":"bronce","avatar":"/images/avatar-06.png","galeria":null,"createdAt":"2022-09-03T01:50:12.675Z","updatedAt":"2022-09-03T01:50:12.675Z","userId":null},{"id":453,"nickname":"Rebecca","score":34,"status":"bronce","avatar":"/images/avatar-06.png","galeria":null,"createdAt":"2022-09-03T01:50:12.598Z","updatedAt":"2022-09-03T01:50:12.598Z","userId":null},{"id":1335,"nickname":"Burke","score":36,"status":"bronce","avatar":"/images/avatar-06.png","galeria":null,"createdAt":"2022-09-03T01:50:12.663Z","updatedAt":"2022-09-03T01:50:12.663Z","userId":null},{"id":439,"nickname":"Russell","score":37,"status":"bronce","avatar":"/images/avatar-07.png","galeria":null,"createdAt":"2022-09-03T01:50:12.597Z","updatedAt":"2022-09-03T01:50:12.597Z","userId":null},{"id":181,"nickname":"Ethan","score":40,"status":"bronce","avatar":"/images/avatar-09.png","galeria":null,"createdAt":"2022-09-03T01:50:12.574Z","updatedAt":"2022-09-03T01:50:12.574Z","userId":null}]
            
            const newState = reducer(initialState, {type: GET_PAGINATION, payload: fakePagination});
            expect(newState.pagination.length).toEqual(10)
         })

        test('should fill the login state when the status type is LOGIN_OR_CREATE', () => { 
            const fakeUser = {
                createdUser:{
                    createdAt:'2022-09-14T12:06:37.961Z',
                    email: "juanocataldo@gmail.com",
                    hasPlayer: false,
                    id: 2,
                    name: "Juan Manuel Cataldo Pavan",
                    role: "user",
                    updatedAt: "2022-09-14T12:06:37.961Z"
                },
                player:false,
                ranking:false
            }
            
            const newState = reducer(initialState, {type: LOGIN_OR_CREATE, payload: fakeUser});
            expect(newState.loggedUser).toEqual(fakeUser)
         })
       
})