import More from "../More"
import { screen, render,fireEvent } from "@testing-library/react"
import Categories from "../Categories"
import { BrowserRouter } from "react-router-dom"
import React from 'react';
import userEvent from "@testing-library/user-event";
// import { BrowserRouter as Router } from 'react-router-dom';

describe('More functionality', ()=>{
    test('<More renders properly',()=>{
        render(<More/>)
    })
    test ('More renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        // expect(screen.getByTestId('bestSellers'))
        fireEvent.click(screen.getByTestId('More'))
        expect(window.location.pathname).toEqual('/More')
    }) 



describe('More', () => {
  test('renders More component correctly', () => {
    render(
      <BrowserRouter>
        <More />
      </BrowserRouter>
    );

    const weatherAppLink = screen.getByRole('link', { name: /weatherapp/i });
    const plannerLink = screen.getByRole('link', { name: /planner/i });

    expect(weatherAppLink).toBeInTheDocument();
    expect(plannerLink).toBeInTheDocument();

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
    fireEvent.click( screen.getByTestId('More'));
    expect(window.location.pathname).toBe("/More");
  });

});

})