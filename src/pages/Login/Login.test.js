import { screen, render, fireEvent } from "@testing-library/react"
import Login from "./Login"
import { BrowserRouter } from "react-router-dom"
import Categories from "../../components/Categories/Categories"
import userEvent from "@testing-library/user-event"


describe('Login test functionality', () => {
    test('renders Login button', () => {
        render(<Login/>)
        const loginButton = screen.getByRole('button', { name: 'Login' })
        expect(loginButton).toBeInTheDocument()
      })
      test("Shopping Button on pressing tab four times", async () => {
        render(
          <BrowserRouter>
            <Categories/>
          </BrowserRouter>
        );
        await userEvent.tab();
        await userEvent.tab();
        await userEvent.tab();
        await userEvent.tab();
        await userEvent.tab();
        await userEvent.tab();
        await userEvent.tab();
        fireEvent.click( screen.getByTestId('login'));
        expect(window.location.pathname).toBe("/login");
      });
})
