import { screen, render, fireEvent } from "@testing-library/react";
import React from 'react';
import ItemCard from './ItemCard';
const handleClick = jest.fn();
const sampleData=[
    {
        "fruits": [
            {
              "name": "apple",
              "stockleft": "56",
              "totalstock": "120",
              "price": "120"
            },
        ]
    }
]

describe('Groceries test functionality',()=>{
    test('Groceries renders correctly',()=>{
        render(<ItemCard item={sampleData} handleClick={handleClick} />)
        const itemTitle = screen.getByTestId('title')
        expect(itemTitle.innerText).toBe('apple');
    })
})

describe('ItemCard', () => {
  const item = {
    name: 'Item',
    price: 10,
  };

  const currCategory = 'groceries';
  const setCartItems = jest.fn();

  test('renders item card correctly', () => {
    render(
      <ItemCard
        item={item}
        currCategory={currCategory}
        cartItems={[]}
        setCartItems={setCartItems}
      />
    );

    // Check if item name is rendered
    expect(screen.getByText('Item')).toBeInTheDocument();

    // Check if price is rendered
    expect(screen.getByText('Price - 10')).toBeInTheDocument();
  });

  test('handles add to cart button click correctly', () => {
    render(
      <ItemCard
        item={item}
        currCategory={currCategory}
        cartItems={[]}
        setCartItems={setCartItems}
      />
    );

    // Click on the "Add to Cart" button
    fireEvent.click(screen.getByText('Add to Cart'));

    // Check if setCartItems function is called with the item
    expect(setCartItems).toHaveBeenCalledWith([item]);
  });
});

