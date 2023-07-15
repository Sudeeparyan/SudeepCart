import { screen, render, fireEvent } from "@testing-library/react";
import BestSeller from "../BestSeller";
import { BrowserRouter } from "react-router-dom"
import Categories from "../Categories";
import userEvent from '@testing-library/user-event'
describe("BestSeller test functionality", () => {
  test("BestSellers renders correctly", () => {
    render(<BestSeller />);
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
    fireEvent.click( screen.getByTestId('bestSellers'));
    expect(window.location.pathname).toBe("/bestSellers");
  });
});
