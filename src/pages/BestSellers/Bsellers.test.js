import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import Bsellers from "./Bsellers";

describe('Bsellers', () => {
  const item = {
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    id: 1,
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  test('renders title and details correctly', () => {
    render(<Bsellers item={item} />);
    expect(screen.getByTestId('title')).toHaveTextContent('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
    expect(screen.getByTestId('price')).toHaveTextContent('109.95');
  });

  test('calls handleClick when "Add to Cart" button is clicked', () => {
    const handleClick = jest.fn();
    render(<Bsellers item={item} handleClick={handleClick} />);
    const addToCartButton = screen.getByText('Add to Cart');

    fireEvent.click(addToCartButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(item);
  });

});

