import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import store from "../../redux/store";

beforeEach(() => {
    render(<Provider store={store}>
    <BrowserRouter>
        <About />
    </BrowserRouter>
</Provider>)
})

describe('Testing About component', () => {
    test('should have a description of the app', () => {
        const text = screen.getByTestId('about')
        expect(text).toBeInTheDocument()
    })

    test('should show the logo of the app', () => {
        const logo = screen.getAllByAltText(/logo_img$/i)
        expect(logo).toHaveLength(2)
    })

    test('should have a section presenting the developers (5)', () => {
        const developer = screen.getAllByAltText(/devimg$/i)
        expect(developer).toHaveLength(5)
    })
})