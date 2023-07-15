import React from 'react';
import { screen,render, fireEvent } from '@testing-library/react';
import Cart from './Cart';
import { BrowserRouter } from 'react-router-dom';
import Categories from '../../components/Categories/Categories';
import userEvent from '@testing-library/user-event';
describe('Cart test functionality',()=>{
    test('Renders Cart Page',()=>{
        render(<Cart/>)        
    })
})
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
  fireEvent.click( screen.getByTestId('cart'));
  expect(window.location.pathname).toBe("/cart");
});


describe('Cart', () => {
  const cartItems = [
    {
      id: 1,
      title: 'Item 1',
      amount: 2,
      price: 10,
    },
    {
      id: 2,
      title: 'Item 2',
      amount: 1,
      price: 5,
    },
  ];

  const cart = [...cartItems];

  const setCart = jest.fn();
  const handleChange = jest.fn();
  
  test('renders cart items correctly', () => {
    render(
      <Cart cartItems={cartItems} cart={cart} setCart={setCart} handleChange={handleChange} />
    );

    // Check if item titles are rendered
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();

    // Check if item amounts are rendered
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();

    // Check if item prices are rendered
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('handles remove item correctly', () => {
    render(
      <Cart cartItems={cartItems} cart={cart} setCart={setCart} handleChange={handleChange} />
    );

    // Click on remove button for an item
    fireEvent.click(screen.getByText('Remove'));

    // Check if setCart function is called with the updated cart
    expect(setCart).toHaveBeenCalledWith([
      {
        id: 2,
        title: 'Item 2',
        amount: 1,
        price: 5,
      },
    ]);
  });

  test('handles item increment and decrement correctly', () => {
    render(
      <Cart cartItems={cartItems} cart={cart} setCart={setCart} handleChange={handleChange} />
    );

    // Click on the increment button for an item
    fireEvent.click(screen.getByText('+'));

    // Check if handleChange function is called with the incremented amount
    expect(handleChange).toHaveBeenCalledWith(
      {
        id: 1,
        title: 'Item 1',
        amount: 2,
        price: 10,
      },
      +1
    );

    // Click on the decrement button for an item
    fireEvent.click(screen.getByText('-'));

    // Check if handleChange function is called with the decremented amount
    expect(handleChange).toHaveBeenCalledWith(
      {
        id: 1,
        title: 'Item 1',
        amount: 2,
        price: 10,
      },
      -1
    );
  });
});
