import Groceries from "../Groceries"
import { screen, render,fireEvent } from "@testing-library/react"
import Categories from "../Categories"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
describe('Groceries', () => {
    test('Groceries',()=>{
        render(<Groceries/>)
    })
    test ('groceries function renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        fireEvent.click(screen.getByTestId('groceries'))
        expect(window.location.pathname).toEqual('/groceries')
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
        await userEvent.tab();
        fireEvent.click( screen.getByTestId('groceries'));
        expect(window.location.pathname).toBe("/groceries");
      });
})