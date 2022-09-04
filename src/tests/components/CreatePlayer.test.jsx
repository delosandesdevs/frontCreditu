import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CreatePlayer from "../../components/CreatePlayer/CreatePlayer";
import store from '../../redux/store'


// eslint-disable-next-line testing-library/no-render-in-setup
beforeEach(() => render(
<Provider store={store}>
    <BrowserRouter>
        <CreatePlayer />
    </BrowserRouter>
</Provider>
))

describe('Testing UI Create Player component', () => {
    test('Should have an input to enter player name', () => {
        const inputs = screen.getByRole('textbox', {name:/nickname/i})
        expect(inputs).toBeInTheDocument()
    })
    
    test('Should have 10 avatars to choose', () => {
        const inputs = screen.getAllByRole('button', {name:/avatar$/i})
        expect(inputs).toHaveLength(10)
    })

    test('Should have a button to create the player', () => {
        const createPlayerBtn = screen.getByRole('button', {name:/crear player/i})
        expect(createPlayerBtn).toBeInTheDocument()
    })
})


describe('Testing Form Error handlers', () => {
    test('Should throw an error if the fields are empty on submit', () => {
        // const submitBtn = screen.getByRole('button', {name: /crear player/i})
        const errorHandler = screen.queryByText("Todos los campos deben ser llenados")
        // userEvent.click(submitBtn)
        expect(errorHandler).toBeInTheDocument()
    })

    test('Should not throw any alerts if the fields are filled', () => {
        const playerName = screen.getByRole('textbox', {name:/nickname/i})
        const avatar = screen.getByRole('button', {name:'1_avatar'})
        const errorHandler = screen.queryByText("Todos los campos deben ser llenados")
        
        userEvent.type(playerName, 'test')        
        userEvent.click(avatar)
        
        expect(errorHandler).not.toBeInTheDocument()
    })   
})