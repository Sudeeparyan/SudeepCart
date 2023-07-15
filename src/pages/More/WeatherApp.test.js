import { screen, render } from "@testing-library/react"
import WeatherApp from "./WeatherApp"
import React from 'react';

describe('WeatherApp test functionality', () => {
    test('renders WeatherApp', () => {
        render(<WeatherApp/>)
    })


describe('WeatherApp', () => {
  test('renders WeatherApp component correctly', () => {
    render(<WeatherApp />);

    // Check if the iframe element is rendered
    const iframeElement = screen.getByTestId('weatherapp');

    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute('src', 'https://wool-mature-llama.glitch.me/');
    expect(iframeElement).toHaveAttribute('alt', 'SudeepAryanWeatherapp');
    // expect(iframeElement).toHaveStyle({ height: '1150px', width: '100%' });

    // Add more assertions as needed...
  });

  // Add more test cases as needed...
});

})