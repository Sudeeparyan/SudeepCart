import { screen, render,fireEvent } from "@testing-library/react"
import Electronic from "./Electronic"
import React from 'react';

describe('Electronic', () => {
  const item = {
    "Title": "Apple EarPods",
    "Description": "Apple EarPods with Lightning Connector",
    "Category": "Gadgets",
    "Image": "https://m.media-amazon.com/images/I/31CaPefY0QL._AC_UY218_.jpg",
    "Price": 1599,
    "Deals": null,
    "Availability": 5,
    "Stars": "4.4 "
  };

  test('renders title and details correctly', () => {
    render(<Electronic item={item} />);
    // expect(screen.getByTestId('electronictitle')).toHaveTextContent();
    expect(screen.getByTestId('electronicdescription')).toHaveTextContent('Apple EarPods with Lightning Connector');
    expect(screen.getByTestId('electronicprice')).toHaveTextContent('1599');
    expect(screen.getByTestId('electronicrating')).toHaveTextContent('4.4');
    expect(screen.getByTestId('electronicavailability')).toHaveTextContent('5');
  });

  test('calls handleClick when "Add to Cart" button is clicked', () => {
    const handleClick = jest.fn();
    render(<Electronic item={item} handleClick={handleClick} />);
    const addToCartButton = screen.getByText('Add to Cart');

    fireEvent.click(addToCartButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(item);
  });

});
