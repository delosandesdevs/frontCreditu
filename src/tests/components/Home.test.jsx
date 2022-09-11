import { screen, render, waitFor } from "@testing-library/react";
import { Provider } from 'react-redux'
import store from "../../redux/store";
import { server } from '../mocks/server'
import { rest } from 'msw'
import Home from '../../components/Home/Home'
import { errorMock } from "../mocks/resolvers";

// eslint-disable-next-line testing-library/no-render-in-setup
beforeEach(() => render(<Provider store={store}>
    <Home />
</Provider>))

describe('Testing Home Component', () => {
    test('should display the logo', () => {
        const homeBanner = screen.getByAltText(/logo_img$/i);
        expect(homeBanner).toBeInTheDocument();
    });

    test('Should render the top 10', async () => {        
        waitFor(() => {
            const topTen = screen.getAllByAltText(/top$/i);
            expect(topTen).toHaveLength(10)
        })
    })

    test('should render chart with metrics', () => {
        const chart = screen.getByTestId('air-chart')
        expect(chart).toBeInTheDocument()
    })
})

describe('Error Handler', () => {
    test('Show error in top 10', async () => {
        server.resetHandlers(
            rest.get(`${process.env.REACT_APP_API_URL}/players?page=0&size=11&orderby=dsc`, errorMock)
        )

        render(<Provider store={store}>
            <Home />
        </Provider>)

        waitFor(() => {
            const topTenError = screen.getAllByAltText(/top$/i)
            expect(topTenError).toHaveLength(0)
        })
    })
})