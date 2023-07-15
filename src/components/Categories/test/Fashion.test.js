import Fashion from "../Fashion"
import { screen, render,fireEvent } from "@testing-library/react"
import Categories from "../Categories"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
describe('Fashion', () =>{
    test('Fashion',()=>{
        render(<Fashion />)
    })
    test ('Fashion renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        // expect(screen.getByTestId('bestSellers'))
        fireEvent.click(screen.getByTestId('Fashion'))
        expect(window.location.pathname).toEqual('/Fashion')
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
        fireEvent.click( screen.getByTestId('Fashion'));
        expect(window.location.pathname).toBe("/Fashion");
      }); 
})