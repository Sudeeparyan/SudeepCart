import RoboElements from "../RoboElements";
import { screen, render,fireEvent } from "@testing-library/react"
import Categories from "../Categories"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event";


describe("Robo Elements function", () => {
  test("Robo Elements renders", () => {
    render(<RoboElements />);
  });
  test ('RoboElements renders',()=>{
    render(
    <BrowserRouter>
        <Categories/>
    </BrowserRouter>)
    fireEvent.click(screen.getByTestId('RoboElements'))
    expect(window.location.pathname).toEqual('/RoboElements')
})   

describe('RoboElements', () => {
  test('renders RoboElements component correctly', () => {
  render(<RoboElements />);

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
    fireEvent.click( screen.getByTestId('RoboElements'));
    expect(window.location.pathname).toBe("/RoboElements");
  });
});

});
