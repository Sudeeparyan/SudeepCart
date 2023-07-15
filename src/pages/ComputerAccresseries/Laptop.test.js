import { screen, render } from "@testing-library/react"
import Laptops from "./Laptops"
const handleClick = jest.fn();

const sampleData=[{
    "id": 6,
    "title": "MacBook Pro",
    "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
    "price": 1749,
    "discountPercentage": 11.02,
    "rating": 4.57,
    "stock": 83,
    "brand": "Apple",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
    "images": [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },]

describe('Laptop test functionality', ()=>{
    test('Laptop renders correctly',()=>{
        render(<Laptops item={sampleData} handleClick={handleClick}/>)
        const itemTitle=screen.getByTestId('brand')
        expect(itemTitle).toBeInTheDocument('Apple')
    })
    test('Laptop correctly',()=>{
      render(<Laptops item={sampleData} handleClick={handleClick}/>)
      const itemTitle=screen.getByTestId('description')
      expect(itemTitle).toBeInTheDocument('MacBook Pro 2021 with mini-LED display may launch between September, November')
  })
})