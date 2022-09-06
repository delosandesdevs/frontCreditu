import { screen, render, waitFor } from "@testing-library/react";
import Ranking from "../../components/Ranking/Ranking";
import userEvent from "@testing-library/user-event";
import { rest } from 'msw';
import { server } from '../mocks/server';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from '../../redux/store'
import { errorMock } from "../mocks/resolvers";


const {rerender} = render(
        <Provider store={store}>
            <BrowserRouter>
                <Ranking />
            </BrowserRouter>
        </Provider>)

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

    test.only('should throw an error if there is no players to paginate', async () => {
  
        server.resetHandlers(
            rest.get(`${process.env.REACT_APP_API_URL}/players?page=0&size=10&orderby=dsc`, (req, res, ctx)=> 
                res(ctx.status(500))))

    
        await waitFor(async () => {
            const rankedPlayers = screen.getByTestId('error')
            expect(rankedPlayers).toBeInTheDocument(1)
        },{timeout:3000})
    })

    test('Should filter players by name', async () => {

        const inputPlayer = screen.getByPlaceholderText(/player a buscar$/i)
        const submitSearchBtn = screen.getByRole('button', { name: /buscar/i })
        userEvent.type(inputPlayer, 'juano')
        userEvent.click(submitSearchBtn)

        const cards = await screen.findAllByTestId('testplayer')

        expect(cards).toHaveLength(1)
    })

    test('should show players paginated', async () => {
        const playersPaginated = await screen.findAllByTestId('testplayer')
        expect(playersPaginated).toHaveLength(10)
    })
})