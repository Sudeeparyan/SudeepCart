import Games from "../Games"
import { screen, render,fireEvent } from "@testing-library/react"
import Categories from "../Categories"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"

describe('Game', () => {
    test('Games',()=>{
        render(<Games/>)
    })
    test ('Games function renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        // expect(screen.getByTestId('bestSellers'))
        fireEvent.click(screen.getByTestId('Games'))
        expect(window.location.pathname).toEqual('/Games')
    }) 
    

describe('Games', () => {
  test('renders games component correctly', () => {
    render(<Games />);

    // Check if the heading text is rendered
    const heading = screen.getByText('To unlock this feature needs subscription');
    expect(heading).toBeInTheDocument();
  });

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
    fireEvent.click( screen.getByTestId('Games'));
    expect(window.location.pathname).toBe("/Games");
  });
});


})