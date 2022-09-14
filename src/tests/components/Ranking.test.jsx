import { screen, render, waitFor } from "@testing-library/react";
import Ranking from "../../components/Ranking/Ranking";
import userEvent from "@testing-library/user-event";
import { rest } from 'msw';
import { server } from '../mocks/server';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from '../../redux/store'
import { errorMock } from "../mocks/resolvers";


beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
   render(
        <Provider store={store}>
            <BrowserRouter>            
                <Ranking />
            </BrowserRouter>
        </Provider>)
})

describe('Testing Ranking Component', () => {

    test('should render 10 players', async () => {
        
        const players = await screen.findAllByTestId('testplayer')
        expect(players).toHaveLength(10)
        screen.debug()
    })

    test('Should filter players by name', async () => {      

        const inputPlayer = screen.getByPlaceholderText(/player a buscar$/i)
        const submitSearchBtn = screen.getByRole('button', { name: /buscar/i })
        
        userEvent.type(inputPlayer, 'Nyssa-2238')
        userEvent.click(submitSearchBtn)

        const players = await screen.findAllByText('Nyssa-2238')
        expect(players).toHaveLength(1)
    })

    test('should show an error if no players are found', async () => {
        
        server.resetHandlers(
            rest.get(`${process.env.REACT_APP_API_URL}/searchplayer?nickname=&status=todos&page=0&orderby=desc&size=10`, errorMock
        ))

        waitFor(() => {
            const playersPaginated = screen.getAllByText('No se encontraron players')
            expect(playersPaginated).toHaveLength(1)
        })
    })
})