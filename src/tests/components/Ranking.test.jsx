import { screen, render, waitFor } from "@testing-library/react";
import Ranking from "../../components/Ranking/Ranking";
import userEvent from "@testing-library/user-event";
import { rest } from 'msw';
import { server } from '../mocks/server';
import { Provider, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from '../../redux/store'
import { errorMock, mockRanking } from "../mocks/resolvers";
import RankingCard from "../../components/Ranking/RankingCard/RankingCard";


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

        //CUANDO USAR WAITFOR Y CUANDO NO????
        //  waitFor( () => {
        //     const rankedPlayers = screen.getAllByTestId('testplayer')
        //     expect(rankedPlayers).toHaveLength(10)
        //     // expect(render(<RankingCard />)).toBeFalsy;            
        // })
        screen.debug()
    })

    test('Should filter players by name', async () => {      

        const inputPlayer = screen.getByPlaceholderText(/player a buscar$/i)
        const submitSearchBtn = screen.getByRole('button', { name: /buscar/i })
        
        userEvent.type(inputPlayer, 'velma')
        userEvent.click(submitSearchBtn)

        const players = await screen.findAllByText('Velma')
        expect(players).toHaveLength(1)
    })

    test('should show an error if no players are found', async () => {
        
        //SI BORRO ESTO, EL TEST SIGUE PASANDO (???????????)
        server.resetHandlers(
            rest.get(`${process.env.REACT_APP_API_URL}/searchplayer?nickname=&status=todos&page=0&orderby=desc&size=10`, errorMock
        ))

        waitFor(() => {
            const playersPaginated = screen.getAllByText('No se encontraron players')
            expect(playersPaginated).toHaveLength(1)
        })
    })
})