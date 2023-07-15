import { screen, render, fireEvent } from "@testing-library/react"
import Register from "./Register"
import { BrowserRouter } from "react-router-dom"
import Categories from "../../components/Categories/Categories"
import userEvent from "@testing-library/user-event"

describe('Register funbction',()=>{
    test('renders register pages',()=>{
        render(<Register/>)
    })
    test("Shopping Button on pressing tab four times", async () => {
        render(
          <BrowserRouter>
            <Categories/>
          </BrowserRouter>
        );
        await userEvent.tab();
        fireEvent.click( screen.getByTestId('register'));
        expect(window.location.pathname).toBe("/register");
      });
})