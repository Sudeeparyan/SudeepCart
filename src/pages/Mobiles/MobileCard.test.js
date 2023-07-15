import { screen, render ,fireEvent} from "@testing-library/react"
import MobileCard from "./MobileCard"


const smartPhone={
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  "images": [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ]
}

test('renders MobileCard component without errors', () => {

  render(<MobileCard smartPhone={smartPhone} />);
});

test('displays correct smartphone details', () => {
  render(<MobileCard smartPhone={smartPhone} />);

  expect(screen.getByTestId('brand')).toHaveTextContent(smartPhone.brand);
  expect(screen.getByTestId('title')).toBeInTheDocument();
});

test('calls handleClick function when "Add to Cart" button is clicked', () => {
  const handleClick = jest.fn();
  render(<MobileCard smartPhone={smartPhone} handleClick={handleClick} />);
  const addToCartButton = screen.getByText('Add to Cart');

  fireEvent.click(addToCartButton);

  expect(handleClick).toHaveBeenCalledWith(smartPhone);
});
