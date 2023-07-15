import { screen, render } from "@testing-library/react"
import Home from "./Home"
import Imageslider from '../../components/Imageslider/Imageslider'
import Dealoftheday from '../../components/Dealoftheday/Dealoftheday'
import HomeProducts from './HomeProducts'
import React from 'react';


const handleClick = jest.fn();

describe('Home test functionality', () => {
    test('Home renders correctly',()=>{
        render(<Home handleClick={handleClick}/>)
    })
})




describe('Home', () => {
  const handleClick = jest.fn();

  test('renders home component correctly', () => {
    render(<Home handleClick={handleClick} />);

    // Check if imageslider component is rendered
    expect(screen.getByTestId('imageslider')).toBeInTheDocument();

    // Check if dealoftheday component is rendered
    expect(screen.getByTestId('dealoftheday')).toBeInTheDocument();

    // Check if homeproducts component is rendered
    expect(screen.getByTestId('homeproducts')).toBeInTheDocument();
  });

});
