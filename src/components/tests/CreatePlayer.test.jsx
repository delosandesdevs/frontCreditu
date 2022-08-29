import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreatePlayer } from "../CreatePlayer";


beforeEach(() => render(<CreatePlayer />))

describe('Testing UI Create Player component', () => {
    test('Should have an input to enter player name', () => {
        // const playerName = screen.getByRole('textbox', {placeholder:/player name/i})
        // expect(playerName).toBeInTheDocument()
        const inputs = screen.getByRole('textbox', {name:/player name/i})
        expect(inputs).toBeInTheDocument()
    })
    test('Should have a select dropdown to choose status (bronce, silver and gold)', () => {
        // const playerName = screen.getByRole('textbox', {placeholder:/player name/i})
        // expect(playerName).toBeInTheDocument()
        const inputs = screen.getByRole('option', {name:''})
        expect(inputs).toBeInTheDocument()
    })
    test('Should have a button to create the player', () => {
        const createPlayerBtn = screen.getByRole('button', {name:/create/i})
        expect(createPlayerBtn).toBeInTheDocument()
    })
})

describe('Testing Form Error handlers', () => {
    test('Should throw an error if the fields are empty on submitting', () => {
        const submitBtn = screen.getByRole('button', {name: /create/i})
        const errorHandler = screen.queryByText("All fields should be filled")
        userEvent.click(submitBtn)
        expect(errorHandler).toBeInTheDocument()
    })
    test('Should not throw any alerts if the fields are filled', () => {
        const playerName = screen.getByRole('textbox')
        const status = screen.getByRole('combobox')
        const ranking = screen.getByPlaceholderText(/ranking/i)
        const errorHandler = screen.queryByText("All fields should be filled")
        
        userEvent.type(playerName, 'test')        
        userEvent.type(ranking, '123')        
        userEvent.selectOptions(status, "gold")
        
        
        expect(errorHandler).not.toBeInTheDocument()
    })   
})

