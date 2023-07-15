import { screen, render, fireEvent } from "@testing-library/react";
import Books from "../Books";
import { BrowserRouter } from "react-router-dom";
import Categories from "../Categories";
import userEvent from "@testing-library/user-event";


describe("Books test functionality", () => {
  test("Books renders", () => {
    render(<Books />);
  });
  test("Books function renders", () => {
    render(
      <BrowserRouter>
        <Categories />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByTestId("Books"));
    expect(window.location.pathname).toEqual("/Books");
  });
});

describe("Books", () => {
  const handleClick = jest.fn();

  test("renders books component correctly", () => {
    render(
      <Books handleClick={handleClick} />
    );

    // Check if books component is rendered
    expect(screen.getByTestId("books")).toBeInTheDocument();

    // Check if book cards are rendered
    const bookCards = screen.getAllByTestId("bookcard");
    expect(bookCards.length).toBe(Books.length);
  });

  test("calls handleClick when Add to Cart button is clicked", () => {
    const { getAllByTestId } = render(<Books handleClick={handleClick} />);

    // Click on Add to Cart buttons
    const addToCartButtons = screen.getAllByTestId("addtocartbutton");
    addToCartButtons.forEach((button) => {
      fireEvent.click(button);
    });

    // Check if handleClick is called the correct number of times
    expect(handleClick).toHaveBeenCalledTimes(list.length);
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
    fireEvent.click( screen.getByTestId('Books'));
    expect(window.location.pathname).toBe("/Books");
  });

});
