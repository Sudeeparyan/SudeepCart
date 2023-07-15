import Mobiles from "../Mobiles"
import { screen, render,fireEvent } from "@testing-library/react"
import Categories from "../Categories"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"

describe('Mobiles',()=>{
    test('Mobiles renders properly',()=>{
        render(<Mobiles/>)
    })
    test ('Mobiles renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        fireEvent.click(screen.getByTestId('Mobiles'))
        expect(window.location.pathname).toEqual('/Mobiles')
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
        fireEvent.click( screen.getByTestId('Mobiles'));
        expect(window.location.pathname).toBe("/Mobiles");
      });   
})