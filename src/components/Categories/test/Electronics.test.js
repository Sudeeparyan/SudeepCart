import { screen, render,fireEvent } from "@testing-library/react"
import Electronics from "../Electronics"
import { BrowserRouter } from "react-router-dom"
import Categories from "../Categories"
import userEvent from "@testing-library/user-event"

describe('Electronics',()=>{
    test('Electronics renders',()=>{
        render(<Electronics/>)
    })
    test ('Electronics function renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        fireEvent.click(screen.getByTestId('Electronics'))
        expect(window.location.pathname).toEqual('/Electronics')
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
        fireEvent.click( screen.getByTestId('Electronics'));
        expect(window.location.pathname).toBe("/Electronics");
      });
})