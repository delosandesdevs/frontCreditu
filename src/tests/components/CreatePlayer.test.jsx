import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreatePlayer from "../../components/CreatePlayer/CreatePlayer";



// eslint-disable-next-line testing-library/no-render-in-setup
beforeEach(() => render(<CreatePlayer />))

describe('Testing UI Create Player component', () => {
    test('Should have an input to enter player name', () => {
        const inputs = screen.getByRole('textbox', {name:/nickname/i})
        expect(inputs).toBeInTheDocument()
    })
    
    test('Should have a select dropdown to choose avatar', () => {
        const inputs = screen.getByRole('option', {name:''})
        expect(inputs).toBeInTheDocument()
    })

    test('Should have a button to create the player', () => {
        const createPlayerBtn = screen.getByRole('button', {name:/crear player/i})
        expect(createPlayerBtn).toBeInTheDocument()
    })
})


describe('Testing Form Error handlers', () => {
    test('Should throw an error if the fields are empty on submitting', () => {
        const submitBtn = screen.getByRole('button', {name: /crear player/i})
        const errorHandler = screen.queryByText("Todos los campos deben ser llenados")
        userEvent.click(submitBtn)
        expect(errorHandler).toBeInTheDocument()
    })

    test('should throw error when the user enter numbers in the input', () => { 
        
     })

    test('Should not throw any alerts if the fields are filled', () => {
        const playerName = screen.getByRole('textbox', {name:/nickname/i})
        const status = screen.getByRole('combobox')
        const errorHandler = screen.queryByText("Todos los campos deben ser llenados")
        
        userEvent.type(playerName, 'test')        
        userEvent.selectOptions(status, "1")
        
        expect(errorHandler).not.toBeInTheDocument()
    })   
})

