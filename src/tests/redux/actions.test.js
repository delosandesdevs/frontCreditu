import { getTenPlayers } from "../../redux/action"
import { GET_TOPTEN_PLAYERS } from "../../redux/constans"
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { topTen } from "../consts/responses";

// initialise middlewares
const middlewares = [thunk]; 

// initialise MockStore which is only the configureStore method which take middlewares as its parameters
const mockStore = configureStore(middlewares); 

//creating a mock instance from the MockAdapter of axios
const mock = new MockAdapter(axios); 
const store = mockStore({});

beforeEach(() => { 
    store.clearActions()
});

const getTenPlayersMock = () => dispatch => {
    return axios.get(`${process.env.REACT_APP_API_URL_LOCAL}/players?page=0&size=10&orderby=dsc`)
    .then((response) => {
        console.log(response.data.data);
        dispatch({
            type: GET_TOPTEN_PLAYERS,
            payload: response.data.data
        })
    }).catch(error => {
        console.log("Error" + error);
    })
}


describe('Action Creators test',() =>{
    test('should test a getTenPlayers() action ', () => {
        mock.onGet(`${process.env.REACT_APP_API_URL_LOCAL}/players?page=0&size=10&orderby=dsc`).reply(200,{
            data: topTen.players
        })

        store.dispatch(getTenPlayersMock())
        .then(() => {
            let expectedActions = [{
                type: GET_TOPTEN_PLAYERS,
                payload: topTen.players
            }]
            expect(store.getActions()).toEqual(expectedActions)
        })
        .catch(err => console.log(err))

    })
})