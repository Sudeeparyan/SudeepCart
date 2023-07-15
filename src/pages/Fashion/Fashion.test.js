import { screen, render, fireEvent } from "@testing-library/react"
import FashionCategory from "./FashionCategory";
import FashionStore from "./FashionStore";
import React from 'react';

const handleClick = jest.fn();

const sampleData=[
    {
        "id": 51,
        "title": "half sleeves T shirts",
        "description": "Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands",
        "price": 23,
        "discountPercentage": 12.76,
        "rating": 4.26,
        "stock": 132,
        "brand": "Vintage Apparel",
        "category": "mens-shirts",
        "thumbnail": "https://i.dummyjson.com/data/products/51/thumbnail.jpg",
        "images": [
          "https://i.dummyjson.com/data/products/51/1.png",
          "https://i.dummyjson.com/data/products/51/2.jpg",
          "https://i.dummyjson.com/data/products/51/3.jpg",
          "https://i.dummyjson.com/data/products/51/thumbnail.jpg"
        ]
      }
]

describe('FashionCategory', () =>{
    test('fashion renders correctly',()=>{
        render(<FashionCategory/>)
    })
})

describe('FashionStore',()=>{
    test('fashion stores renders correctly',()=>{
        render(<FashionStore item={sampleData} handleClick={handleClick} />)
        const itemTitle = screen.getByTestId('title')
        expect(itemTitle.innerText).toBe('half sleeves T shirts');
    })
})







describe('FashionStore function', () => {
  const item = {
    "id": 51,
        "title": "half sleeves T shirts",
        "description": "Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands",
        "price": 23,
        "discountPercentage": 12.76,
        "rating": 4.26,
        "stock": 132,
        "brand": "Vintage Apparel",
        "category": "mens-shirts",
        "thumbnail": "https://i.dummyjson.com/data/products/51/thumbnail.jpg",
        "images": [
          "https://i.dummyjson.com/data/products/51/1.png",
          "https://i.dummyjson.com/data/products/51/2.jpg",
          "https://i.dummyjson.com/data/products/51/3.jpg",
          "https://i.dummyjson.com/data/products/51/thumbnail.jpg"
        ]
  };

  const handleClick = jest.fn();

  test('renders fashion item correctly', () => {
    render(
      <FashionStore item={item} handleClick={handleClick} />
    );

    // Check if title is rendered
    expect(screen.getByTestId('title')).toHaveTextContent('half sleeves T shirts');

    // Check if description is rendered
    expect(screen.getByText('description')).toBeInTheDocument('Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands');

    // Check if price is rendered
    expect(screen.getByText('price')).toBeInTheDocument('23');
  });

  test('handles add to cart button click correctly', () => {
    render(
      <FashionStore item={item} handleClick={handleClick} />
    );

    // Click on the "Add to Cart" button
    fireEvent.click(screen.getByText('Add to Cart'));

    // Check if handleClick function is called with the item
    expect(handleClick).toHaveBeenCalledWith(item);
  });
});
