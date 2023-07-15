import { screen, render,fireEvent } from "@testing-library/react"
import ComputerAccresseries from "../ComputerAccresseries"
import Categories from "../Categories"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
describe('ComputerAccresseries', () => {
    test('ComputerAccresseries',()=>{
        render(<ComputerAccresseries/>)
    })
    test ('computerAccresseries renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        fireEvent.click(screen.getByTestId('computerAccresseries'))
        expect(window.location.pathname).toEqual('/computerAccresseries')
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
        fireEvent.click( screen.getByTestId('computerAccresseries'));
        expect(window.location.pathname).toBe("/computerAccresseries");
      });
})