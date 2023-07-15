import { screen, render,fireEvent } from "@testing-library/react"
import Categories from "../Categories"
import { BrowserRouter } from "react-router-dom"
import Subscrption from "../Subscrption";
import userEvent from "@testing-library/user-event";

describe("Subscrption function", () => {
  test("Subscrption renders", () => {
    render(<Subscrption />);
  });
  test ('Subscrption function renders',()=>{
    render(
    <BrowserRouter>
        <Categories/>
    </BrowserRouter>)
    fireEvent.click(screen.getByTestId('Subscrption'))
    expect(window.location.pathname).toEqual('/Subscrption')
}) 

describe('Subscription', () => {
  test('renders subscription component correctly', () => {
    render(<Subscrption />);

    const heading = screen.getByText('Comming Soon.....');
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
    fireEvent.click( screen.getByTestId('Subscrption'));
    expect(window.location.pathname).toBe("/Subscrption");
  });

});

});
