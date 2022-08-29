import { screen, render, waitFor } from "@testing-library/react";
import { Provider } from 'react-redux'
import store from "../../redux/store";
import Home from "../Home";
import {server} from '../tests/mocks/server.js'
import { rest } from 'msw'

beforeEach(() => render(<Provider store={store}>
                            <Home />
                        </Provider>))

describe('Testing Home Component', () => {
    test('should have one informative banner with the "home_img" alt_name and one "top 3 players" img with "topThree_img" alt text', () => {
        const homeBanner = screen.getByAltText(/home_img/i);
        expect(homeBanner).toBeInTheDocument();
    }); 
    test('Should have rendered the TOP 3 players', async() => {
        const topThree = await screen.findAllByAltText(/topthree$/i)
        expect(topThree).toHaveLength(3)
    })
    test('Should render top 10', async() => {
        const topTen = await screen.findAllByAltText(/topten$/i)
        expect(topTen).toHaveLength(10)
    })    
})

describe('Error Handler', () => {

    test('Show error in top 3', async () => {
        server.resetHandlers(
            rest.get('http://localhost:3030/topthree', (req, res, ctx) =>
            res(ctx.status(500))
            )
        )

        render(<Provider store={store}>
            <Home />
        </Provider>)

        await waitFor(async () => {
            const topThreeError = await screen.findByText(/no top 3 were found/i)
            expect(topThreeError).toBeInTheDocument()
        })

    })

    test('Show error in top 10', async () => {
        server.resetHandlers(
            rest.get('http://localhost:3030/topten', (req, res, ctx) =>
            res(ctx.status(500))
            )
        )

        render(<Provider store={store}>
            <Home />
        </Provider>)

        await waitFor(async () => {
            const topTenError = await screen.findByText(/no top 10 were found/i)
            expect(topTenError).toBeInTheDocument()
        })
    })
})
