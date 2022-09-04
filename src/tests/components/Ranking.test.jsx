import { screen, render } from "@testing-library/react";
import Ranking from "../../components/Ranking/Ranking";
import userEvent from "@testing-library/user-event";

describe('Testing Ranking Component', () => {
    test('Should filter players by name', async () => {
        render(<Ranking />)
        const inputPlayer = screen.getByPlaceholderText(/player a buscar$/i)
        const submitSearchBtn = screen.getByRole('button', {name:/buscar/i})
        userEvent.type(inputPlayer, 'juano')
        userEvent.click(submitSearchBtn)

        const cards = await screen.findAllByTestId('testplayer')
        
        expect(cards).toHaveLength(1)
    })
})