import { screen, render } from "@testing-library/react"
import Dealoftheday from "./Dealoftheday"
const handleClick=jest.fn();

describe('dealOftheDay',()=>{
    test('Dealoftheday renders correctly',()=>{
        render(<Dealoftheday/>)
    })
})