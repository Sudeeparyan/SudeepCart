import { screen, render } from "@testing-library/react"
import Planner from "./Planner"
import React from 'react';
describe('Planner',()=>{
    test('render Planner Page',()=>{
        render(<Planner/>)
    })

describe('Planner', () => {
  test('renders Planner component correctly', () => {
    render(<Planner />);
    const iframeElement = screen.getByTestId('planner');

    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute('src', 'https://sudeeparyantimely.glitch.me/');
    expect(iframeElement).toHaveAttribute('alt', 'SudeepAryanWeatherapp');

  });

});

})