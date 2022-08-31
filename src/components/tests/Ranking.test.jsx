import { screen, render, findAllByTestId } from "@testing-library/react";
import Ranking from "../Ranking/Ranking";
import userEvent from "@testing-library/user-event";
import RankingCard from "../Ranking/RankingCard/RankingCard";
import { findRenderedComponentWithType } from "react-dom/test-utils";

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