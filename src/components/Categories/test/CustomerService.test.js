import { screen,fireEvent,render } from "@testing-library/react"
import CustomerSerice from "../CustomerSerice"
import Categories from "../Categories"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"

describe('CustomerSerice', () =>{
    test('CustomerSerice',()=>{
        render(<CustomerSerice/>)
    })
    test ('CustomerSerice renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        fireEvent.click(screen.getByTestId('CustomerSerice'))
        expect(window.location.pathname).toEqual('/CustomerSerice')
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
        fireEvent.click( screen.getByTestId('CustomerSerice'));
        expect(window.location.pathname).toBe("/CustomerSerice");
      });
})