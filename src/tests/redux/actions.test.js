import { findOrCreateUser, getAllPlayers, getPlayersPaginated, getSearchPlayer, getSinglePlayer, getTenPlayers } from "../../redux/action"
import { GET_PAGINATION, GET_PLAYER_BY_ID, GET_TOPTEN_PLAYERS, LOGIN_OR_CREATE } from "../../redux/constans"
import configureStore from 'redux-mock-store';
import { getAllPlayersMock, getPlayersPaginatedMock, getSearchedPlayerMock, getSinglePlayerByIdMock, getTopTenMock } from "../consts/responses";
import thunk from 'redux-thunk';
import axios from 'axios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});
jest.mock('axios')
beforeEach(() => {
    store.clearActions()
});


describe('Testing Action Creators', () => {
    test('should test a getPlayersPaginated() action', async () => {
        const expected = [
            {
                type: GET_PAGINATION,
                payload: getPlayersPaginatedMock.players
            }
        ];

        axios.get = jest.fn(() => {
            return Promise.resolve();
        });

        const dispatch = jest.fn(),
            getState = jest.fn(() => {
            });

        await getPlayersPaginated(0, 'desc', 10)(dispatch, getState);
        console.log('>>>>>>>>>>>>>',dispatch.mock.calls[0][0]);
        expect(dispatch.mock.calls[0][0].payload.length).toEqual(expected[0].payload.length);
    });

    test('should test a findOrCreateUser() action', async () => {
        const expected = [
            {
                type: LOGIN_OR_CREATE,
                payload: { name: 'John', email: 'john@example.com' }
            }
        ];

        axios.post = jest.fn(() => {
            return Promise.resolve();
        });

        const dispatch = jest.fn(),
            getState = jest.fn(() => {
                url: `${process.env.REACT_APP_API_URL_LOCAL}/user`;
            });

        await findOrCreateUser('John', 'john@example.com')(dispatch, getState);
        expect(dispatch.mock.calls[0][0].payload.createdUser.name).toEqual(expected[0].payload.name);
    });

    test('should test a getTenPlayers() action', async () => {
        const expected = [
            {
                type: GET_TOPTEN_PLAYERS,
                payload: getTopTenMock.players
            }
        ];

        axios.get = jest.fn(url => {
            return Promise.resolve();
        });

        const dispatch = jest.fn(),
            getState = jest.fn(() => {
                url: `${process.env.REACT_APP_API_URL_LOCAL}/players?page=0&size=11&orderby=dsc`;
            });

        await getTenPlayers()(dispatch, getState);
        console.log(dispatch.mock.calls[0][0]);
        expect(dispatch.mock.calls[0][0].payload.length).toEqual(expected[0].payload.length);
    });

    test('should test a getSearchPlayer() action', async () => {
        const expected = [
            {
                type: GET_PAGINATION,
                payload: getSearchedPlayerMock
            }
        ];

        
        const fakePlayer = {
            nickname: 'Aaron-1226',
            status: 'todos'
        }
      

        const dispatch = jest.fn(),
            getState = jest.fn(() => {
                url: `${process.env.REACT_APP_API_URL_LOCAL}/searchplayer`                
            });

        await getSearchPlayer(fakePlayer)(dispatch, getState);

        console.log(dispatch.mock.calls[0][0])

        expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    });

    test('should test a getAllPlayers() action', async () => {
        const expected = [
            {
                type: GET_PAGINATION,
                payload: getAllPlayersMock
            }
        ];

        axios.get = jest.fn((url) => {
            return Promise.resolve();
        });

        const dispatch = jest.fn(),
            getState = jest.fn(() => {
                url: `${process.env.REACT_APP_API_URL_LOCAL}/players`;
            });


        await getAllPlayers()(dispatch, getState);

        expect(dispatch.mock.calls[0][0].payload.players.length).toEqual(expected[0].payload.players.length);
    });

    test('should test a getSinglePlayer(1) action', async () => {
        const expected = [
            {
                type: GET_PLAYER_BY_ID,
                payload: getSinglePlayerByIdMock
            }
        ];

        axios.get = jest.fn((url) => {
            return Promise.resolve();
        });

        const dispatch = jest.fn(),
            getState = jest.fn(() => {
                url: `${process.env.REACT_APP_API_URL_LOCAL}/searchplayer?nickname=1`;
            });


        await getSinglePlayer(1)(dispatch, getState);

        expect(dispatch.mock.calls[0][0].payload.players.length).toEqual(expected[0].payload.players.length);
    });
})
