// import { screen, render } from "@testing-library/react"
// import BooksCards from './BooksCards'
// const handleClick = jest.fn();

import React from 'react';
import {screen, render, fireEvent } from '@testing-library/react';
import BooksCards from './BooksCards';

describe('BooksCards', () => {
  const item = {
    id: 1001,
    title: "My First Book of Pencil Control",
    author: "by Wonder House Books | 25 April 2018",
    price: 89,
    img: "https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  };

  test('renders book details correctly', () => {
    render(<BooksCards item={item} />);
    expect(screen.getByText('My First Book of Pencil Control')).toBeInTheDocument();
    // expect(screen.getByRole('header',{level:4})).toBeInTheDocument();
    // expect(screen.getByText('89')).toBeInTheDocument();
  });

  test('calls handleClick when "Add to Cart" button is clicked', () => {
    const handleClick = jest.fn();
    render(<BooksCards item={item} handleClick={handleClick} />);
    const addToCartButton = screen.getByText('Add to Cart');

    fireEvent.click(addToCartButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(item);
  });

});
